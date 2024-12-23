

// import Clients from '@/components/Clients'

import FAQ from '@/components/FAQ'
import Features from '@/components/Features'
import HeroBanner from '@/components/HeroBanner'
import Chamber from '@/components/Chamber'
import React from 'react'
import Partners from '@/components/Partners'




const page = () => {
    return (
      <>

        <HeroBanner />
        <Features/>
        <Partners/>
         <Chamber/>
       <FAQ/>
      </>
  )
}

export default page