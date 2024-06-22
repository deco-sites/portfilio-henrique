import { ImageWidget } from "apps/admin/widgets.ts";

interface Props {
  /**
  * @description The description of name.
  */
  projects: Array<{ name: string; link: string ; image: ImageWidget}>;
}

export default function Section({ projects }: Props) {
  return (
    <div class="w-[80%] h-[100vh] max-w-[1200px] m-auto">
      <h3 class="text-white text-2xl font-black">Projetos</h3>
      <div class="flex">

      </div>
    </div>
  )
}