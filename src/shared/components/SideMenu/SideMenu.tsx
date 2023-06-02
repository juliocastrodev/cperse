import { Show, createSignal } from "solid-js"
import { Portal } from "solid-js/web"
import { HamburgerIcon } from "../Icons/HamburgerIcon"
import styles from "./SideMenu.module.scss"
import { A } from "@solidjs/router"

export const SideMenu = () => {
  const [isOpen, setIsOpened] = createSignal(false)

  return (
    <>
      <div class={styles.hamburger} onClick={() => setIsOpened(true)}>
        <HamburgerIcon />
      </div>

      <Show when={isOpen()}>
        <Portal>
          <ul class={styles.menu} onclick={() => setIsOpened(false)}>
            <li>
              <A href="/">Inicio</A>
            </li>
            <li>
              <A href="#">Portfolio</A>
            </li>
            <li>
              <A href="/about-me">Sobre mí</A>
            </li>
            <li>
              <A href="/contact">Contacto</A>
            </li>
          </ul>
        </Portal>
      </Show>
    </>
  )
}
