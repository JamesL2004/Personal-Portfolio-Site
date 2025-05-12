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
        <section className={`flex flex-col items-center justify-center mx-auto p-2 md:flex-row space-y-4 space-x-16`}>
            <div className={`max-w-md text-center`}>
                <h2 className={`text-2xl font-bold font-mb-2 text-blue-400 ${robotoBoldFont.className}`}>Hi, I'm James</h2>
                <p className={`text-md ${robotoFont.className}`}>
                    This is my Personal Portfolio Site where you can see the projects I'm proudest of
                    and see a bit of my life story.
                </p>
            </div>
        </section>
    );
}