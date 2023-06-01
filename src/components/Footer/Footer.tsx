import { LinkedInIcon } from "../Icons/LinkedInIcon"
import { MediumIcon } from "../Icons/MediumIcon"
import styles from "./Footer.module.scss"

export const Footer = () => {
  return (
    <footer class={styles.container}>
      <div class={styles.icons}>
        <MediumIcon />
        <LinkedInIcon />
      </div>

      <p class={styles.credits}>
        Web diseñada por Cynthia Perera y desarrollada por Julio Castro
      </p>
    </footer>
  )
}
