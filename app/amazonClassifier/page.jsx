export default function AmazonClassifier(){
    return (
        <>
            <section id='amz-classifier'>
                <div className={`flex items-center justify-center space-x-20 max-w-full mx-auto bg-blue-400 rounded-lg p-20 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg`}>
                    <div>
                        <img src='/images/amazon-review.png'/>
                    </div>
                    <div>
                        <h2 className="font-bold text-2xl">Amazon Review Supervised Learning Classifer</h2>
                        <p className={`text-left`}>
                            After focusing on web and app development in my first two years, when I entered my third year I decided I would focus more on Machine Learning and data science to diversify
                            my knowledge. During those two semesters I took three different classes that related to ML. Big Data, Intro to Data Science, and Intro to Artifical Intelligence. 
                            This was my final project for the Intro to Artifical Intelligence. This project is a simulation of the classic wumpus world problem using the phi-4 SLM as the hero's "brain".
                            It uses the SLM to make every decision the hero makes. This includes which space to move next, if it wants to try and shoot the wumpus, while also having a internal monolouge for each step.
                            The hero keeps track of past moves and events to get better results from the SLM. It was built using Python's mesa library for agents, and solara for visualization.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}