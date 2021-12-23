import React from 'react'
import Header from '../components/Header/Header'

function handleClick() {
  history.push("/home");
}
const Home = () => {
  return (
    <div>
       <Header onClickLogin={handleClick} onClickSignup={handleClick} isLogged />
      Mi home
    </div>
  )
}

export default Home
