import Typewriter from "typewriter-effect";
import InnovateButton from "./InnovateButton";

const Introduction = () => {
  return (
    <div className="my-20 mx-20  ">
      <InnovateButton></InnovateButton>
      <h1 className="text-7xl  text-white font-bold ">Full Stack</h1>
      <p className="mt-2 text-7xl font-bold text-brand-gradient">Developer</p>
      <div className="mt-2 text-2xl">
      <Typewriter
        options={{
          strings: ["Tech Enthusiast", "Computer Science & Engg. Student"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
      <p className="mt-2 text-gray-500 text-xl">
        Enhancing digital experiences that are smooth, scalable, and made to
        impress.
      </p>

      <div className="mt-5 flex gap-5">
        <button className="btn rounded-full ">React</button>
        <button className="btn rounded-full ">Javascript</button>
        <button className="btn rounded-full ">Node.js</button>
        <button className="btn rounded-full ">Mongodb</button>
      </div>
    </div>
  );
};

export default Introduction;
