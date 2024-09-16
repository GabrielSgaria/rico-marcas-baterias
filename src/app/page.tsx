import { Button } from "@/components/button"
import { Card, CardContent } from "@/components/card"
import { SlideCustomers } from "@/components/slide-customers"
import { WppButton } from "@/components/wpp-button"
import { batterys } from "@/lib/batterys"
import { Zap, Shield, ThumbsUp, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen w-full mx-auto ">

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
                    {/* <p className="text-gray-600 mb-4">{items.text}</p> */}
                    <Button className="w-full">Saiba Mais</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                  Sobre a Rico Marcas
                </h2>
                <p className="text-gray-600 mb-4">
                  Há mais de 20 anos, a Rico Marcas tem sido sinônimo de qualidade e inovação no mercado de baterias automotivas.
                  Nossa missão é fornecer produtos de alta performance que atendam às necessidades dos motoristas mais exigentes.
                </p>
                <p className="text-gray-600">
                  Com um compromisso inabalável com a excelência, continuamos a desenvolver tecnologias de ponta para garantir
                  que nossos clientes tenham acesso às melhores soluções em energia automotiva.
                </p>
              </div>
              <div className="flex justify-center w-32 relative">
                <Image
                  src="/image/logo/logo.png"
                  alt="Rico Marcas Fábrica"
                  className=" object-cover"
                  fill
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              O que nossos clientes dizem
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4">
                      A bateria da Rico Marcas superou todas as minhas expectativas. Excelente durabilidade e desempenho!
                    </p>
                    <p className="font-bold">Cliente {i}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Entre em Contato
            </h2>
            <div className="max-w-md mx-auto">

            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2023 Rico Marcas. Todos os direitos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Termos de Serviço
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacidade
          </Link>
        </nav>
      </footer>
    </div>
  )
}