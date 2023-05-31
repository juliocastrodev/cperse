import { A } from "@solidjs/router"
import "./Home.scss"

const Home = () => {
  return (
    <main class="container">
      <h1>Home</h1>
      <p>First hello world</p>
      <p class="red">Second hello world</p>
      <p>Third hello world</p>
      <A href="/contact">Go to Contact Page</A>
    </main>
  )
}

export default Home
