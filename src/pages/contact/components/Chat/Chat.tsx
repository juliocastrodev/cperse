import { Bold } from "../../../../shared/components/Bold/Bold"
import { Card } from "../../../../shared/components/Card/Card"
import { ChatIcon } from "../../../../shared/components/Icons/ChatIcon"
import styles from "./Chat.module.scss"

export const Chat = () => {
  return (
    <div class={styles.container}>
      <Card>
        <p>Hola! 👋 </p>
      </Card>

      <Card>
        <p>
          🚀 ¿Crees que encajo en tu proyecto?
          <br />
          Escríbeme a 📩 <Bold>cyn.perera@gmail.com</Bold>
        </p>
      </Card>

      <ChatIcon />
    </div>
  )
}
