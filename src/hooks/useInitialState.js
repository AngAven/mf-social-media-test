import {useState, useEffect} from 'react'
import axios from 'axios'
import {useAuth0} from '@auth0/auth0-react'
import {useHistory} from 'react-router-dom'

const api_base_url = 'api'
const url_fake = 'http://localhost:8000/data'
/* const API_Facebook = `${url_fake}`
const API_Linkedin = `${url_fake}`
const API_Twitter = `${url_fake}`
const API_Custom = `${url_fake}` */

const API_Facebook = `${api_base_url}/v1/facebook/info`
const API_Linkedin = `${api_base_url}/v1/linkedin/info`
const API_Twitter = `${api_base_url}/v1/twitter/info`

const initialState = {
  facebook: {},
  twitter: {},
  linkedin: {},
  dashboard: {},
  currentObject: {},
  dashBoardSelected: '',
  socialNetworks: ['facebook', 'twitter', 'linkedin', 'custom'],
  isAuthenticated: false
}

const useInitialState = () => {
  const [state, setState] = useState(initialState)
  const [facebookData, setFacebookData] = useState({})
  const [linkedinData, setLinkedinData] = useState({})
  const [twitterData, setTwitterData] = useState({})
  const [customData, setDashboardData] = useState({})
  const history = useHistory()
  const {getAccessTokenSilently, isAuthenticated, user} = useAuth0()

  // Select's the dashboard to show
  const authSelection = (authSelected) => {
    if (!authSelected) {
      authSelected = window.location.href.split('/').slice(-1).toString()
    }

    switch (authSelected) {
      case 'facebook':
        setState({
          ...state,
          currentObject: facebookData,
          dashBoardSelected: authSelected
        })
        break
      case 'twitter':
        setState({
          ...state,
          currentObject: twitterData,
          dashBoardSelected: authSelected
        })
        break
      case 'linkedin':
        setState({
          ...state,
          currentObject: linkedinData,
          dashBoardSelected: authSelected
        })
        break
      case 'dashboard':
        setState({
          ...state,
          currentObject: state.dashboard,
          dashBoardSelected: authSelected
        })
        break
      default:
        break
    }
  }

  // Get and set Facebook data
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
      setState({
        ...state,
        facebook: {},
      })
    }
  }, [])

  // Get and set Linkedin data
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
      setState({
        ...state,
        linkedin: {},
      })
    }
  }, [])

  // Get and set Twitter data
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
      setState({
        ...state,
        twitter: {},
      })
    }
  }, [])

  // Get and set Dashboard data
  useEffect(() => {
    const callAPI = async () => {
      const token = await getAccessTokenSilently()
      const API_Custom = `api/v1/users/customInfo/${user.sub}`
      try {
        const {data} = await axios.get(API_Custom, {
          headers: {
            Authorization: `Bearer ${token}`
          },
          crossdomain: true
        })

        setDashboardData({...data})
      } catch (error) {
        console.error('error => ', error)
        setState({
          ...state,
          custom: {},
        })
      }
    }
    if (isAuthenticated) {
      callAPI()
    }
  }, [isAuthenticated])

  // Set the state
  useEffect(() => {
    setState({
      ...state,
      facebook: {...facebookData},
      twitter: {...twitterData},
      linkedin: {...linkedinData},
      dashboard: {...customData},
      currentObject: {...customData},
      isAuthenticated: isAuthenticated,
      dashBoardSelected: 'dashboard',
    })
  }, [facebookData, twitterData, linkedinData, customData, isAuthenticated])

  return {
    state,
    authSelection,
  }
}

export default useInitialState
