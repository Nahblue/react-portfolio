import { GoArrowUpRight } from "react-icons/go";

export function Work({ data }) {

  return (
    <div className="flex flex-col gap-3 md:gap-5">
      <img
        src="https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg"
        alt="Imagem do projeto"
        className="max-w-xl max-h-96 rounded-sm object-cover"
      />

      <h2 className="text-2xl md:text-4xl font-medium">{data.name}</h2>

      <div className="flex flex-col gap-2">
        <div>
          <span className="text-sm font-medium md:text-base md:font-bold">Tecnologias:</span>
          <p className="text-sm md:text-base">{data.technologies}</p>
        </div>

        <div>
          <span className="text-sm font-medium md:text-base md:font-bold">Projeto:</span>
          <p className="text-sm md:text-base">{data.project}</p>
        </div>

        <div>
          <span className="text-sm font-medium md:text-base md:font-bold">Função:</span>
          <p className="text-sm md:text-base">{data.function}</p>
        </div>

      </div>

      <div className="flex gap-9">
        <a
          href={data.repositorie_link}
          className="text-sm md:text-base flex justify-center items-center underline hover:text-slate-500 dark:hover:text-slate-300"
        >
          Repositório
          <GoArrowUpRight />
        </a>
        <a
          href={data.project_link}
          className="text-sm md:text-base flex justify-center items-center underline hover:text-slate-500 dark:hover:text-slate-300"
        >
          Projeto
          <GoArrowUpRight />
        </a>
      </div>
    </div>
  );
}
