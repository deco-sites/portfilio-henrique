interface Props {
  /**
  * @description The description of name.
  */
  name?: string;
}

export default function Section({ name = "Capy" }: Props) {
  return (
    <div class="w-[80%] h-[100vh] flex items-center max-w-[1200px] m-auto">
      <form class="w-[80%] bg-[#2F3B48] m-auto p-10 rounded-lg">
        <h3 class="text-white text-2xl font-black">Entre em contato</h3>
        <div class="flex flex-col font-black mt-5">
          <label class="text-white text-base mb-1 ml-1">Nome</label>
          <input class="p-5 bg-[#1F2B38] w-[40%] rounded-lg outline-none placeholder:text-[#FFFFFF33] text-[#FFFFFF]" type="text" placeholder="Digite aqui ..." />
        </div>
        <div class="flex flex-col font-black mt-5">
          <label class="text-white text-base mb-1 ml-1">Numero</label>
          <input class="p-5 bg-[#1F2B38] w-[40%] rounded-lg outline-none placeholder:text-[#FFFFFF33] text-[#FFFFFF]" type="text" placeholder="Digite aqui ..." />
        </div>
        <div class="flex flex-col font-black mt-5">
          <label class="text-white text-base mb-1 ml-1">Email</label>
          <input class="p-5 bg-[#1F2B38] w-[40%] rounded-lg outline-none placeholder:text-[#FFFFFF33] text-[#FFFFFF]" type="text" placeholder="Digite aqui ..." />
        </div>
      </form>
    </div>
  )
}