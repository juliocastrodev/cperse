import type { ParentComponent } from "solid-js"

export const Fullscreen: ParentComponent = (props) => (
  <main class="flex flex-col min-h-screen">{props.children}</main>
)
