import { MailIcon } from "../Icons/MailIcon"
import styles from "./Header.module.scss"

export const Header = () => {
  return (
    <header class={styles.header}>
      <p>¿Quieres contactar conmigo?</p>

      <div class={styles.email}>
        <MailIcon />

        <p>cyn.perera@gmail.com</p>
      </div>
    </header>
  )
}
