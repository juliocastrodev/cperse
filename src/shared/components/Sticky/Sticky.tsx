import { ParentComponent, createSignal, onCleanup, onMount } from "solid-js"

const [stack, setStack] = createSignal<HTMLElement[]>([])

const pushInStack = (element: HTMLElement) => {
  setStack([...stack(), element])
}
const removeFromStack = (element: HTMLElement) => {
  setStack(stack().filter((e) => e !== element))
}
const offsetFor = (element: HTMLElement) => {
  const elementsBeforeCurrent = stack().slice(
    0,
    stack().findIndex((e) => e === element)
  )

  const stackSizeUntilThere = elementsBeforeCurrent.reduce(
    (count, e) => count + e.offsetHeight,
    0
  )

  return stackSizeUntilThere
}

export const Sticky: ParentComponent = (props) => {
  let containerElem: HTMLDivElement | undefined

  onMount(() => {
    if (!containerElem)
      throw new Error("No container ref found for Sticky component")

    pushInStack(containerElem)
  })

  onCleanup(() => removeFromStack(containerElem!))

  return (
    <div
      ref={containerElem}
      class="sticky z-20"
      style={{ top: offsetFor(containerElem!) + "px" }}
    >
      {props.children}
    </div>
  )
}
