import Image from 'next/image'
import { User } from 'lucide-react'
import nlwlogo from '../assets/nlw-spacetime-logo.svg'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Parte da esquerda */}
      <div className="relative flex flex-col items-start justify-between border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16 ">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 overflow-hidden rounded-full bg-purple-700 opacity-50 blur-full" />
        {/* stripes */}
        <div className=" absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
        {/* Sing in */}
        <a
          href=""
          className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
        >
          <div className=" flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500"></User>
          </div>
          <p className="max-w-[140px] text-sm leading-snug">
            <span className="underline">Crie sua conta </span> e salve suas
            memórias!
          </p>
        </a>
        {/* Hero */}
        <div className="space-y-5">
          <Image src={nlwlogo} alt="imagem da logo da NLW" />
          <div className="w-[420px] space-y-1">
            <h1 className="text-5xl font-bold leading-tight text-gray-50">
              Sua cápsula do tempo
            </h1>
            <p className="text-lf leading-relaxed">
              Colecione momentos marcantes da sua jornada e compartilhe (se
              quiser) com o mundo!
            </p>
          </div>

          <a
            href=""
            className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
          >
            CADASTRAR LEMBRANçA
          </a>
        </div>
        {/* Copyrigth */}
        <div className="text-sm leading-relaxed text-gray-100">
          Feito com 💜 no NLW da Rocketseat
        </div>
      </div>
      {/* Parte da direita */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança, comece a{' '}
            <a href="" className="underline hover:text-gray-50">
              criar agora!
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
