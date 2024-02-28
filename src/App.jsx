import { GoArrowUpRight } from "react-icons/go";
import { Tech } from "./components/Techs";

export function App() {
  return (
    <div className="mx-auto max-w-6xl">
      <nav className="flex justify-between p-8 bg-slate-50">
        <a href="#" className="font-bold text-xl text-slate-900">Ana P</a>
        <ul className="flex gap-8 font-medium text-slate-500">
          <li><a href="#" className="hover:text-slate-800">Projetos</a></li>
          <li><a href="#" target="_blank" className="flex justify-center items-center hover:text-slate-800">CV <GoArrowUpRight /></a></li>
        </ul>
      </nav>

      <main className="p-8 flex flex-col justify-center items-center">
        <section className="flex flex-col gap-12 ">
          <div className="flex justify-between gap-32">
            <div className="flex flex-col gap-4">
              <span>Olá, eu sou</span>
              <h1 className="text-6xl font-medium max-w-100">
                Ana Paula, <br />
                desenvolvedora <br />
                front-end
              </h1>
              <div>
                <p className="flex gap-1"> 
                  Cursando Análise e Desenvolvimento de Sistemas na <a href="#" className="flex items-center underline">Estácio<GoArrowUpRight /></a>
                </p>
                <p className="flex gap-1"> 
                  Estudante da <a href="#" className="flex items-center underline">Rocketseat<GoArrowUpRight /></a>
                </p>
                <p className="flex gap-1"> 
                  Graduada em Design Gráfico na <a href="#" className="flex items-center underline">Estácio<GoArrowUpRight /></a>
                </p>
              </div>
            </div>

            <img src="https://github.com/Nahblue.png" alt="" className="w-64 h-64 rounded-full" />
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-medium">Skills</h2>

            <div className="flex gap-3">
              <Tech title="Javascript" />
              <Tech title="CSS" />
              <Tech title="React" />
            </div>
          </div>
        </section>

        <section>
          <div>
            <h2 className="text-3xl font-medium">Projetos</h2>
            <p>quote aleatória</p>

            <div>
              <img 
                src="https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg" 
                alt="" 
              />

              <h2>Nome do projeto</h2>
              <div>
                <span>Tecnologias:</span>
                <p>CSS-HTML</p>
              </div>
              <div>
                <span>Projeto:</span>
                <p>Pessoal</p>
              </div>
              <div>
                <span>Função:</span>
                <p>Desenvolvedor WEB</p>
              </div>
            </div>

            <div>
              <a href="">Repositório<GoArrowUpRight /></a>
              <a href="">Projeto<GoArrowUpRight /></a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

