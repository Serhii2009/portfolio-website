import About from './Components/About/About'
import Hero from './Components/Hero/Hero'
import MyWork from './Components/MyWork/MyWork'
import NavBar from './Components/NavBar/NavBar'
import Services from './Components/Services/Services'

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <MyWork />
    </div>
  )
}

export default App
