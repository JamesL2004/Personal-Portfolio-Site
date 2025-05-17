import Image from "next/image";

export default function GauntletMasthead(){
    return (
        <>
            <section id="gauntletMasthead">
                <div>
                    <Image src="/images/Gobble_Gauntlet_Masthead.png" alt="/" fill style={{ objectFit: 'cover' }} />
                </div>
            </section>
        </>
    );
}