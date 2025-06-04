export default function Skills(){
    return (
        <>
            <section id="skills" className={`pb-10`}>
                <h2 className={`text-center font-bold text-4xl pb-5`}>Skills</h2>
                <div className={`flex items-center justify-center bg-blue-400 max-w-7xl mx-auto rounded-lg space-x-20 p-10 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg`}>
                    <div className={`bg-blue-300 p-10 rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg`}>
                        <h3 className={`font-bold text-lg`}>Languages</h3>
                        <ul className={`list-disc pl-5 pt-10`}>
                            <li>Javascript</li>
                            <li>Python</li>
                            <li>Java</li>
                            <li>C#</li>
                            <li>HTML/CSS</li>
                        </ul>
                    </div>
                    <div className={`bg-blue-300 p-10 outline-blue-500 rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg`}>
                        <h3 className={`font-bold text-lg`}>Frameworks</h3>
                        <ul className={`list-disc pl-5 pt-5`}>
                            <li>NextJS</li>
                            <li>Express</li>
                            <li>Mesa</li>
                            <li>Scikit-Learn</li>
                            <li>ASP.NET</li>
                        </ul>
                    </div>
                    <div className={`bg-blue-300 p-10 rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg`}>
                        <h3 className={`font-bold text-lg`}>Other Technologies</h3>
                        <ul className={`list-disc pl-5 pt-5`}>
                            <li>Github</li>
                            <li>MongoDB</li>
                            <li>MySQL Workbench</li>
                            <li>Unity</li>
                            <li>Pandas</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}