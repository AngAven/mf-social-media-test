import { useState } from "react"

const initialState = {
    socialData: {
        facebook: {},
        twitter: {},
        linkedin: {},
    },
}

const useInitialState = () => {
    const [state, setState] = useState(initialState)
    const addSocialData = payload => {
        setState({
            ...state,
            socialData: {
                ...state.socialData,
                ...payload,
            },
        })
    }

    return {
        state,
        addSocialData,
    }
}

export default useInitialState