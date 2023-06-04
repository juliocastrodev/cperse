import clsx from "clsx"

export const Banner = () => {
  return (
    <section
      class={clsx(
        "px-16 py-32 sm:px-24 sm:py-52",
        "bg-[url('/src/assets/home/intro.webp')] bg-cover",
        "flex flex-col gap-4"
      )}
    >
      <h1 class="text-primary">Cynthia Perera</h1>
      <h2>
        Marketing Manager <br /> & UI Designer
      </h2>
    </section>
  )
}
