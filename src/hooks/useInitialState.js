import {useState, useEffect} from 'react'
import axios from 'axios'
import {useAuth0} from '@auth0/auth0-react'

const api_base_url = 'api'
const url_fake = 'http://localhost:8000/data'
/* const API_Facebook = `${url_fake}`
const API_Linkedin = `${url_fake}`
const API_Twitter = `${url_fake}`
const API_Custom = `${url_fake}` */

const API_Facebook = `${api_base_url}/v1/facebook/info`;
const API_Linkedin = `${api_base_url}/v1/linkedin/info`;
const API_Twitter = `${api_base_url}/v1/twitter/info`;
const API_Custom = `${api_base_url}/v1/twitter/info`;

const initialState = {
  facebook: {},
  twitter: {},
  linkedin: {},
  custom: {},
  currentObject: {},
  dashBoardSelected: '',
  socialNetworks: ['facebook', 'twitter', 'linkedin', 'custom'],
  isAuthenticated: false,
  user: null
}

const useInitialState = () => {
  const [state, setState] = useState(initialState)
  const [facebookData, setFacebookData] = useState({})
  const [linkedinData, setLinkedinData] = useState({})
  const [twitterData, setTwitterData] = useState({})
  const [customData, setCustomData] = useState({})

  const {getAccessTokenSilently, isAuthenticated, user, isLoading} = useAuth0();

  // const API_Custom = `${api_base_url}/v1/users/customInfo/${user.sub}`;

  const authSelection = (authSelected) => {
    if (authSelected === 'facebook') {
      setState({
        ...state,
        currentObject: facebookData,
        dashBoardSelected: authSelected
      })
    } else if (authSelected === 'linkedin') {
      setState({
        ...state,
        currentObject: linkedinData,
        dashBoardSelected: authSelected
      })
    } else if (authSelected === 'twitter') {
      setState({
        ...state,
        currentObject: twitterData,
        dashBoardSelected: authSelected
      })
    } else if (authSelected === 'custom') {
      setState({
        ...state,
        currentObject: state.custom,
        dashBoardSelected: authSelected
      })
    }
  }

  useEffect(async () => {
    const token = await getAccessTokenSilently()

    try {
      const {data} = await axios.get(API_Facebook, {
        headers: {
          Authorization: `Bearer ${token}`
        },
        crossdomain: true
      })
      // const {data} = await axios.get(API_Facebook)

      // setFacebookData({...data[0]})
      setFacebookData({...data.fb})
    } catch (error) {
      console.error('error => ', error)
      console.log('isAuth: ', state.isAuthenticated);
      setState({
        ...state,
        facebook: {},
      })
    }
  }, [])

  useEffect(async () => {
    const token = await getAccessTokenSilently()

    try {
      const {data} = await axios.get(API_Linkedin, {
        headers: {
          Authorization: `Bearer ${token}`
        },
        crossdomain: true
      })
      // const {data} = await axios.get(API_Linkedin)

      // setLinkedinData({...data[0]})
      setLinkedinData({...data.lk})
    } catch (error) {
      console.error('error => ', error)
      console.log('isAuth: ', state.isAuthenticated);
      setState({
        ...state,
        linkedin: {},
      })
    }
  }, [])

  useEffect(async () => {
    const token = await getAccessTokenSilently()

    try {
      const {data} = await axios.get(API_Twitter, {
        headers: {
          Authorization: `Bearer ${token}`
        },
        crossdomain: true
      })
      // const {data} = await axios.get(API_Twitter)

      //setTwitterData({...data[0]})
      setTwitterData({...data.tw})
    } catch (error) {
      console.error('error => ', error)
      console.log('isAuth: ', state.isAuthenticated);
      setState({
        ...state,
        twitter: {},
      })
    }
  }, [])

  useEffect(() => {
    setState({
      ...state,
      facebook: {...facebookData},
      twitter: {...twitterData},
      linkedin: {...linkedinData},
      custom: {...customData},
      currentObject: {...customData},
      isAuthenticated: isAuthenticated,
      user: user,
      dashBoardSelected: 'custom',
    })
  }, [facebookData, twitterData, linkedinData, customData, isAuthenticated, user])

  useEffect(async () => {
    const token = await getAccessTokenSilently();
    const usr = await user;
    // const us = state.user.sub;
    // console.log(user);

    console.log('custom');
    if(state.user) {
      console.log(state.user);
      const API_Custom = `${api_base_url}/v1/users/customInfo/${us}`;
    }
    /* try {
      const data = await axios.get(API_Custom, {
        headers: {
          Authorization: `Bearer ${token}`
        },
        crossdomain: true
      })
      // const {data} = await axios.get(API_Custom)

      // setCustomData({...data[0]})
      setCustomData({...data})
    } catch (error) {
      console.error('error => ', error)
      console.log('isAuth: ', state.isAuthenticated);
      setState({
        ...state,
        custom: {},
      })
    } */
  }, [])

  return {
    state,
    authSelection,
  }
}

export default useInitialState
