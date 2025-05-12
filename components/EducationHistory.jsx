export default function EducationHistory() {
    return (
        <>
            <section id="educ">
                <h2 className={`text-center font-bold text-2xl`}>Education</h2>
                <div className={`flex flex-col items-center justify-center space-y-10 md:flex-row md:space-x-10 md:space-y-0`}>
                    <img src="/images/lakehead-georgian.png" className={`max-w-md h-auto`}/>
                    <div className={`items-center justify-center`}>
                        <h3 className={`font-bold text-2xl pb-4`}>Lakehead-Georgian Honours Bachelor's of Science in Computer Science Combined Credintial Program</h3>
                        <h4 className={`pb-1 text-lg`}>Completed Courses</h4>
                        <ul className={`list-disc pl-5`}>
                            <li>Data Structures</li>
                            <li>Intro to Data Science</li>
                            <li>System Analysis & Project Management</li>
                            <li>Topics on Artfical Intelligence</li>
                            <li>Javascript Frameworks</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}