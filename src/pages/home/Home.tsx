import { A } from "@solidjs/router"
import styles from "./Home.module.scss"
import { Header } from "../../components/Header/Header"
import { Fullscreen } from "../../components/Fullscreen/Fullscreen"
import { Footer } from "../../components/Footer/Footer"

const Home = () => {
  return (
    <Fullscreen>
      <Header />

      <section class={styles.intro}>
        <div>
          <h1>Cynthia Perera</h1>
          <h2>
            Marketing Manager <br /> & UI Designer
          </h2>
        </div>
      </section>

      {/* TODO: remove example section */}
      <section
        style={{
          padding: "var(--space-l)",
          display: "flex",
          "flex-direction": "column",
          gap: "var(--space-m)",
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
