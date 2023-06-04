import { A } from "@solidjs/router"
import { PATHS } from "../../routing/paths-config"

export const NavBar = () => {
  return (
    <nav class="hidden sm:block py-6 px-24 bg-light shadow">
      <ul class="flex items-center gap-12">
        <li class="mr-auto">
          <A href={PATHS.HOME} class="font-semibold text-dark">
            cperse.com
          </A>
        </li>

        <li>
          <A href={PATHS.HOME} class="font-semibold text-dark">
            Inicio
          </A>
        </li>

        <li>
          <A href="#" class="font-semibold text-dark">
            Portfolio
          </A>
        </li>

        <li>
          <A href={PATHS.ABOUT_ME} class="font-semibold text-dark">
            Sobre mí
          </A>
        </li>

        <li>
          <A href={PATHS.CONTACT} class="font-semibold text-primary">
            Contacto
          </A>
        </li>
      </ul>
    </nav>
  )
}
