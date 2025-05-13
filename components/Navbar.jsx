import Link from "next/link";
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
                    James Lynch
                    </Link>
                    <ul className="flex space-x-4 ml-6">
                    <Link href="#about-me" className={`hover:text-blue-500 transition-colors pl-5 border-l`}>About Me</Link>
                    <Link href="#job-exp" className={`hover:text-blue-500 transition-colors pl-5 border-l`}>Job Experience</Link>
                    <Link href="#educ" className={`hover:text-blue-500 transition-colors pl-5 border-l`}>Education</Link>
                    <Link href="#projects" className={`hover:text-blue-500 transition-colors pl-5 border-l`}>Projects</Link>
                    <Link href="#skills" className={`hover:text-blue-500 transition-colors pl-5 border-l`}>Skills</Link>
                    </ul>
                </nav>
            </section>
        </>
    );
}