import Features from "./components/features.jsx"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Model from "./components/Model.jsx"
import Navbar from "./components/Navbar"

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

export default App
