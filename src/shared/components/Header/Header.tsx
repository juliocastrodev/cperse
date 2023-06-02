import { toSpaceVar } from "../../utils/spacing"
import { HamburgerIcon } from "../Icons/HamburgerIcon"
import { MailIcon } from "../Icons/MailIcon"
import styles from "./Header.module.scss"

export const Header = () => {
  return (
    <header class={styles.header}>
      <p>¿Quieres contactar conmigo?</p>

      <div class={styles.email}>
        <MailIcon width={toSpaceVar(20)} height={toSpaceVar(20)} />

        <p>cyn.perera@gmail.com</p>
      </div>

      <div class={styles.hamburger}>
        <HamburgerIcon />
      </div>
    </header>
  )
}
