import { A } from "@solidjs/router"
import styles from "./Home.module.scss"
import { Header } from "../../components/Header/Header"

const Home = () => {
  return (
    <>
      <main class={`${styles.page} ${styles.container}`}>
        <Header />
        <h1>Home</h1>
        <p>First hello world</p>
        <p class={styles.red}>Second hello world</p>
        <p>Third hello world</p>
        <A href="/contact">Go to Contact Page</A>
        <div
          style={{
            width: "300px",
            height: "900px",
            "background-color": "coral",
          }}
        >
          A big square
        </div>
      </main>
    </>
  )
}

export default Home
