import Link from "next/link";

export default function Projects(){
    return (
        <>
            <section id="projects" className={`pb-10`}>
                <h2 className={`text-center font-bold text-4xl pb-10`}>My Projects</h2>
                <div className={`flex flex-col justify-center bg-blue-400 max-w-full mx-auto space-x-0 space-y-20 p-20 lg:flex-row md:space-x-20`}>
                    <div className={`bg-blue-300 p-10 rounded-lg space-y-2 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg`}>
                        <img src="/images/Gobble_Gauntlet_Logo.png" className={`max-w-sm h-auto`}/>
                        <div className={`flex flex-col items-center justify-center`}>
                            <h3 className={`font-bold text-lg text-center pt-5 hover:cursor-pointer`}>Gobble Gauntlet</h3>
                            <div className={`space-x-3`}>
                                <Link href="https://github.com/JamesL2004/Gobble-Gauntlet-main" className={`text-center pb-2 hover:underline hover:cursor-pointer hover:text-blue-600 transition-colors`}>Github Repo</Link>
                                <Link href="/gobbleGauntlet" className={`text-center pb-2 hover:underline hover:cursor-pointer hover:text-blue-600 transition-colors`}>Info Page</Link>
                            </div>
                        </div>
                        <p className={`text-center max-w-sm`}>Gobble Gauntlet is a top-down dungeon crawler built using the Unity Game Engine.</p>
                    </div>
                    <div className={`bg-blue-300 p-10 rounded-lg space-y-2 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg`}>
                        <img src="/images/Wumpus-World.png" className={"max-w-sm h-auto"}/>
                        <div className={`flex flex-col items-center justify-center`}>
                            <h3 className={`font-bold text-lg text-center pt-5 hover:cursor-pointer`}>LLM Agent Wumpus World</h3>
                            <div className={`space-x-3`}>
                                <Link href="https://github.com/JamesL2004/Wumpus-World-phi4-Simulation" className={`text-center pb-2 hover:underline hover:cursor-pointer hover:text-blue-600 transition-colors`}>Github Repo</Link>
                                <Link href="/wumpusWorld" className={`text-center pb-2 hover:underline hover:cursor-pointer hover:text-blue-600 transition-colors`}>Info Page</Link>
                            </div>
                        </div>
                        <p className={`max-w-sm text-center`}>A Mesa SLM Agent Wumpus sinulation powered by Microsofts Phi-4-mini-instruct model</p>
                    </div>
                    <div className={`bg-blue-300 p-10 rounded-lg space-y-2 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg`}>
                        <img src="/images/amazon-review.png" className="max-w-sm h-auto mx-auto" />
                        <div className={`flex flex-col items-center justify-center`}>
                            <h3 className="font-bold text-lg text-center pt-5 hover:cursor-pointer">Amazon Review Supervised Learning Classifier</h3>
                            <div className="space-x-3">
                                <Link href="https://github.com/JamesL2004/Wumpus-World-phi4-Simulation" className="text-center pb-2 hover:underline hover:cursor-pointer hover:text-blue-600 transition-colors">Github Repo</Link>
                                <Link href="/amazonClassifier" className="text-center pb-2 hover:underline hover:cursor-pointer hover:text-blue-600 transition-colors">Info Page</Link>
                            </div>
                        </div>
                        <p className={`max-w-sm text-center`}>A Amazon review classifier that predicts whether a review is positive or negative.</p>
                    </div>
                </div>
            </section>
        </>
    );
}