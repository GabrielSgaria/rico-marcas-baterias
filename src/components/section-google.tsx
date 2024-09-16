/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client'
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
// @ts-ignore
import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";
import { useWindowSize } from "react-use";
import { CardGoogle } from "./card-google";

export function SectionGoogle() {
    const windowSize = useWindowSize();
    const [slidesPerPage, setSlidesPerPage] = useState(1);
    const [slidesGap, setSlidesGap] = useState(0);
    const [slidesPadding, setSlidesPadding] = useState(0);

    useEffect(() => {
        if (windowSize.width < 768) {
            setSlidesPerPage(1);
            setSlidesGap(0);
            setSlidesPadding(40);
        } else {
            setSlidesPerPage(1);
            setSlidesGap(20);
            setSlidesPadding(50);
        }
    }, [windowSize]);
    return (
        <section className="py-20 bg-zinc-50" id="assessment">
            <div className=" items-center justify-center flex mt-8">
                <Splide
                    options={{
                        type: "loop",
                        drag: "free",
                        gap: slidesGap,
                        padding: slidesPadding,
                        autoWidth: true,
                        perPage: slidesPerPage,
                        pagination: false,
                        width: "100%",
                        autoplay: true, // Ativa o autoplay
                        interval: 3000, // Intervalo entre os slides em milissegundos (3 segundos)
                        pauseOnHover: true, // Pausa o autoplay quando o mouse está sobre o slider
                        resetProgress: false, // Mantém o progresso do autoplay ao mudar de slide manualmente
                    }}
                >
                    <SplideSlide>
                        <CardGoogle
                            altImage="GWS Tecnologia e Marketing"
                            nameCard="GWS Tecnologia e Marketing"
                            dataCard="06-06-2024"
                            avatarGoogle="https://lh3.googleusercontent.com/a-/ALV-UjXuXS8dXQZbnZHDdb0tdM3va84CLWIK8MblMAD_ION5N90l2Io=w60-h60-p-rp-mo-ba6-br100"
                            text="O melhor atendimento da região. Vendedores super atenciosos instruídos e entendidos do assunto sobre baterias. Além de tudo os preços são os melhores pelo que pesquisei no mercado. Sem contar a grande variedade de baterias que tem. E o melhor é que eles trabalham com cartão de débito e crédito e aceitam pix."
                        />
                    </SplideSlide>
                    <SplideSlide>
                        <CardGoogle
                            altImage="Lorena Nunes"
                            nameCard="Lorena Nunes"
                            dataCard="08-06-2024"
                            avatarGoogle="https://lh3.googleusercontent.com/a/ACg8ocKKx1edw4xhtrz662t2h6LxFlgTI2W5NNf7T0NWqez4iFza2g=w60-h60-p-rp-mo-br100"
                            text="Vieram em casa trocar a bateria que tinha arriado, e ainda geraram um link para pagamento após o serviço feito! Super recomendo ⭐"
                        />
                    </SplideSlide>
                    <SplideSlide>
                        <CardGoogle
                            altImage="Jamille Porto"
                            nameCard="Jamille Porto"
                            dataCard="08-06-2024"
                            avatarGoogle="https://lh3.googleusercontent.com/a-/ALV-UjXpWsaYj-p7LQnoN4pnGriHFoBLOLx2ximWI-TT4KmbKekvmSxw=w60-h60-p-rp-mo-br100"
                            text="Praticidade, entrega no horário agendado, facilita nossa vida, ainda testa o carro pra ver se realmente é a bateria sem cobrar nada, diferenciado atendimento 👏👏"
                        />
                    </SplideSlide>
                    <SplideSlide>
                        <CardGoogle
                            altImage="Nelise Gusmão"
                            nameCard="Nelise Gusmão"
                            dataCard="08-06-2024"
                            avatarGoogle="https://lh3.googleusercontent.com/a/ACg8ocJgmcrbIPNjmyR8e7IJKXhZ03Ljydmh6f0r6_Lp493b6vr7OQ=w60-h60-p-rp-mo-br100"
                            text="Excelente atendimento do sr Patrick. Veio até minha residência,  carregou a bateria, limpou os terminais e deixou funcionando.  Além de tudo, preço bastante justo. Recomendo"
                        />
                    </SplideSlide>
                   
                    <SplideSlide>
                        <CardGoogle
                            altImage="Contato CM"
                            nameCard="Contato CM"
                            dataCard="08-06-2024"
                            avatarGoogle="https://lh3.googleusercontent.com/a/ACg8ocLmGgMffmp-mTFgsxP03Ef24sPHiKlRCm4LWDBq9Ef32GRUTA=w60-h60-p-rp-mo-ba3-br100"
                            text="Comprei com o pessoal e fui muito bem atendido .Recomendo muito bom serviço."
                        />
                    </SplideSlide>
                    <SplideSlide>
                        <CardGoogle
                            altImage="Júlia Vitória"
                            nameCard="Júlia Vitória"
                            dataCard="08-06-2024"
                            avatarGoogle="https://lh3.googleusercontent.com/a-/ALV-UjVQxxHLMSJPqgkkAybb3tzIO3PKFYzTbPwCEW1G_u_OlRlThcqX=w60-h60-p-rp-mo-br100"
                            text="Ótimo preço, atendimento excelente pontualidade na entrega, super recomendo."
                        />
                    </SplideSlide>
                   
                </Splide>
            </div>
        </section>
    )
}