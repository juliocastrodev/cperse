import { ParentComponent } from "solid-js"
import styles from "./Tag.module.scss"

export const Tag: ParentComponent = (props) => (
  <span class={styles.span}>{props.children}</span>
)
