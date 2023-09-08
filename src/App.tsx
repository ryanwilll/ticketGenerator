import GitHubLogo from './assets/logoGithub.png'
import CoverTicket from './assets/imgCoverTicket.png'
import DefaultAvatar from './assets/defaultAvatar.png'
import Lines from './assets/lines.png'
import Sucess from './assets/Sucess.png'
import CircleNotch from './assets/CircleNotch.png'

import { useState, useRef, useCallback } from 'react'
import { toPng } from 'html-to-image'

import { api } from './services/api'

type APIResponse = { avatar_url: string; login: string; name: string }

function App() {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [userName, setUserName] = useState<string | null>(null)
  const [res, setRes] = useState<APIResponse | null>(null)
  const ticketRef = useRef(null)

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()

      if (!userName) {
        setError('Usuário inválido. Verifique e tente novamente.')
        return
      }

      setLoading(true)

      const fetchApi = async () => {
        try {
          const res = await api.get(`/users/${userName}`)
          const data = res.data
          setRes(data)
        } catch (error) {
          setError('Usuário inválido. Verifique e tente novamente.')
          console.error(`Houve um erro para buscar o usuário: ${error}`)
        } finally {
          setLoading(false)
        }
      }
      fetchApi()
    },
    [userName]
  )

  const convertTicketToPng = () => {
    toPng(ticketRef.current!, { cacheBust: false })
      .then((url) => {
        const link = document.createElement('a')
        link.download = 'ticket.png'
        link.href = url
        link.click()
      })
      .catch((error) => console.error(error))
  }

  return (
    <>
      <div className="w-screen h-screen bg-imgHero bg-cover flex flex-wrap-reverse text-white justify-around items-center">
        <div>
          <h1 className="text-grayDark">
            <span className="smallTablet:text-2xl block uppercase text-4xl leading-snug font-grotesk text-transparent bg-clip-text bg-gradient-to-r from-degradeStart via-degradeMiddle to-degradeEnd">
              Gere o seu ticket
            </span>
            <span className="smallTablet:text-2xl block uppercase text-4xl leading-snug font-grotesk text-transparent bg-clip-text bg-gradient-to-r from-degradeStart via-degradeMiddle to-degradeEnd">
              e compartilhe
            </span>
            <span className="smallTablet:text-2xl block uppercase text-4xl leading-snug font-grotesk text-transparent bg-clip-text bg-gradient-to-r from-degradeStart via-degradeMiddle to-degradeEnd">
              com o mundo
            </span>
            {!res && (
              <form onSubmit={handleSubmit} className="flex mt-8 flex-col text-left">
                <label htmlFor="username" className="uppercase font-grotesk text-xl smallTablet:text-base text-grayLight">
                  Digite o seu usuário do github
                </label>
                <div className="relative flex items-center">
                  <input
                    className="mt-2 py-4 px-3 font-roboto w-96 smallTablet:w-64 outline-none pl-9 placeholder:text-grayDark"
                    placeholder="Nome do usuário"
                    type="text"
                    id="username"
                    name="username"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  <img
                    className="absolute mt-[2px] top-1/2 transform -translate-y-1/2 ml-3"
                    src={GitHubLogo}
                    alt="Logotipo do github"
                  />
                </div>
                {error && <p className="text-redDanger">{error}</p>}
                <button
                  className="mt-4 flex items-center justify-center gap-2 bg-purpleNormal py-6 px-10 uppercase text-white font-bold text-sm hover:bg-purpleDark transition-colors duration-300"
                  type="submit"
                  disabled={loading ? true : false}>
                  {loading ? <img src={CircleNotch} alt="Carregando..." className="animate-spin" /> : 'Gerar meu ticket'}
                </button>
              </form>
            )}
            {res && (
              <>
                <div className="flex gap-4 mt-8">
                  <img src={Sucess} alt="Sucesso" />
                  <p className="font-grotesk text-xl uppercase text-grayLight">Ticket gerado com sucesso</p>
                </div>
                <button
                  onClick={convertTicketToPng}
                  className=" bg-purpleNormal w-96 py-6 px-10 mt-3 uppercase text-white font-bold text-sm hover:bg-purpleDark transition-colors duration-300"
                  type="submit">
                  Fazer download
                </button>
              </>
            )}
          </h1>
        </div>
        <div className="bg-bgCardTicket w-[694px] tablet:w-fit smallTablet:w-[300px] h-max" ref={ticketRef}>
          <div className="py-8 px-10 flex">
            <div className="flex ">
              <img
                src={CoverTicket}
                className="max-h-full tablet:hidden smallTablet:hidden flex-shrink-0"
                alt="Imagem ilustrativa IA para devs"
              />
            </div>
            <div className="bg-white w-72 text-black p-4 flex flex-col ">
              <img
                src={res ? res.avatar_url : DefaultAvatar}
                alt="Avatar"
                className="w-max mx-auto rounded-full max-h-32 max-w-[127px]"
              />
              <span className="text-center uppercase text-purpleNormal font-grotesk font-medium text-sm my-2">Tripulante</span>
              <span className="font-bold text-center mb-8">{res ? (res.name ? res.name : res.login) : 'Seu nome aqui'}</span>
              <p className="font-grotesk font-medium text-sm uppercase flex justify-between">
                <span>Evento</span>
                <span className="font-bold">IA para devs</span>
              </p>
              <p className="font-grotesk font-medium text-base uppercase flex justify-between">
                <span>Data</span>
                <span className="font-bold">14 - 16 Ago. 2023</span>
              </p>
              <p className="font-grotesk font-medium text-base uppercase flex justify-between">
                <span>Hora</span>
                <span className="font-bold">Ao vivo - 19h</span>
              </p>
              <img src={Lines} alt="Linhas de marcação" className="mt-2" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
