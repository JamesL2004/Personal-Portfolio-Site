import { Roboto_Condensed } from "next/font/google";

const robotoFont = Roboto_Condensed({
    weight: '400',
    subsets: ['latin'],
});

const robotoBoldFont = Roboto_Condensed({
    weight: '800',
    subsets: ['latin'],
});

export default function AboutMe(){
    return (
        <>
            <section id="about-me" className={`py-10`}>
            <div className="bg-blue-400 max-w-2xl mx-auto flex flex-col md:flex-row md:max-w-7xl p-10 rounded-xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                <img src="/images/masthead_image.png" className="w-full rounded-full border md:w-1/3" /> 
                <div className="w-full space-y-2 p-4 flex flex-col items-center justify-center">
                    <h2 className={`pt-2 text-2xl ${robotoBoldFont.className}`}>About Me</h2>
                    <p className={`text-center max-w-7xl ${robotoFont.className}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac elit mi. Sed hendrerit, sapien pulvinar pellentesque tempor, felis sapien efficitur mi, vel elementum mauris leo sit amet felis. Praesent tristique mi felis, eget vehicula urna congue tristique. 
                        Etiam at ex aliquet erat lacinia rhoncus elementum ut tortor. 
                        Quisque vitae nisi non mauris molestie cursus a tristique augue. 
                        Vivamus semper mauris in libero ullamcorper consequat. Donec non nulla justo.
                    </p>
                </div>
            </div>   
        </section>
        </>
    );
}