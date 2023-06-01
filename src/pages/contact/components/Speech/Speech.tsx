import { MailIcon } from "../../../../shared/components/Icons/MailIcon"
import styles from "./Speech.module.scss"

export const Speech = () => {
  return (
    <div class={styles.container}>
      <h2>¿Hablamos?</h2>

      <div class={styles.content}>
        <p>
          ¿Estás buscando un perfil que aporte creatividad, optimismo y pasión a
          tu equipo? ¡Estás en el lugar indicado!
        </p>

        <p>Si quieres descubrir cómo puede mejorar tu proyecto, escríbeme.</p>

        <p> 👋 Todo empieza con un “hola”.</p>
      </div>

      <div class={styles.email}>
        <MailIcon />

        <p>cyn.perera@gmail.com</p>
      </div>
    </div>
  )
}
