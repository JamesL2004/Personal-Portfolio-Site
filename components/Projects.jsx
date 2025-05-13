export default function Projects(){
    return (
        <>
            <section id="projects" className={`pb-10`}>
                <h2 className={`text-center font-bold text-4xl pb-10`}>My Projects</h2>
                <div className={`flex flex-col items-center justify-center bg-blue-400 max-w-full mx-auto space-x-0 space-y-20 p-20  md:flex-row md:space-x-20`}>
                    <div className={`bg-blue-300 p-10 rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg`}>
                        <img src="/images/Gobble_Gauntlet_Logo.png" className={`max-w-sm h-auto`}/>
                        <div className={`flex flex-col items-center justify-center`}>
                            <a href="/" className={`font-bold text-lg text-center pt-5 hover:underline hover:cursor-pointer`}>Gobble Gauntlet</a>
                            <a href="https://github.com/JamesL2004/Gobble-Gauntlet-main" className={`text-center pb-2 hover:underline hover:cursor-pointer hover:text-blue-600`}>Github Repo</a>
                        </div>
                        <p className={`text-center max-w-sm`}>Gobble Gauntlet is a top-down dungeon crawler built using the Unity Game Engine.</p>
                    </div>
                    <div className={`bg-blue-300 p-10 outline-blue-500 rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg`}>
                        <img src="/images/Wumpus-World.png" className={"max-w-sm h-auto"}/>
                        <div className={`flex flex-col items-center justify-center`}>
                            <a className={`font-bold text-lg text-center pt-5`}>LLM Agent Wumpus World</a>
                            <a href="https://github.com/JamesL2004/Wumpus-World-phi4-Simulation" className={`text-center pb-2 hover:underline hover:cursor-pointer hover:text-blue-600`}>Github Repo</a>
                        </div>
                        <p className={`max-w-sm text-center`}>A Mesa SLM Agent Wumpus sinulation powered by Microsofts Phi-4-mini-instruct model</p>
                    </div>
                    <div className={`bg-blue-300 p-10 rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg`}>
                        <img src="/images/lakehead-georgian.png" className={"max-w-sm h-auto"}/>
                        <h3 className={`font-bold text-lg text-center pt-5`}>To Be Added</h3>
                    </div>
                </div>
            </section>
        </>
    );
}