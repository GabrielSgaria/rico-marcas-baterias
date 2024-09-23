'use client'
import { Button } from "@/components/button"
import { Card, CardContent } from "@/components/card"
import { SectionGoogle } from "@/components/section-google"
import { SlideCustomers } from "@/components/slide-customers"
import { WppButton } from "@/components/wpp-button"
import { sendMensage, sendWhatsAppMessage } from "@/lib/actions"
import { batterys } from "@/lib/batterys"
import { WhatsappLogo } from "@phosphor-icons/react"
import { Zap, Shield, ThumbsUp } from "lucide-react"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen w-full mx-auto " id="initial">

      <main className="flex-1">
        <section className="bg-cover sm:pt-0 bg-mobile-banner md:bg-desktop-banner min-h-[750px] md:min-h-[273px] lg:min-h-[290px] xl:min-h-[390px] 2xl:min-h-[450px] bg-no-repeat bg-center w-full bg-blue-600 sm:bg-zinc-50" />
        <SlideCustomers />
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">

          <div className="container px-4 md:px-6 mx-auto mt-20">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Por que escolher Rico Marcas?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Zap className="h-12 w-12 mb-4 text-blue-600" />
                  <h3 className="text-xl font-bold mb-2">Alta Performance</h3>
                  <p className="text-center text-gray-600">Baterias projetadas para oferecer o máximo desempenho em todas as condições.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Shield className="h-12 w-12 mb-4 text-blue-600" />
                  <h3 className="text-xl font-bold mb-2">Durabilidade</h3>
                  <p className="text-center text-gray-600">Construídas para durar, nossas baterias resistem ao teste do tempo.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <ThumbsUp className="h-12 w-12 mb-4 text-blue-600" />
                  <h3 className="text-xl font-bold mb-2">Garantia Estendida</h3>
                  <p className="text-center text-gray-600">Oferecemos garantia líder do mercado em todos os nossos produtos.</p>
                </CardContent>
              </Card>
            </div>
          </div>
          <WppButton />
        </section>

        <section className="py-10 container mx-auto px-3 md:px-20 flex justify-center">
          <div className="bg-bottom bg-cover md:bg-top bg-no-repeat max-w-[1120px] w-full h-[700px] bg-[url('../../public/images/banners/banner-mobile.png')] md:bg-[url('../../public/images/banners/banner-desktop.png')] rounded-3xl flex md:h-[500px] items-start justify-center md:items-center md:justify-end shadow-lg">
            <div className="md:w-1/2 h-1/2 w-full md:h-full flex flex-col gap-10 items-start justify-center px-10 pt-10 md:pt-0">
              <p className="text-zinc-50 font-bold text-4xl md:text-5xl">PRECISA DE UMA <span className="text-green-500">BATERIA</span> AGORA?</p>
              <span className="text-zinc-300 text-lg md:text-xl">Estamos prontos para te atender, entre em contato agora mesmo.</span>
              <a
                onClick={() =>
                  sendMensage()
                }
                className="cursor-pointer shadow-lg hover:shadow-inner hover:shadow-zinc-800 flex items-center justify-center gap-2 text-sm sm:text-base bg-green-600 hover:bg-green-600/95 transition-all font-bold text-zinc-50 py-3 px-5 rounded-full"
              >
                <p className="font-bold">
                  Pedir Agora Mesmo
                </p>
                <WhatsappLogo className="size-5 font-bold" />
              </a>
            </div>
          </div>
        </section>

        <section id="products" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Nossos Produtos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {batterys.map((items) => (
                <Card key={items.id}>
                  <CardContent className="p-6">
                    <div className="relative w-64 h-64">
                      <Image
                        alt={items.title}
                        src={items.image}
                        fill
                        quality={100}
                        priority
                        sizes="100vw"
                        className="w-full h-auto"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{items.title}</h3>
                    <p className="text-gray-600 mb-4 text-center">{items.text}</p>
                    <Button
                      className="w-full px-4 py-2 rounded font-medium focus:outline-none focus:ring-2 focus:ring-offset-2"
                      onClick={() => sendWhatsAppMessage(items.msg || 'Olá, estou interessado em saber mais sobre este produto!')}
                    >
                      Pedir agora!
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <WppButton />
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6 mx-auto ">
            <div className="flex gap-8 items-center justify-around flex-col md:flex-row ">
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                  Sobre a Rico Marcas
                </h2>
                <p className="text-gray-600 mb-4">
                  Desde 2009, a Rico Marcas tem sido sinônimo de qualidade e inovação no mercado de baterias automotivas.
                  Nossa missão é fornecer produtos de alta performance que atendam às necessidades dos motoristas mais exigentes.
                </p>
                <p className="text-gray-600">
                  Com um compromisso inabalável com a excelência, continuamos a desenvolver tecnologias de ponta para garantir
                  que nossos clientes tenham acesso às melhores soluções em energia automotiva.
                </p>
              </div>
              <div className="flex justify-center w-full md:w-1/3 h-[550px] relative overflow-hidden rounded-xl shadow-xl">
                <Image
                  src="/images/faixada.jpeg"
                  alt="Rico Marcas Fábrica"
                  className=" object-cover"
                  quality={100}
                  priority
                  fill
                />
              </div>
            </div>
            <section className="py-10 container mx-auto px-3 md:px-20 flex justify-center mt-44">
              <div className="bg-bottom bg-cover md:bg-top bg-no-repeat max-w-[1120px] w-full h-[700px] bg-[url('../../public/images/banners/banner-mobile.png')] md:bg-[url('../../public/images/banners/banner-desktop.png')] rounded-3xl flex md:h-[500px] items-start justify-center md:items-center md:justify-end shadow-lg">
                <div className="md:w-1/2 h-1/2 w-full md:h-full flex flex-col gap-10 items-start justify-center px-10 pt-10 md:pt-0">
                  <p className="text-zinc-50 font-bold text-4xl md:text-5xl">PRECISA DE UMA <span className="text-green-500">BATERIA</span> AGORA?</p>
                  <span className="text-zinc-300 text-lg md:text-xl">Estamos prontos para te atender, entre em contato agora mesmo.</span>
                  <a
                    onClick={() =>
                      sendMensage()
                    }
                    className="cursor-pointer shadow-lg hover:shadow-inner hover:shadow-zinc-800 flex items-center justify-center gap-2 text-sm sm:text-base bg-green-600 hover:bg-green-600/95 transition-all font-bold text-zinc-50 py-3 px-5 rounded-full"
                  >
                    <p className="font-bold">
                      Pedir Agora Mesmo
                    </p>
                    <WhatsappLogo className="size-5 font-bold" />
                  </a>
                </div>
              </div>
            </section>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="feedbacks">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              O que nossos clientes dizem
            </h2>
          </div>
          <SectionGoogle />
        </section>
      </main>
    </div>
  )
}