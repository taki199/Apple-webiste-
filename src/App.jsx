import Features from "./components/Features.jsx"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Model from "./components/Model.jsx"
import Navbar from "./components/Navbar"

import * as Sentry from '@sentry/react'
const App =() => {
 

  return (
    
    <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
      <Features/>

    </main>
  )
}

export default Sentry.withProfiler(App);
