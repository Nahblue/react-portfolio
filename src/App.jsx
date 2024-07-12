import { GoArrowUpRight } from "react-icons/go";
import { Navigation } from "./components/Navigation";
import { Tech } from "./components/Tech";
import { Work } from "./components/Work";
import { Modal } from "./components/Modal";
import { Footer } from "./components/Footer";

import { useState } from "react";
import { motion } from "framer-motion";

import data from './data/data.json';

export function App() {
  const techs = data.techs
  const works = data.works

  const [ isModalOpen, setIsModalOpen ] = useState(false)
  const [ modalIMG, setModalIMG ] = useState()

  function handleModal (workIMG) {
    setModalIMG(workIMG)

    if (isModalOpen) {
      return setIsModalOpen(false)
    }
    
    return setIsModalOpen(true)
  }

  return (
    <div className="mx-auto w-full h-screen overflow-y-scroll no-scrollbar relative scroll-smooth">
      <div id="home" />
      <header 
        className="bg-slate-50 dark:bg-gray-950 sticky top-0 z-10"
      >
        <Navigation />
      </header>

      <main className="w-full flex flex-col gap-44">
        <section className="w-full p-6 md:py-9 md:px-16 lg:p-9">
          <motion.div 
            initial={{ opacity: 0,  y: "50%"}}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="max-w-[950px] mx-auto flex flex-col gap-16 md:gap-12"
          >
            <div className="mt-9 flex justify-between gap-32">
              <div className="flex flex-col gap-6 md:gap-4">
                <span className="text-sm md:text-base">Olá, eu sou</span>

                <h1 className="text-3xl md:text-6xl font-medium max-w-100">
                  Ana Paula, <br />
                  desenvolvedora <br />
                  fullstack
                </h1>

                <div className="flex flex-col gap-2 md:text-base md:gap-0">
                  <p className="md:flex md:flex-grow gap-1"> 
                    Cursando Análise e Desenvolvimento de Sistemas na 
                    <a 
                      href="https://estacio.br/" 
                      target="_blank" 
                      className="flex items-center font-medium hover:underline hover:text-slate-600 dark:hover:text-slate-300"
                    >
                      Estácio<GoArrowUpRight />
                    </a>
                  </p>

                  <p className="flex md:flex-grow gap-1"> 
                    Estudante da 
                    <a 
                      href="https://www.rocketseat.com.br/" 
                      target="_blank" 
                      className="flex items-center font-medium hover:underline hover:text-slate-600 dark:hover:text-slate-300"
                    >
                      Rocketseat<GoArrowUpRight />
                    </a>
                  </p>

                  <p className="md:flex md:flex-grow gap-1"> 
                    Graduada em Design Gráfico na 
                    <a 
                      href="https://estacio.br/" 
                      target="_blank" 
                      className="flex items-center font-medium hover:underline hover:text-slate-600 dark:hover:text-slate-300"
                    >
                      Estácio<GoArrowUpRight />
                    </a>
                  </p>
                </div>
              </div>

              <img 
                src="https://github.com/Nahblue.png" 
                alt="Ana Paula image" 
                className="w-64 h-64 rounded-full hidden lg:block" 
              />
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="text-2xl md:text-3xl font-medium">Skills</h2>

              <div className="flex flex-wrap gap-3">
                { techs.map((tech) => {
                  return <Tech title={tech} key={tech} />
                })}
              </div>
            </div>
          </motion.div>
        </section>

        <section 
          id="projects"
          className="w-full bg-slate-100 dark:bg-gray-900 py-9 px-6 md:px-16 lg:p-9"
        >
          <motion.div 
            className="max-w-[950px] mx-auto" 
            initial={{ opacity: 0, y: "10%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <div className="flex flex-col lg:flex-row gap-12 lg:justify-between mt-20 mb-20">
              <div className="lg:relative">
                <div className="w-64 lg:sticky lg:top-32">
                  <h2 className="text-2xl md:text-3xl font-medium">Projetos</h2>
                  <p className="text-xs md:text-sm mt-4">“Qualquer tecnologia suficientemente avançada é equivalente à mágica”. Arthur C. Clarke.</p>
                </div>
              </div>

              <div className="bg-transparent flex flex-col gap-11">
                {works.map((work) => {
                  return <Work works={work} key={work.name} handleModal={handleModal} />
                })}
                
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      { isModalOpen && <Modal isModalOpen={isModalOpen} handleModal={handleModal} image={modalIMG} /> }

      <Footer />             
    </div>
  )
}

