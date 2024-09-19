'use client'
import { sendMensage } from "@/lib/actions";
import { WhatsappLogo } from "@phosphor-icons/react";

export function WppButton() {
    return (
        <div className="mx-auto flex container w-full justify-center h-full py-3 mt-20">
            <button onClick={sendMensage} className="py-3 px-2 bg-green-600 rounded-lg shadow-md flex items-center justify-center gap-2 text-white font-bold md:text-xl">
                Peça agora mesmo <WhatsappLogo size={24}/>
            </button>
        </div>
    )
}