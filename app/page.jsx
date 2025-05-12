import AboutMe from "@/components/AboutMe";
import EducationHistory from "@/components/EducationHistory";
import JobExperience from "@/components/JobExperience";
import Masthead from "@/components/Masthead";
import Skills from "@/components/Skills";

export default function Home(){
  return (
    <>
        <div className={`space-y-8`}>
          <Masthead/>
          <div className={`bg-blue-500 space-y-12`}>
            <AboutMe/>
            <EducationHistory/>
            <Skills/>
            <JobExperience/>
          </div>
        </div>
    </>
  );
}