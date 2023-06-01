import { A } from "@solidjs/router"
import styles from "./NavBar.module.scss"

export const NavBar = () => {
  return (
    <nav class={styles.container}>
      <A href="/">cperse.com</A>

      <ul>
        <li>
          <A href="/">Inicio</A>
        </li>
        <li>
          <A href="#">Portfolio</A>
        </li>
        <li>
          <A href="#">Sobre mí</A>
        </li>
        <li>
          <A href="/contact">Contacto</A>
        </li>
      </ul>
    </nav>
  )
}
