import { GoArrowUpRight } from "react-icons/go";

export function Work({ works, handleModal }) {
  const { image, name, technologies, project, myFunction, repositoryLink, projectLink } = works

  return (
    <div className="flex flex-col gap-3 md:gap-5">
      <img
        src={image}
        alt="Imagem do projeto"
        className="max-w-xl max-h-96 rounded-sm object-cover cursor-pointer"
        onClick={() => handleModal(image)}
      />
      
      <h2 className="text-2xl md:text-4xl font-medium">{name}</h2>

      <div className="flex flex-col gap-2">
        <div>
          <span className="text-sm font-medium md:text-base md:font-bold">Tecnologias:</span>
          <p className="text-sm md:text-base">{technologies}</p>
        </div>

        <div>
          <span className="text-sm font-medium md:text-base md:font-bold">Projeto:</span>
          <p className="text-sm md:text-base">{project}</p>
        </div>

        <div>
          <span className="text-sm font-medium md:text-base md:font-bold">Função:</span>
          <p className="text-sm md:text-base">{myFunction}</p>
        </div>

      </div>

      <div className="flex gap-9">
        <a
          target="_blank"
          href={repositoryLink}
          className="text-sm md:text-base flex justify-center items-center font-medium hover:underline hover:text-slate-500 dark:hover:text-slate-300"
        >
          Repositório
          <GoArrowUpRight />
        </a>
        <a
          target="_blank"
          href={projectLink}
          className="text-sm md:text-base flex justify-center items-center font-medium hover:underline hover:text-slate-500 dark:hover:text-slate-300"
        >
          Projeto
          <GoArrowUpRight />
        </a>
      </div>
    </div>
  );
}
