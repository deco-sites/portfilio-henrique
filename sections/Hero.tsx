interface Props {
  /**
  * @description The description of name.
  */
  name?: string;
  office?: string;
  linkedin: string;
}

export default function Section({ name = "Henrique Almeida", office = "Desenvolvedor", linkedin }: Props) {
  return (
    <div class="w-[100vw] h-[100vh]">
      <div>
        <h1>{name}</h1>
        <h3>{office}</h3>
        <div>
            <div>
              <a href={linkedin}></a>
            </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  )
}