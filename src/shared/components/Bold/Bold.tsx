import { ParentComponent } from "solid-js"

type Props = {
  extra?: boolean
}

export const Bold: ParentComponent<Props> = (props) => {
  return (
    <span
      style={{
        "font-weight": `var(--font-weight-${
          props.extra ? "bold" : "semi-bold"
        })`,
      }}
    >
      {props.children}
    </span>
  )
}
