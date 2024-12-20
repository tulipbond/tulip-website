import React from 'react'
import HeroBanner from './components/HeroBanner'
import Biography from './components/Biography'
import Owners from "./components/Owners"

const page = () => {
    return (
      <>
      <HeroBanner />
        <Biography />
        <Owners/>
      </>
  )
}

export default page