import Image from "next/image";
import Link from "next/link";

export function NavBar() {
    return (
        <header className="px-4 lg:px-6 h-full py-2 md:flex items-center justify-center hidden">
            <Link className="flex items-center justify-center w-20 h-16 relative rounded-xl overflow-hidden" href="#">
                <Image
                    alt="Logo"
                    src="/images/logo/logo.png"
                    fill
                    sizes="100vw"
                    className="w-full h-auto"
                />
            </Link>
            <nav className="ml-auto flex md:flex-row  gap-4 sm:gap-6">

                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#products">
                    Produtos
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
                    Quem somos
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#feedbacks">
                    Feedback
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
                    Contato
                </Link>
            </nav>
        </header>
    )
}