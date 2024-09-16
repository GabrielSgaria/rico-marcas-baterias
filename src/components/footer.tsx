"use client";
import {
    DesktopIcon,
} from "@radix-ui/react-icons";

import Link from "next/link";

import { InstagramLogo, MapPin, WhatsappLogo } from '@phosphor-icons/react';
import { scrollToSection, sendMensage } from '@/lib/actions';

export function Footer() {


    return (
        <div className='w-full h-full' id='location'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.448036515486!2d-49.18523472461084!3d-25.42328047756608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcef9f71ea247d%3A0xe601aff66dbed4b0!2sRico%20Marcas%20Baterias!5e0!3m2!1spt-BR!2sbr!4v1726508540334!5m2!1spt-BR!2sbr"
                className="w-full h-48"
            >
            </iframe>
            <footer id="contact" className="py-8 font-sans bg-blue-900">
                <div className="container mx-auto mt-16 flex flex-col gap-16 sm:flex-row sm:justify-around sm:gap-0">
                    <div className="flex flex-col items-center sm:items-start ">
                        <h1 className="text-3xl font-semibold bebasNeue text-zinc-50">
                            Informações <br />
                            para contato
                        </h1>
                        <div className="mt-8 flex flex-col gap-4 text-center sm:items-start sm:justify-start px-10 sm:px-0">
                            <a
                                onClick={() => sendMensage()}
                                className="flex cursor-pointer items-center justify-center gap-1 text-zinc-50"
                            >
                                <WhatsappLogo className="size-6" />
                                <p className="h-6 items-center  justify-center font-semibold transition-all duration-500 hover:underline hover:border-zinc-100">
                                    (41) 9209-9393
                                </p>
                            </a>
                            <Link
                                target="blank"
                                href="https://maps.app.goo.gl/pebXEiJ5AE6KG1AZ8"
                                className="flex cursor-pointer justify-start items-start gap-1 text-zinc-50"
                            >
                                <MapPin className="size-6" />
                                <p className="h-6 font-semibold transition-all duration-500 hover:underline hover:border-zinc-100 max-w-[220px] md:max-w-[350px] text-start">
                                    R. Emma Rohrsetzer, 1061 - Emiliano Perneta, Pinhais - PR.
                                </p>
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col items-center sm:items-start ">
                        <h1 className="text-3xl font-semibold bebasNeue text-zinc-50 sm:items-start sm:flex sm:justify-center sm:flex-col">
                            <p className='text-center'>Menu
                            </p>
                            <p className='text-center'>

                                Rápido
                            </p>
                        </h1>

                        <nav className="md:flex grow justify-center">
                            <div className={`mt-8 flex flex-col gap-4 text-center sm:items-start sm:justify-start`}>
                                <button className="hover:underline hover:border-zinc-100 h-6 transition-all duration-200 text-zinc-50 font-semibold text-base uppercase px-2"
                                    onClick={() => scrollToSection("start")}>
                                    Inicio
                                </button>
                                <button className="hover:underline hover:border-zinc-100 h-6 transition-all duration-200 text-zinc-50 font-semibold text-base uppercase px-2"
                                    onClick={() => scrollToSection("contact")}>
                                    Contato
                                </button>
                                <button className="hover:underline hover:border-zinc-100 h-6 transition-all duration-200 text-zinc-50 font-semibold text-base uppercase px-2"
                                    onClick={() => scrollToSection("location")}>
                                    Localização
                                </button>
                                <button className="hover:underline hover:border-zinc-100 h-6 transition-all duration-200 text-zinc-50 font-semibold text-base uppercase px-2"
                                    onClick={() => scrollToSection("batterys")}>
                                    Baterias
                                </button>
                            </div>
                        </nav>
                    </div>

                    <div className="flex flex-col items-center sm:items-start">
                        <h1 className="text-center text-3xl font-semibold bebasNeue text-zinc-50 sm:text-start ">
                            Nos encontre nas <br />
                            redes sociais
                        </h1>
                        <div className="mt-8 flex flex-col items-center gap-4 sm:items-start">

                            <Link
                                target="blank"
                                href="https://www.instagram.com/rico.marcas/"
                                className="flex cursor-pointer flex-row items-center gap-4 text-zinc-50"
                            >
                                <InstagramLogo className="size-6" />
                                <p className="h-6 font-semibold transition-all duration-500 hover:underline hover:border-zinc-50">
                                    @rico.marcas
                                </p>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="container mx-auto mt-16 flex h-8 cursor-pointer items-center justify-center space-x-2 text-zinc-50/55 duration-700 transition-all hover:font-normal hover:text-zinc-50">
                    <h1 className="max-w-[300px] text-sm sm:text-start ">
                        <Link target="blank" href="https://www.sgariatech.com.br">
                            Desenvolvido por Sgaria Tech
                        </Link>
                    </h1>
                    <div>
                        <DesktopIcon className="size-4 items-center " />
                    </div>
                </div>
            </footer>
        </div>
    );
}
