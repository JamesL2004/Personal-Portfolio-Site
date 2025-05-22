"use client";

import Image from "next/image";
import ImageCarousel from "../ImageCarousel";

export default function GauntletInfo(){
    let slides = [
        "/images/Gobble_Gauntlet_Logo.png",
        "/images/main_logo.png",
        "/images/Wumpus-World.png",
    ];
    return(
        <>
            <section id="gauntletInfo" className={`p-20`}>
                <div className={`flex items-center justify-center space-x-20 max-w-full mx-auto bg-blue-400 rounded-lg p-20 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg`}>
                    <div className="w-[50%] m-auto">
                        <ImageCarousel slides={slides}/>
                    </div>
                    <div className="w-full space-y-2 pl-10 max-w-4xl flex flex-col">
                        <h2 className="font-bold text-2xl">Gobble Gauntlet</h2>
                        <p className={`text-left`}>
                            During my third year at Lakehead University I took there Game Programming course. For my final project I decided to create Gobble Gauntlet.
                            It is a top-down dungeon crawler that has the player go through different levels to transed the dungeon. While exploring these levels the player 
                            needs to avoid and destroy enemies that will get in there way. Each level is designed so the player has to make a decision on which route to take. 
                            Depending on the route it may make his attempt harder or easier, some routes may have tons of enemies, while some may have only a few enemies while also having powerups
                            that can help the player of there journey.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}