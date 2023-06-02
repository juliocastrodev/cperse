import { A } from "@solidjs/router"
import { Bold } from "../../../../shared/components/Bold/Bold"
import { RightArrowIcon } from "../../../../shared/components/Icons/RightArrowIcon"
import styles from "./KnowMore.module.scss"

export const KnowMore = () => (
  <div class={styles.div}>
    <p>
      Además de profesional del marketing y el diseño, soy muchas más cosas...
    </p>

    <A href="/" class={styles.link}>
      <Bold>¿Quieres descubrirlas?</Bold>
      <RightArrowIcon />
    </A>
  </div>
)
