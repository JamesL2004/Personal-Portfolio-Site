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
                <nav className="mx-auto w-fit bg-white flex justify-between items-center rounded-xl shadow px-6 py-3">
                    <Link href="/" className={`text-lg font-serif ${robotoFont.className}`}>
                    James Lynch
                    </Link>
                    <ul className="flex space-x-4 ml-6">
                    <Link href="#about-me" className={`hover:underline hover:text-blue-500`}>About Me</Link>
                    <Link href="#job-exp" className={`hover:underline hover:text-blue-500`}>Job Experience</Link>
                    <Link href="#educ" className={`hover:underline hover:text-blue-500`}>Education</Link>
                    <Link href="#projects" className={`hover:underline hover:text-blue-500`}>Projects</Link>
                    <Link href="#skills" className={`hover:underline hover:text-blue-500`}>Skills</Link>
                    </ul>
                </nav>
            </section>
        </>
    );
}