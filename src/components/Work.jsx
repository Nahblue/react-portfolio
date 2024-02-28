import { GoArrowUpRight } from "react-icons/go";

export function Work() {
  return (
    <div className="flex flex-col gap-5">
      <img
        src="https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg"
        alt=""
        className="max-w-xl max-h-96 rounded-lg"
      />

      <h2 className="text-4xl font-medium">Nome do projeto</h2>

      <div className="flex flex-col gap-4">
        <div>
          <span className="font-bold">Tecnologias:</span>
          <p>CSS-HTML</p>
        </div>

        <div className="flex gap-9">
          <div>
            <span className="font-bold">Projeto:</span>
            <p>Pessoal</p>
          </div>

          <div>
            <span className="font-bold">Função:</span>
            <p>Desenvolvedor WEB</p>
          </div>
        </div>
      </div>

      <div className="flex gap-9">
        <a
          href=""
          className="flex justify-center items-center underline hover:text-slate-500"
        >
          Repositório
          <GoArrowUpRight />
        </a>
        <a
          href=""
          className="flex justify-center items-center underline hover:text-slate-500"
        >
          Projeto
          <GoArrowUpRight />
        </a>
      </div>
    </div>
  );
}
