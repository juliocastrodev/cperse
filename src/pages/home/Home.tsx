import { A } from "@solidjs/router"
import styles from "./Home.module.scss"
import { Header } from "../../components/Header/Header"
import { Fullscreen } from "../../components/Fullscreen/Fullscreen"

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

      <section>
        <p>First hello world</p>
        <p class={styles.red}>Second hello world</p>
        <p>Third hello world</p>
        <A href="/contact">Go to Contact Page</A>
      </section>
    </Fullscreen>
  )
}

export default Home
