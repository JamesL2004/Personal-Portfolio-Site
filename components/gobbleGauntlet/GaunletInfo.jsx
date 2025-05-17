"use client";

import Image from "next/image";
import GauntletCarousel from "./GauntletCarousel";

export default function GauntletInfo(){
    let slides = [
        "/images/Gobble_Gauntlet_Logo.png",
        "/images/main_logo.png",
        "/images/Wumpus-World.png",
    ];
    return(
        <>
            <section id="gauntletInfo">
                <div>
                    <div className="w-[50%] m-auto">
                        <GauntletCarousel slides={slides}/>
                    </div>
                    <div>
                        <h3>Gobble Gauntlet</h3>
                        <p>
                            During my third year at Lakehead I took 
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}