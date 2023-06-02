import { Tag } from "../../../../shared/components/Tag/Tag"
import styles from "./Cynthia.module.scss"

export const Cynthia = () => (
  <div class={styles.div}>
    <h2>Hola, soy Cynthia</h2>

    <div class={styles.content}>
      <p>
        Profesional del Marketing y el Diseño, con más de 6 años de experiencia
        desarrollando la identidad de marca de diferentes compañías yejecutando
        campañas de marketing que impulsan el crecimiento estratégico de
        negocios.
      </p>

      <p>
        Apasionada por el mundo digital, mi trabajo se centra en el branding y
        el marketing estratégico.
      </p>

      <p>
        Tener una formación multidisciplinar me ayuda a ir siempre más allá en
        cada proyecto en el que me embarco. Pero siempre desde una perspectiva
        muy visual y creativa.
      </p>
    </div>

    <ul class={styles.tags}>
      <li>
        <Tag>UX/UI</Tag>
      </li>
      <li>
        <Tag>Diseño Gráfico</Tag>
      </li>
      <li>
        <Tag>Branding</Tag>
      </li>
      <li>
        <Tag>Diseño de Producto</Tag>
      </li>
      <li>
        <Tag>Marketing</Tag>
      </li>
    </ul>
  </div>
)
