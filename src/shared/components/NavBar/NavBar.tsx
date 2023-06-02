import { A } from "@solidjs/router"
import styles from "./NavBar.module.scss"

export const NavBar = () => {
  return (
    <nav class={styles.nav}>
      <ul>
        <li>
          <A href="/">cperse.com</A>
        </li>
        <li>
          <A href="/">Inicio</A>
        </li>
        <li>
          <A href="#">Portfolio</A>
        </li>
        <li>
          <A href="/about-me">Sobre mí</A>
        </li>
        <li>
          <A href="/contact">Contacto</A>
        </li>
      </ul>
    </nav>
  )
}
