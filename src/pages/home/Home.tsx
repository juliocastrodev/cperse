import { A } from "@solidjs/router"
import styles from "./Home.module.scss"
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

      {/* TODO: remove example section */}
      <section
        style={{
          padding: "var(--space-3)",
          display: "flex",
          "flex-direction": "column",
          gap: "var(--space-2)",
        }}
      >
        <h2>Lorem title</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
          corrupti atque neque! Distinctio ipsam nemo, porro, id culpa
          cupiditate nisi tenetur dolor facere dolore fuga quasi ea vitae.
          Minima, velit!
        </p>
        <A href="/contact">Go to Contact Page</A>

        <div
          style={{
            width: "200px",
            height: "800px",
            "background-color": "coral",
          }}
        ></div>
      </section>

      <Footer />
    </Fullscreen>
  )
}

export default Home
