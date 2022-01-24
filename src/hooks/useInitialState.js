import { useState, useEffect } from "react"
import axios from "axios"

const API_Facebook = 'https://my.api.mockaroo.com/facebook.json?key=f5fe39d0'
const API_Linkedin = 'https://my.api.mockaroo.com/linked_in.json?key=d48cf750'

const initialState = {
    socialData: {
        facebook: {},
        twitter: {},
        linkedin: {},
        custom: {}
    },
    isLogged: false,
}

const useInitialState = () => {
    const [state, setState] = useState(initialState)
    const [facebookData, setFacebookData] = useState({})
    const [linkedinData, setLinkedinData] = useState({})

    useEffect(async () => {
        // const {data} = await axios.get(API_Facebook)
        // setFacebookData(data)
        // state.socialData.facebook = data
    }, [])

    useEffect(async () => {
        // const {data} = await axios.get(API_Linkedin)
        // setLinkedinData(data)
        // state.socialData.linkedin = data
    }, [])

    const addSocialData = (payload, socialNetwork) => {
        if (socialNetwork === 'facebook') {
            setState({
                ...state,
                socialData: {
                    ...state.socialData,
                    facebook: payload,
                },
            })
        }
    }

    return {
        state,
        addSocialData,
    }
}

export default useInitialState
