import React from 'react'
import ServiceHero from "../components/Services/ServiceHero"
import Servicelist from "../components/Services/servicelist"
import ServiceText from "../components/Services/servicetext"
import Header from "../components/Header"
import Footer from "../components/Footer"


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