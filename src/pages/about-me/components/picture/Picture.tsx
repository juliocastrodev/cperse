import pictureSrc from "../../../../assets/me/picture.webp"
import styles from "./Picture.module.scss"

export const Picture = () => (
  <div class={styles.div}>
    <img src={pictureSrc} alt="A picture of Cynthia Perera" />
  </div>
)
