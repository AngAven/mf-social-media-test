import React, {useContext} from 'react'
import AppContext from '@context/AppContext'
import ListWorks from '@components/ListWorks'

function CardWork(){
  const {state} = useContext(AppContext)
  const {facebook, linkedin, twitter} = state

  return (
    <>
      <ListWorks/>
    </>
  )
}

export default CardWork
