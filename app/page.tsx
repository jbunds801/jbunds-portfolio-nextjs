import Header from "../src/components/Header";
import IconsGroup from "../src/components/IconsGroup";

const Home = () => {
  return (
    <>
      
      <p className="text-center mx-auto max-w-2xl mb-20 text-sm sm:text-base">
        Welcome! I&apos;m Jessica Bundy, a junior software engineer with a background in photography and visual design who builds thoughtful, 
        well-designed, and user-centered applications with React, TypeScript, and Python. Explore my work and learn a little more about me!
      </p>
      <Header>Skills</Header>
      <div className="flex justify-center mt-6">
        <IconsGroup />
      </div>
    </>
  );
};

export default Home;