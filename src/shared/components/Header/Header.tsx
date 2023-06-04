import clsx from "clsx"
import { MailIcon } from "../Icons/MailIcon"
import { SideMenu } from "../SideMenu/SideMenu"

export const Header = () => {
  return (
    <header
      class={clsx(
        "p-4 bg-primary text-light",
        "flex gap-14 items-center justify-around sm:justify-center"
      )}
    >
      <p>¿Quieres contactar conmigo?</p>

      <div class="flex items-center gap-3">
        <MailIcon class="w-4 h-4 sm:w-5 sm:h-5" />

        <p>cyn.perera@gmail.com</p>
      </div>

      <div class="sm:hidden">
        <SideMenu />
      </div>
    </header>
  )
}
