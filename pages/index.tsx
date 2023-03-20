import type { NextPage } from "next";
import Image from "next/image";
import Hero from "../public/hero.svg";
import About from "../components/about";
import Komponen from "../components/komponen";
import Contact from "../components/contact";

const Home: NextPage = () => {
  return (
    <div>
      <section className="w-screen h-screen bg-yellow-100 flex items-center justify-center relative">
        <Image
          src={Hero}
          width={100}
          height={100}
          alt="Hero"
          className="w-80 h-full md:w-96"
        />
        <div className="absolute w-full h-full top-0 flex items-center justify-center left-0 bg-black/50">
          <article>
            <h3 className="text-2xl md:text-4xl mb-2 font-bold uppercase w-[80%] text-center mx-auto text-white tracking-wide leading-[2rem] md:leading-[3rem]">
              welcome to smart trashbin monitoring
            </h3>
            <p className="text-center text-lg md:text-2xl text-zinc-200">
              IoT Smart Trashbin Based on Arduino Uno
            </p>
            <div className="flex items-center justify-center mt-6">
              <button className="w-32 h-10 rounded-md bg-yellow-400 font-bold transition-colors duration-150 hover:bg-yellow-500">
                Monitoring
              </button>
            </div>
          </article>
        </div>
      </section>
      <About />
      <Komponen />
      <Contact />
    </div>
  );
};

export default Home;
