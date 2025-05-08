import AboutMe from "@/components/AboutMe";
import Masthead from "@/components/Masthead";

export default function Home(){
  return (
    <>
        <div className={`space-y-4`}>
          <Masthead/>
          <AboutMe/>
        </div>
    </>
  );
}