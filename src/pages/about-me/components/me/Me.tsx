import { Cynthia } from "../cynthia/Cynthia"
import { KnowMore } from "../know-more/KnowMore"
import { Picture } from "../picture/Picture"
import styles from "./Me.module.scss"

export const Me = () => {
  return (
    <section class={styles.section}>
      <div class={styles.content}>
        <Picture />
        <Cynthia />
      </div>

      <KnowMore />
    </section>
  )
}
