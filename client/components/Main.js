import React from 'react'
import Routes from './Routes'
import Navbar from './Navbar'

const Main = () => {

  return (
    <div id='main' className='bgcolor-darkerslateblue'>
      <Navbar />
      <div className='main-container'>
        <Routes />
      </div>
    </div>
  )
}

export default Main
