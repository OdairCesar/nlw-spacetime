import { User } from 'lucide-react'
import Image from 'next/image'
import nlwLogo from '../assets/img/logo-nlw-spacetime.png'

export default function Home() {
  return (
    <div className="grid min-h-screen grid-cols-2">
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/svg/bg-starts.svg)] bg-cover px-28 py-16">
        <div className="absolute right-0 top-1/2 h-[200px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

        <div className="absolute bottom-0 right-0 top-0 w-2 bg-stripes"></div>

        <a
          href=""
          className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" />
          </div>

          <p className="max-w-[140px] text-sm leading-snug">
            <span className="underline">Crie sua conta</span> e salve suas
            memórias!
          </p>
        </a>

        <div className="space-y-5">
          <Image src={nlwLogo} alt="Logo da Next Level Week Spacetime" />

          <div className="max-w-[420px] space-y-1">
            <h1 className="mt-5 text-5xl font-bold">Sua cápsula do tempo</h1>

            <p className="mt-1 text-lg leading-relaxed">
              Colecione momentos marcantes da sua jornada e compartilhe (se
              quiser) com o mundo!
            </p>
          </div>

          <a
            className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
            href=""
          >
            Cadastrar lembrança
          </a>
        </div>

        <div className="">
          Feito com 💜 no NLW da{' '}
          <a
            target="_blank"
            className="underline hover:text-gray-100"
            href="https://rocketseat.com.br"
            rel="noreferrer"
          >
            Rocketseat
          </a>
          , implementado por{' '}
          <a
            target="_blank"
            className="underline hover:text-gray-100"
            href="https://github.com/OdairCesar"
            rel="noreferrer"
          >
            Odair Dev.
          </a>
        </div>
      </div>

      <div className="flex flex-col bg-[url(../assets/svg/bg-starts.svg)] bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança, comece a{' '}
            <a href="" className="underline hover:text-gray-50">
              criar agora
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
