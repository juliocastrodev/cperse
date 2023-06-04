import { Cynthia } from "../cynthia/Cynthia"
import { KnowMore } from "../know-more/KnowMore"

export const Me = () => {
  return (
    <section class="p-10 lg:pt-44 bg-light flex flex-col gap-32">
      <Cynthia />

      <KnowMore />
    </section>
  )
}
