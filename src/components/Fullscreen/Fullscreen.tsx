import type { ParentComponent } from "solid-js"
import styles from "./Fullscreen.module.scss"

export const Fullscreen: ParentComponent = (props) => (
  <main class={styles.main}>{props.children}</main>
)
