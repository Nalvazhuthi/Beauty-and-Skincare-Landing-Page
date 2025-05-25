import BestSellers from "./pages/bestSellers"
import Contact from "./pages/contact"
import Essentials from "./pages/essentials"
import Footer from "./pages/footer"
import Highlights from "./pages/highlights"
import Home from "./pages/home"
import NewArrivals from "./pages/newArrivals"
import "./style/main.scss"

const App = () => {
  return (
    <div className='content-container'>
      <Home />
      <Essentials />
      <NewArrivals />
      <Highlights />
      <BestSellers />
      <Contact />
      <Footer />
    </div>
  )
}

export default App