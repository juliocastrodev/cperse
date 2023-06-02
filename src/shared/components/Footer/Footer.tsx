import { toSpaceVar } from "../../utils/spacing"
import { LinkedInIcon } from "../Icons/LinkedInIcon"
import { MediumIcon } from "../Icons/MediumIcon"
import styles from "./Footer.module.scss"

export const Footer = () => {
  return (
    <footer class={styles.footer}>
      <div class={styles.icons}>
        <MediumIcon width={toSpaceVar(186)} height={toSpaceVar(31)} />
        <LinkedInIcon width={toSpaceVar(52)} height={toSpaceVar(58)} />
      </div>

      <p class={styles.credits}>
        Web diseñada por Cynthia Perera y desarrollada por Julio Castro
      </p>
    </footer>
  )
}
