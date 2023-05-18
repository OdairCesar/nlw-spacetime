import Image from 'next/image'
import nlwLogo from '../../assets/img/logo-nlw-spacetime.png'

export function Hero() {
  return (
    <div className="space-y-5">
      <Image src={nlwLogo} alt="Logo da Next Level Week Spacetime" />

      <div className="max-w-[420px] space-y-1">
        <h1 className="mt-5 text-5xl font-bold">Sua cápsula do tempo</h1>

        <p className="mt-1 text-lg leading-relaxed">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>

      <a
        className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
        href=""
      >
        Cadastrar lembrança
      </a>
    </div>
  )
}
