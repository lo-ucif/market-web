import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProducts from './components/FeaturedProducts'
import ShopOffer from './components/ShopOffer'
import MostLoved from './components/MostLoved'
import CreateAccount from './components/CreateAccount'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="flex w-full flex-col bg-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
        <ShopOffer />
        <MostLoved />
        <CreateAccount />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App
