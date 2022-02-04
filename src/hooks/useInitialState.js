import {useState, useEffect} from 'react'
import axios from 'axios'
import { useAuth0 } from "@auth0/auth0-react";

const api_base_url = 'api';

const API_Facebook = `${api_base_url}/v1/facebook/info`;
// const API_Linkedin = `${api_base_url}/api/v1/linkedin/info`;
// const API_Twitter = `${api_base_url}/api/v1/twitter/info`;
const API_Linkedin = 'http://localhost:8000/data'
const API_Twitter = 'http://localhost:8000/data'

const initialState = {
  facebook: {},
  twitter: {},
  linkedin: {},
  custom: {},
  // isLogged: true,
}

const useInitialState = () => {
  const [state, setState] = useState(initialState)
  const [facebookData, setFacebookData] = useState({})
  const [linkedinData, setLinkedinData] = useState({})
  const [twitterData, setTwitterData] = useState({})

  const { getAccessTokenSilently } = useAuth0();

  useEffect(async () => {
    const token = await getAccessTokenSilently();

    const {data} = await axios.get(API_Facebook, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      crossdomain: true
    })
    setFacebookData({...data.fb})
  }, [])

  useEffect(async () => {
    const {data} = await axios.get(API_Linkedin)
    const li = {...data[0].lk}
    setLinkedinData({...li[0]})
  }, [])

  useEffect(async () => {
    const {data} = await axios.get(API_Twitter)
    const tw = {...data[0].tw}
    setTwitterData({...tw[0]})
  }, [])

  state.facebook = facebookData
  state.linkedin = linkedinData
  state.twitter = twitterData

  const addSocialData = (payload, socialNetwork) => {
    if (socialNetwork === 'facebook') {
      setState({
        ...state,
        facebook: payload,
      })
    } else if (socialNetwork === 'linkedin') {
      setState({
        ...state,
        linkedin: payload,
      })
    } else if (socialNetwork === 'twitter') {
      setState({
        ...state,
        twitter: payload,
      })
    }
  }

  return {
    state,
    addSocialData,
  }
}

export default useInitialState
