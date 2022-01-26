import {useState, useEffect} from 'react'
import axios from 'axios'

const API_Facebook = 'http://localhost:8000/fb'
const API_Linkedin = 'https://my.api.mockaroo.com/linked_in.json?key=d48cf750'

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

  useEffect(async () => {
    const {data} = await axios.get(API_Facebook)
    setFacebookData({...data[0]})
  }, [])

  state.facebook = facebookData

  useEffect(async () => {
    const {data} = await axios.get(API_Linkedin)
    setLinkedinData({...data[0]})
  }, [])

  state.linkedin = linkedinData

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
