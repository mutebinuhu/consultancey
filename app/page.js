import Image from 'next/image'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import AboutUs from './components/AboutUs'

export default function Home() {
  return (
    <main className="min-h-screen">
     <NavBar/>
     <Banner/>
     <AboutUs/>
    </main>
  )
}
