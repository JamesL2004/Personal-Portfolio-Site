import Link from "next/link";
import Image from "next/image";
import { Roboto_Condensed } from "next/font/google";

const robotoFont = Roboto_Condensed({
    weight: '400',
    subsets: ['latin'],
});

export default function NavBar()
{
    return (
        <>    
            <section className="sticky top-4 z-50">
                <nav className="mx-auto max-w-5xl bg-white flex justify-between items-center rounded-xl shadow px-6 py-3">
                    <Link href="/" className={`text-lg font-serif ${robotoFont.className}`}>
                        <Image src="/images/main_logo.png" height={40} width={40} alt="/"/>
                    </Link>
                    <ul className="flex space-x-4 ml-6">

                    <Link href="/" className={`hover:text-blue-500 transition-colors pl-5 border-l`}>Home</Link>
                    </ul>
                </nav>
            </section>
        </>
    );
}