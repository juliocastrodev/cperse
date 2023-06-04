import { Chat } from "../Chat/Chat"
import { Speech } from "../Speech/Speech"

export const LetsTalk = () => (
  <section class="p-10 lg:py-72 bg-light flex justify-evenly items-center flex-wrap gap-x-16 gap-y-24">
    <Speech />

    <Chat />
  </section>
)
