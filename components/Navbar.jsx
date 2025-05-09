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
            <nav className="fixed top-0 left-0 w-full bg-white flex justify-between items-center rounded-sm shadow z-50">
                <Link href="/" className={`text-lg p-4 font-serif ${robotoFont.className}`}>
                    James Lynch
                </Link>
                <ul className="flex space-x-4 p-4">
                    <Link href="#about-me">About Me</Link>
                    <Link href="#job-exp">Job Experience</Link>
                    <Link href="#educ">Education</Link>
                    <Link href="#projects">Projects</Link>
                    <Link href="#skills">Skills</Link>
                </ul>
            </nav>
        </>
    );
}