import { Header } from "../../shared/components/Header/Header"
import { Fullscreen } from "../../shared/components/Fullscreen/Fullscreen"
import { Footer } from "../../shared/components/Footer/Footer"
import { NavBar } from "../../shared/components/NavBar/NavBar"
import { Sticky } from "../../shared/components/Sticky/Sticky"
import { Banner } from "./components/Banner/Banner"

const Home = () => {
  return (
    <Fullscreen>
      <Sticky>
        <Header />
      </Sticky>

      <Banner />

      <Sticky>
        <NavBar />
      </Sticky>

      <Footer />
    </Fullscreen>
  )
}

export default Home
