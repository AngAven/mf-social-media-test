import React, {useContext} from 'react'
import AppContext from '@context/AppContext'

function CardWork(){
  const {state} = useContext(AppContext)
  const {facebook, linkedin, twitter} = state

  return (
    <>
      hola
    </>
  )
}

export default CardWork
