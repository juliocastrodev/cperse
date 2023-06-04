import clsx from "clsx"
import { Card } from "../../../../shared/components/Card/Card"
import { ChatIcon } from "../../../../shared/components/Icons/ChatIcon"

export const Chat = () => {
  return (
    <div
      class={clsx(
        "flex flex-col gap-8 text-content relative",
        "before:bg-accent before:rounded-[48px] before:w-52 before:h-52 before:sm:w-72 before:sm:h-72",
        "before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2",
        "before:-z-10"
      )}
    >
      <Card class="ml-auto">
        <p>Hola! 👋 </p>
      </Card>

      <Card>
        <p class="text-center">
          🚀 ¿Crees que encajo en tu proyecto?
          <br />
          Escríbeme a 📩 <span class="font-semibold">cyn.perera@gmail.com</span>
        </p>
      </Card>

      <ChatIcon class="mr-auto w-14 h-8 sm:w-24 sm:h-12" />
    </div>
  )
}
