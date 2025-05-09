import AboutMe from "@/components/AboutMe";
import EducationHistory from "@/components/EducationHistory";
import JobExperience from "@/components/JobExperience";
import Masthead from "@/components/Masthead";

export default function Home(){
  return (
    <>
        <div className={`space-y-8`}>
          <Masthead/>
          <div className={`bg-blue-500 space-y-20`}>
            <AboutMe/>
            <JobExperience/>
            <EducationHistory/>
          </div>
        </div>
    </>
  );
}