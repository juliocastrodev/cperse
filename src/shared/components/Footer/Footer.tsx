import clsx from "clsx"
import { LinkedInIcon } from "../Icons/LinkedInIcon"
import { MediumIcon } from "../Icons/MediumIcon"

export const Footer = () => {
  return (
    <footer
      class={clsx(
        "bg-dark text-light",
        "pt-28 pr-20 pb-5 pl-5",
        "flex flex-col justify-between flex-1 gap-40"
      )}
    >
      <div class="flex items-center self-end gap-12">
        <MediumIcon class="w-44 h-8" />
        <LinkedInIcon class="w-13 h-14" />
      </div>

      <p class="text-xs">
        Web diseñada por Cynthia Perera y desarrollada por Julio Castro
      </p>
    </footer>
  )
}
