import { ImageWidget } from "apps/admin/widgets.ts";

interface Props {
  /**
  * @description The description of name.
  */
  name?: string;
  office?: string;
  image?: ImageWidget;
  redes?: Array<{
    name?: string;
    icon?: ImageWidget
    link: string;
  }>
}

export default function Section({ name = "Henrique Almeida", office = "Desenvolvedor", redes, image = '/henrique.png' }: Props) {

  const redesListDefault = [{
    name: 'linkedin',
    icon: '/linkedin.png',
    link: 'https://www.linkedin.com/in/henrique-almeida-de-oliveira/',
  }]
  
  return (
    <div class="w-[80%] h-[100vh] max-w-[1200px] flex items-center justify-between m-auto">
      <div>
        <h1 class='text-white text-5xl font-primary font-black'>{name}</h1>
        <h3 class='text-white text-2xl font-primary font-medium'>{office}</h3>
        <div>
            {redes ? redes.map((data)=>{
              <div>
                <a href={data.link}>
                  <img src={data.icon} alt={data.name} />
                </a>
              </div>
            }) : 
            redesListDefault.map((data)=>{
              <div>
                <a href={data.link}>
                  <img src={data.icon} alt={data.name} />
                </a>
              </div>
            })}
        </div>
      </div>
      <div>
        <div class={`w-[250px] h-[250px] bg-[url('${image}')] bg-cover bg-no-repeat rounded-full`}>

        </div>
      </div>
    </div>
  )
}