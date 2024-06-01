
import './App.css'
import Footer from './components/layout/footer/Footer'
import MainMovieContainer from './components/layout/mainMovie/MainMovieContainer'
import Navbar from './components/layout/navbar/Navbar'
import SliderZone from './components/layout/sliderZone/SliderZone'

function App() {

  return (
    <>
      <Navbar/>
      <MainMovieContainer/>
      <SliderZone/>
      <Footer/>
    </>
  )
}

export default App
