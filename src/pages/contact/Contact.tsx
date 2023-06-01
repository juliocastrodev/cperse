import { A } from "@solidjs/router"
import { Header } from "../../components/Header/Header"
import { Fullscreen } from "../../components/Fullscreen/Fullscreen"

const Contact = () => (
  <Fullscreen>
    <Header />

    <section>
      <h1>Contact page</h1>
      <p>You can contact me here</p>
      <A href="/">Go back to Home</A>
    </section>
  </Fullscreen>
)

export default Contact
