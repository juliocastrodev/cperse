import { Header } from "../../shared/components/Header/Header"
import { Fullscreen } from "../../shared/components/Fullscreen/Fullscreen"
import { Footer } from "../../shared/components/Footer/Footer"
import { NavBar } from "../../shared/components/NavBar/NavBar"
import { Sticky } from "../../shared/components/Sticky/Sticky"
import { LetsTalk } from "./components/LetsTalk/LetsTalk"

const Contact = () => (
  <Fullscreen>
    <Sticky>
      <Header />
      <NavBar />
    </Sticky>

    <LetsTalk />

    <Footer />
  </Fullscreen>
)

export default Contact
