import { Tag } from "../../../../shared/components/Tag/Tag"
import { Picture } from "../picture/Picture"

export const Cynthia = () => (
  <div class="flex flex-wrap gap-x-32 gap-y-20 justify-center">
    <Picture />

    <div class="max-w-2xl">
      <h2 class="mb-12">Hola, soy Cynthia</h2>

      <div class="space-y-4 mb-8 text-content">
        <p>
          Profesional del Marketing y el Diseño, con más de 6 años de
          experiencia desarrollando la identidad de marca de diferentes
          compañías yejecutando campañas de marketing que impulsan el
          crecimiento estratégico de negocios.
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

      <ul class="flex gap-2 flex-wrap [&_*]:text-xs">
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
  </div>
)
