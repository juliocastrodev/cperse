import { JSX, ParentComponent, splitProps } from "solid-js"

type Props = JSX.HTMLAttributes<HTMLSpanElement>

export const Tag: ParentComponent<Props> = (props) => {
  const [{ children, class: otherClasses }, rest] = splitProps(props, [
    "children",
    "class",
  ])

  return (
    <span
      class={`p-1 text-primary rounded-md border border-primary ${otherClasses}`}
      {...rest}
    >
      {children}
    </span>
  )
}
