import { A } from "@solidjs/router"
import { Header } from "../../components/Header/Header"

const Contact = () => (
  <main>
    <Header />
    <h1>Contact page</h1>
    <p>You can contact me here</p>
    <A href="/">Go back to Home</A>
  </main>
)

export default Contact
