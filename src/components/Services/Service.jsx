import React from 'react'
import ServiceHero from "./ServiceHero"
import Servicelist from "./servicelist"
import ServiceText from "./servicetext"
import Header from "../Utils/Header"
import Footer from "../Utils/Footer"


function Service() {
  return (
 <>
 <Header />
 <ServiceHero />
 <ServiceText />
 <Servicelist />
 <Footer />

 </>
  )
}

export default Service