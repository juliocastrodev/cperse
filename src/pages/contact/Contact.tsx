import { A } from "@solidjs/router"
import { Header } from "../../components/Header/Header"
import { Fullscreen } from "../../components/Fullscreen/Fullscreen"
import { Footer } from "../../components/Footer/Footer"
import { NavBar } from "../../components/NavBar/NavBar"
import { Sticky } from "../../components/Sticky/Sticky"

const Contact = () => (
  <Fullscreen>
    <Sticky>
      <Header />
      <NavBar />
    </Sticky>

    {/* TODO: remove example section */}
    <section
      style={{
        padding: "var(--space-l)",
        display: "flex",
        "flex-direction": "column",
        gap: "var(--space-m)",
      }}
    >
      <h2>Lorem title but in contact page</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
        corrupti atque neque! Distinctio ipsam nemo, porro, id culpa cupiditate
        nisi tenetur dolor facere dolore fuga quasi ea vitae. Minima, velit!
      </p>
      <div
        style={{
          width: "200px",
          height: "800px",
          "background-color": "lightblue",
        }}
      ></div>
      <A href="/">Go back to Home</A>
    </section>

    <Footer />
  </Fullscreen>
)

export default Contact
