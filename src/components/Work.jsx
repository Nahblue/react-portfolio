import { GoArrowUpRight } from "react-icons/go";

export function Work({ data }) {

  return (
    <div className="flex flex-col gap-3 md:gap-5">
      <img
        src={data.thumb}
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
          target="_blank"
          href={data.repositorie_link}
          className="text-sm md:text-base flex justify-center items-center underline hover:text-slate-500 dark:hover:text-slate-300"
        >
          Repositório
          <GoArrowUpRight />
        </a>
        <a
          target="_blank"
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
