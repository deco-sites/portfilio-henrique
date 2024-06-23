import { ImageWidget } from "apps/admin/widgets.ts";

interface Props {
  /**
  * @description The description of name.
  */
  name: string;
  projects: Array<{ name: string; link: string ; image: ImageWidget}>;
}

const items = [{
  name: 'teste',
  link: 'teste',
  image: 'teste',
}]

export default function Section({ name = "Projetos", projects = items }: Props) {
  return (
    <div class="w-[80%] h-[100vh] max-w-[1200px] m-auto">
      <h3 class="text-white text-2xl font-black">{name}</h3>
      <div class="flex justify-between flex-wrap mt-[70px]">
          {projects.map((item)=> (
            <a href={item.link} class="mb-[70px] w-[30%] h-60 bg-no-repeat bg-contain cursor-pointer rounded-lg" style={`background-image: url(${item.image})`} target="_blank">

            </a>
          ))}
      </div>
    </div>
  )
}