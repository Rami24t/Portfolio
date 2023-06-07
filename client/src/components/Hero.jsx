import React from "react";
import { motion } from "framer-motion";
import Computer from "./canvas/Computer";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute top-0 left-0 w-full">
        Hi 👋, I'm Rami and I like web software development! <br />
        Hallo 👋, ich bin Rami und ich mag Web-Software-Entwicklung! <br />
        Salut 👋, je suis Rami et j'aime le développement de logiciels Web! <br />
        Hola 👋, soy Rami y me gusta el desarrollo de software web! <br />
        مرحبا 👋 ، أنا رامي وأحب تطوير برامج الويب! <br />
      </div>
        <Computer />
    </section>
  );
};

export default Hero;
