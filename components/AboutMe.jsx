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
                <img src="/images/masthead_image.png" className="w-full rounded-full md:w-1/3" /> 
                <div className="w-full space-y-2 p-4 flex flex-col items-center justify-center">
                    <h2 className={`pt-2 text-2xl ${robotoBoldFont.className}`}>About Me</h2>
                    <p className={`text-center max-w-7xl ${robotoFont.className}`}>
                        Hi I'm James. I am currently a student at Lakehead University studying Computer Science with one day hoping to follow my passion by becoming a full-time programmer. 
                        I grew up in Lively, Ontario and went to school at Lockeryby Composite School. In 2022 I graduated from Lockerby with honours and with a SHSM seal in Information Systems and Technology.
                        Currently, I am looking for part-time job oppurtunities in Orillia, Ontario to gain more work experience. I am a passionate, hard-working, and responsible person that any employer can rely on.
                        Thank you for taking the time to review my application and taking a look at my website.
                    </p>
                </div>
            </div>   
        </section>
        </>
    );
}