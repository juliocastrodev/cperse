import { ParentComponent, splitProps } from "solid-js"
import { JSX } from "solid-js/web/types/jsx"

type Props = JSX.HTMLAttributes<HTMLDivElement>

export const Card: ParentComponent<Props> = (props) => {
  const [{ children, class: otherClasses }, rest] = splitProps(props, [
    "children",
    "class",
  ])

  return (
    <div
      class={`flex flex-col py-2 px-4 bg-light w-fit shadow-card rounded-lg ${otherClasses}`}
      {...rest}
    >
      {children}
    </div>
  )
}
