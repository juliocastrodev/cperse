import { Chat } from "../Chat/Chat"
import { Speech } from "../Speech/Speech"
import styles from "./LetsTalk.module.scss"

export const LetsTalk = () => (
  <section class={styles.section}>
    <Speech />

    <Chat />
  </section>
)
