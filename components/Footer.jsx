import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Footer(){
    return (
        <>
            <section id="footer" className={`flex flex-col items-center justify-center p-10 space-y-10`}>
                <div className={`text-center space-y-2`}>
                    <h2 className={`font-bold text-4xl`}>Contact</h2>
                    <p className={`text-xl`}>You're welcomed to take a look at any of my social profiles below or email me at the address below for any business enquiries</p>
                </div>
                <ul className={`flex space-x-10`}>
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
        </>
    )
}