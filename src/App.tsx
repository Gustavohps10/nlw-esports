import "./styles/main.css"

import logoImage from "./assets/logo-nlw-esports.svg"
import testGameImage from "/test-image.png"

import {MagnifyingGlassPlus} from "phosphor-react"

function App() {

  return (
    <div className="mx-20">
      <img src={logoImage} className="mx-auto my-20" alt="logo nlw" />

      
        <h1 className="text-center font-black text-white text-6xl">
          Seu <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> está aqui
        </h1>

        <div className="flex justify-center gap-4 mt-16">
          <a href="#" className="relative rounded-lg overflow-hidden">
            <img src={testGameImage} alt="test-game" />
            <div className="absolute bottom-0 w-full bg-game-gradient text-white p-4 pt-16">
              <strong className="font-bold">Fortnite</strong>
              <span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
            </div>
          </a>

          <a href="#" className="relative rounded-lg overflow-hidden">
            <img src={testGameImage} alt="test-game" />
            <div className="absolute bottom-0 w-full bg-game-gradient text-white p-4 pt-16">
              <strong className="font-bold">Fortnite</strong>
              <span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
            </div>
          </a>

          <a href="#" className="relative rounded-lg overflow-hidden">
            <img src={testGameImage} alt="test-game" />
            <div className="absolute bottom-0 w-full bg-game-gradient text-white p-4 pt-16">
              <strong className="font-bold">Fortnite</strong>
              <span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
            </div>
          </a>

          <a href="#" className="relative rounded-lg overflow-hidden">
            <img src={testGameImage} alt="test-game" />
            <div className="absolute bottom-0 w-full bg-game-gradient text-white p-4 pt-16">
              <strong className="font-bold">Fortnite</strong>
              <span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
            </div>
          </a>

          <a href="#" className="relative rounded-lg overflow-hidden">
            <img src={testGameImage} alt="test-game" />
            <div className="absolute bottom-0 w-full bg-game-gradient text-white p-4 pt-16">
              <strong className="font-bold">Fortnite</strong>
              <span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
            </div>
          </a>


          <a href="#" className="relative rounded-lg overflow-hidden">
            <img src={testGameImage} alt="test-game" />
            <div className="absolute bottom-0 w-full bg-game-gradient text-white p-4 pt-16">
              <strong className="font-bold">Fortnite</strong>
              <span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
            </div>
          </a>
        </div>

        <div className="overflow-hidden bg-[#2a2634] mt-8 w-full rounded-lg before:bg-nlw-gradient before:h-3 before:w-full before:block before:rounded-t-lg before:z-10">
          <div className="bg-[#2a2634] px-8 py-6 rounded-t-md translate-y-[-8px] flex items-center justify-between">
            
            <div>
              <strong className="text-white text-2xl font-black block">Não encontrou seu duo?</strong>
              <span className="text-zinc-400 text-base">Publique um anúncio para encontrar novos players!</span>
            </div>
            
            <button className="flex gap-3 items-center py-3 px-4 bg-violet-500 text-white rounded-md hover:bg-violet-600 transition duration-200">
              <MagnifyingGlassPlus size={24}/>
              <span>Publicar anúncio</span>
            </button>
          </div>
        </div>
    </div>
  )
}

export default App
