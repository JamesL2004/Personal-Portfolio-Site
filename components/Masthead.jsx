import { Roboto_Condensed } from "next/font/google";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';


const robotoFont = Roboto_Condensed({
    weight: '400',
    subsets: ['latin'],
});

const robotoBoldFont = Roboto_Condensed({
    weight: '800',
    subsets: ['latin'],
});

export default function Masthead() {
    return (
        <section className="flex flex-col items-center justify-center mx-auto p-2 space-y-4">
            <div className="max-w-lg text-center space-y-4">
                <h2 className={`text-5xl font-bold text-blue-400 ${robotoBoldFont.className}`}> Hi, I'm James</h2>
                <p className={`text-xl ${robotoFont.className}`}> This is my Personal Portfolio Site where you can see the projects I'm proudest of and see a bit of my life story.</p>
            </div> 
            <ul className="flex justify-center items-center space-x-10">
                <li>
                <a href="https://github.com/JamesL2004" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-gray-500 transition-colors">
                    <FaGithub />
                </a>
                </li>
                <li>
                <a href="https://www.linkedin.com/in/james-lynch-7b8356263/" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-600 transition-colors">
                    <FaLinkedin />
                </a>
                </li>
                <li>
                <a href="mailto:lynch7824@gmail.com" className="text-3xl hover:text-red-500 transition-colors" aria-label="Email">
                    <MdEmail />
                </a>
                </li>
            </ul>
        </section>

    );
}