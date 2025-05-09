export default function JobExperience(){
    return (
        <>
            <section id="job-exp" className={``}>
                <h2 className={`text-center font-bold text-2xl`}>Job Experience</h2>
                <div className={`flex p-5 items-center justify-center space-x-10`}>
                    <img src="/images/toromont-logo.png"/>
                    <div className={`px-5`}>
                        <h2 className={`font-bold text-2xl`}>Summer Warehouse Student</h2>
                        <p className={``}>May 2023 - August 2023 and May 2024 - August 2024</p>
                        <ul className={`list-disc pl-5 pt-10`}>
                            <li>Helped fulfill morning backorders daily for both outside customers and internal personnel.</li>
                            <li>Correctly and efficiently picked orders for customers and in-building mechanics.</li>
                            <li>Helped customers find completed orders in the pick-up area.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}