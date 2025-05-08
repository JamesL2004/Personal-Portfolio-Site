import { Roboto_Condensed } from "next/font/google";

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
        <div className={`border flex flex-col md:flex-row items-center justify-center mx-auto rounded-xl p-4  md:space-y-0 md:space-x-4`}>
            <div className={`max-w-md text-center md:text-left`}>
                <h2 className={`text-2xl font-bold font-mb-2 text-blue-400 ${robotoBoldFont.className}`}>Hi, I'm James</h2>
                <p className={`text-md ${robotoFont.className}`}>
                    This is my Personal Portfolio Site where you can see the projects I'm proudest of
                    and see a bit of my life story.
                </p>
            </div>
            <img src="/images/StudentCard.jpeg" className={`w-40 md:w-1/3`} />
        </div>
    );
}