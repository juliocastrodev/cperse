import clsx from "clsx"
import { ParentComponent } from "solid-js"

type Props = {
  scaleX?: string
  scaleY?: string
  onClick: () => unknown
}

/**
 * Expands clickable area of children adding a centered span. This
 * does not increase element size since it is absoluted-positioned
 */
export const ExpandClickable: ParentComponent<Props> = (props) => {
  return (
    <div class={clsx("cursor-pointer relative")}>
      <span
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        onClick={props.onClick}
        style={{
          width: `${props.scaleX ?? "100%"}`,
          height: `${props.scaleY ?? "100%"}`,
        }}
      />

      {props.children}
    </div>
  )
}
