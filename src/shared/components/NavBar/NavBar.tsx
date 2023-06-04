import { A } from "@solidjs/router"
import { PATHS } from "../../routing/paths-config"

export const NavBar = () => {
  return (
    <nav class="hidden sm:block py-6 px-24 bg-light shadow">
      <ul class="flex items-center gap-12 [&_*]:font-semibold">
        <li class="mr-auto">
          <A href={PATHS.HOME}>cperse.com</A>
        </li>

        <li>
          <A href={PATHS.HOME}>Inicio</A>
        </li>

        <li>
          <A href="#">Portfolio</A>
        </li>

        <li>
          <A href={PATHS.ABOUT_ME}>Sobre mí</A>
        </li>

        <li>
          <A href={PATHS.CONTACT} class="text-primary">
            Contacto
          </A>
        </li>
      </ul>
    </nav>
  )
}
