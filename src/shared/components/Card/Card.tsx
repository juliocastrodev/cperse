import { ParentComponent } from "solid-js"
import styles from "./Card.module.scss"

export const Card: ParentComponent = (props) => {
  return <div class={styles.container}>{props.children}</div>
}
