import {useState, useEffect} from 'react'
import axios from 'axios'

const API_Facebook = 'http://localhost:8000/data'
const API_Linkedin = 'http://localhost:8000/data'
const API_Twitter = 'http://localhost:8000/data'

const initialState = {
  facebook: {},
  twitter: {},
  linkedin: {},
  custom: {},
  isLogged: true,
}

const useInitialState = () => {
  const [state, setState] = useState(initialState)
  const [facebookData, setFacebookData] = useState({})
  const [linkedinData, setLinkedinData] = useState({})
  const [twitterData, setTwitterData] = useState({})

  useEffect(async () => {
    const {data} = await axios.get(API_Facebook)
    const fb = {...data[0].fb}
    setFacebookData({...fb[0]})
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
