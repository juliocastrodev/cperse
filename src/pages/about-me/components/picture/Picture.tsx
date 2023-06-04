import clsx from "clsx"
import pictureSrc from "../../../../assets/me/picture.webp"

export const Picture = () => (
  <div
    class={clsx(
      "w-48 h-48 sm:w-72 sm:h-72 relative",
      "before:absolute before:-top-[55%] before:-left-[140%]",
      // "before:bg-light before:w-80 before:h-80 before:sm:w-[517px] before:sm:h-[517px]",
      "before:bg-light before:w-[180%] before:h-[180%]",
      "before:rounded-full before:border-primary before:border-[15px] before:sm:border-[24px]",
      "before:-z-10"
    )}
  >
    <img
      class="rounded-full"
      src={pictureSrc}
      alt="A picture of Cynthia Perera"
    />
  </div>
)
