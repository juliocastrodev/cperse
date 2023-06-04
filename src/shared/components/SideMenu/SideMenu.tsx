import { Show, createSignal } from "solid-js"
import { Portal } from "solid-js/web"
import { HamburgerIcon } from "../Icons/HamburgerIcon"
import { A } from "@solidjs/router"
import { PATHS } from "../../routing/paths-config"
import { ExpandClickable } from "../ExpandClickable/ExpandClickable"
import clsx from "clsx"

export const SideMenu = () => {
  const [isOpen, setIsOpened] = createSignal(false)

  return (
    <>
      <ExpandClickable onClick={() => setIsOpened(true)} scaleY={"700%"}>
        <HamburgerIcon />
      </ExpandClickable>

      <Show when={isOpen()}>
        <Portal>
          <ul
            onclick={() => setIsOpened(false)}
            class={clsx(
              "p-8 w-full h-full bg-primary text-light",
              "fixed top-0 left-0 z-30",
              "flex flex-col gap-28 items-end"
            )}
          >
            <li>
              <A href={PATHS.HOME} class="text-4xl">
                Inicio
              </A>
            </li>

            <li>
              <A href="#" class="text-4xl">
                Portfolio
              </A>
            </li>

            <li>
              <A href={PATHS.ABOUT_ME} class="text-4xl">
                Sobre mí
              </A>
            </li>

            <li>
              <A href={PATHS.CONTACT} class="text-4xl">
                Contacto
              </A>
            </li>
          </ul>
        </Portal>
      </Show>
    </>
  )
}
