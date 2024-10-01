/* eslint-disable @typescript-eslint/ban-ts-comment */

'use client'
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
// @ts-ignore
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Image from "next/image";



export function SlideCustomers() {
    return (
        <div className="w-full relative mt-0 bg-zinc-50 shadow-sm">
            <Splide
                options={{
                    type: "loop",
                    focus: "center",
                    autoPlay: "play",
                    arrows: false,
                    pagination: false,
                    drag: "free",
                    gap: 100,
                    padding: 180,
                    autoWidth: true,
                    autoHeight: true,
                    perPage: 1,
                    autoScroll: {
                        speed: 0.5,
                        autoStart: true,
                    },
                }}
                extensions={{ AutoScroll }}
                className="absolute z-20 top-0"
            >

                <SplideSlide className="flex items-center">
                    <Image
                        width={900}
                        height={900}
                        quality={100}
                        alt=""
                        src='/images/suppliers/moura.png'
                        className="w-24 max-w-24 md:w-24 md:max-w-24 opacity-65 hover:opacity-100aturate-0 hover:saturate-100"
                    />
                </SplideSlide>
                <SplideSlide className="flex items-center">
                    <Image
                        width={900}
                        height={900}
                        quality={100}
                        alt=""
                        src='/images/suppliers/heliar.png'
                        className="w-24 max-w-24 md:w-24 md:max-w-24 "
                    />
                </SplideSlide>
                <SplideSlide className="flex items-center">
                    <Image
                        width={900}
                        height={900}
                        quality={100}
                        alt=""
                        src="/images/suppliers/zetta.png"
                        className="w-24 max-w-24 md:w-24 md:max-w-24 "
                    />
                </SplideSlide>
                <SplideSlide className="flex items-center">
                    <Image
                        width={900}
                        height={900}
                        quality={100}
                        alt=""
                        src="/images/suppliers/maxfor.png"
                        className="w-24 max-w-24 md:w-24 md:max-w-24 "
                    />
                </SplideSlide>
            </Splide>
        </div>

    )
}