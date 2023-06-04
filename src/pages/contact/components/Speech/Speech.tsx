import { MailIcon } from "../../../../shared/components/Icons/MailIcon"

export const Speech = () => {
  return (
    <div class="flex flex-col gap-6 max-w-lg">
      <h2>¿Hablamos?</h2>

      <div class="flex flex-col gap-4">
        <p>
          ¿Estás buscando un perfil que aporte creatividad, optimismo y pasión a
          tu equipo? ¡Estás en el lugar indicado!
        </p>

        <p>Si quieres descubrir cómo puede mejorar tu proyecto, escríbeme.</p>

        <p> 👋 Todo empieza con un “hola”.</p>
      </div>

      <div class="flex items-center gap-2">
        <MailIcon />

        <p class="font-semibold">cyn.perera@gmail.com</p>
      </div>
    </div>
  )
}
