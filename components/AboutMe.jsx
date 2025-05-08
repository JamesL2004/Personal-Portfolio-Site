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
            <div className={`border space-y-4 flex flex-col items-center justify-center p-5 rounded-lg`}>
                <h2 className={`pt-2 text-2xl ${robotoBoldFont.className}`}>About Me</h2>
                <p className={`p-2 text-center ${robotoFont.className}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac elit mi. Sed hendrerit, sapien pulvinar pellentesque tempor, felis sapien efficitur mi, vel elementum mauris leo sit amet felis. Praesent tristique mi felis, eget vehicula urna congue tristique. 
                    Etiam at ex aliquet erat lacinia rhoncus elementum ut tortor. 
                    Quisque vitae nisi non mauris molestie cursus a tristique augue. 
                    Vivamus semper mauris in libero ullamcorper consequat. Donec non nulla justo.
                </p>
            </div>
        </>
    );
}