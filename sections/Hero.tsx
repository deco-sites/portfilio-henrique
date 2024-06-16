import { ImageWidget } from "apps/admin/widgets.ts";

interface Props {
  /**
  * @description The description of name.
  */
  name?: string;
  office?: string;
  image?: ImageWidget;
  redes?: {
    name?: string;
    icon?: ImageWidget
    link: string;
  }
}

const redesListDefault = {
  name: 'linkedin',
  icon: '/linkedin.png',
  link: 'https://www.linkedin.com/in/henrique-almeida-de-oliveira/',
}

export default function Section({ name = "Henrique Almeida", office = "Desenvolvedor", redes = redesListDefault, image = '/henrique.png' }: Props) {

  return (
    <div class="w-[80%] h-[100vh] max-w-[1200px] flex items-center justify-between m-auto">
      <div>
        <h1 class='text-white text-5xl font-primary font-black'>{name}</h1>
        <h3 class='text-white text-2xl font-primary font-medium'>{office}</h3>
        <div>
            <div class="w-10 h-10">
              <a href={redes.link} target="_blank">
                <img src={redes.icon} alt={redes.name} />
              </a>
            </div>
        </div>
      </div>
      <div>
        <img className="w-[250px] h-[250px] rounded-full" src={image} alt={name} />
      </div>
    </div>
  )
}