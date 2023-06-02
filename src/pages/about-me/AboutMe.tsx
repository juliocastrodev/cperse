import { Footer } from "../../shared/components/Footer/Footer"
import { Fullscreen } from "../../shared/components/Fullscreen/Fullscreen"
import { Header } from "../../shared/components/Header/Header"
import { NavBar } from "../../shared/components/NavBar/NavBar"
import { Sticky } from "../../shared/components/Sticky/Sticky"
import { Me } from "./components/me/Me"

const AboutMe = () => {
  return (
    <Fullscreen>
      <Sticky>
        <Header />
        <NavBar />
      </Sticky>

      <Me />

      <Footer />
    </Fullscreen>
  )
}

export default AboutMe
