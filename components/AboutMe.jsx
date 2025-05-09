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
            <div id="about-me" className={`w-fullspace-y-2 p-4 flex flex-col items-center justify-center`}>
                <h2 className={`pt-2 text-2xl ${robotoBoldFont.className}`}>About Me</h2>
                <p className={`text-center max-w-7xl ${robotoFont.className}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac elit mi. Sed hendrerit, sapien pulvinar pellentesque tempor, felis sapien efficitur mi, vel elementum mauris leo sit amet felis. Praesent tristique mi felis, eget vehicula urna congue tristique. 
                    Etiam at ex aliquet erat lacinia rhoncus elementum ut tortor. 
                    Quisque vitae nisi non mauris molestie cursus a tristique augue. 
                    Vivamus semper mauris in libero ullamcorper consequat. Donec non nulla justo.                    </p>    
            </div>
        </>
    );
}