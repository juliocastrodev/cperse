import { A } from "@solidjs/router"
import { RightArrowIcon } from "../../../../shared/components/Icons/RightArrowIcon"
import { PATHS } from "../../../../shared/routing/paths-config"

export const KnowMore = () => (
  <div class="flex flex-col gap-6 items-center text-center">
    <p>
      Además de profesional del marketing y el diseño, soy muchas más cosas...
    </p>

    <A href={PATHS.CONTACT} class="font-semibold">
      ¿Quieres descubrirlas? <RightArrowIcon class="inline" />
    </A>
  </div>
)
