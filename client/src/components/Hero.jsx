import { motion } from "framer-motion";
import tw from "../tw-styles";
import { ComputerCanvas } from "./canvas";

const Hero = ({ isMobile }) => {
  const greeting = () => {
    const time = new Date().getHours();
    if (time > 3 && time < 12) {
      return "Morning";
    } else if (time >= 12 && time < 17) {
      return "Afternoon";
    } else {
      return "Evening";
    }
  };

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${tw.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full filter blur-sm bg-violet-600" />
          <div className="w-1 sm:h-80 h-40 violet-gradient blur-sm" />
        </div>

        <div>
        <h1 className={tw.h1HeadText}>Rami Al-Saadi</h1>
          <h2 className={`${tw.heroHeadText} text-white`}>
            Hi, I&apos;m <span className="text-blue-600">Rami</span>
          </h2>
          <p className={`${tw.heroSubText} mt-2 text-white-100`}>
            I enjoy <span className="text-secondary">developing</span> high end
            JavaScript <span className="text-secondary">software</span>{" "}
            solutions,
            <br className="md:block hidden" /> dynamic{" "}
            <span className="text-secondary">Web Applications</span>, and
            responsive <span className="text-secondary"> UIs</span>.
          </p>
        </div>
      </div>
      <ComputerCanvas isMobile={isMobile} />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className={
          "mx-auto text-center mt-10 py-2 font-semibold animate-bounce"
        }
      >
        <p className=" -translate-y-14 w-60 mx-auto">
          {greeting()} <span className="animate-pulse inline-block">👋</span>,
          I&#39;m Rami and I like Web & Software development!
        </p>
        {/* <p>
          Hallo <span className="animate-pulse inline-block">👋</span>, ich bin
          Rami und ich mag Web/Software Entwicklung!{" "}
        </p> */}
      </motion.div>
      {/* Salut 👋, je suis Rami et j&#39;aime le développement de logiciels Web! <br /> */}
      {/* Hola 👋, soy Rami y me gusta el desarrollo de software web!<br /> */}
      {/* مرحبا 👋 ، أنا رامي وأحب تطوير برامج الويب! <br /> */}
      {/* <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-indigo-500 mt-1" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-indigo-500 to-transparent" />
        </div>
        <div>
          <h1 className={tw.heroHeadText}>
            Hi <span className="animate-pulse inline-block">👋</span>, I&#39;m{" "}
            <span className="text-blue-700">Rami</span>
          </h1>
          <p className={tw.heroSubText}>
            An aspiring junior{" "}
            <span className="text-blue-500">web developer</span> with a passion
            for software engineering and<span className="text-blue-500"> web development</span>.
          </p>
          <p className={tw.heroSubText}>
            I enjoy developing <span className="text-blue-500">websites</span>{" "}
            and <span className="text-blue-500">webapplications</span> using
            new technologies.</p> */}
      {/* <p className={tw.heroSubText}>
            On the <span className="text-blue-500">front-end development</span>,
            I enjoyed developing UIs and UXs using languages such as
            <span className="text-blue-500"> JavaScript </span>,
            <span className="text-blue-500"> HTML </span>, and
            <span className="text-blue-500"> CSS </span>, and technologies and CSS.
          </p> */}
      {/* <p className={tw.heroSubText}>
  In backend web development, I enjoyed designing and developing server-side applications and RESTful APIs using
  programming languages such as JavaScript and technologies like <span className="text-blue-500">Node.js</span> and <span className="text-blue-500">Express.js server</span> and <span className="text-blue-500">MongoDB database</span>.
  </p> */}
      {/* <p className={tw.heroSubText}>
    After graduating <span className="text-blue-500">Information Technology and Computing</span> with great success and receiving honors, I decided to pursue a career in web development.
  </p>
  <p className={tw.heroSubText}>
    I dedicated over a year to full-time training in <span className="text-blue-500"> web development</span>, continuously learning new technologies and languages.
  </p> */}
      {/* <p className={tw.heroSubText}>
  I loved working on the <span className="text-blue-500">front-end</span> UI and UX using languages such as HTML, CSS, and JavaScript.
  </p> */}
      {/* <p className={tw.heroSubText}>
   frameworks like React and CSS frameworks like Tailwind CSS, SASS, Bootstrap, and others were also used in my projects.
  </p>
  <p className={tw.heroSubText}>
  I enjoyed working with Front-end frameworks such as React JS and Tailwind CSS.
  </p> */}
      {/* <p className={tw.heroSubText}>
  I have also worked with MongoDB and utilized the Mongoose library for efficient database management.
  </p>
  <p className={tw.heroSubText}>
  I have used Node.js and Express.js to build RESTful APIs and servers.
  </p> */}
      {/* <p className={tw.heroSubText}>
  A <span className="text-blue-500">computer science</span> graduate I have undergone more than a year of full-time trainings in web development, constantly learning and practicing new web technologies and languages.
  </p> */}
      {/* <p className={tw.heroSubText}>
    In <span className="text-blue-500">front-end development</span>, I have honed my skills in HTML, CSS, and JavaScript. I have also enjoyed doing projects using popular JS frameworks like React and working with responsive design using CSS frameworks like Tailwind CSS, SASS, Bootstrap, and others.
  </p> */}
      {/* <p className={tw.heroSubText}>
    On the <span className="text-blue-500">back-end</span>, I have experience building RESTful APIs and Express.js servers on Node.js. I have also worked with MongoDB and utilized the Mongoose library for efficient database management.
  </p>
  <p className={tw.heroSubText}>
    Throughout my journey, I have explored various npm modules to enhance the functionality and features of my projects.
  </p>
  <p className={tw.heroSubText}>
    Prior to my web development focus, I graduated from university with a degree in Information Technology and Computing, achieving outstanding grades and receiving honors. I hold a Bachelor of Science in Computer Science.
  </p>
  <p className={tw.heroSubText}>
    To further develop my skills, I dedicated over a year to full-time training in web development, continuously learning new technologies and programming languages.
  </p> */}
      {/*
          <p className={tw.heroSubText}>
          I like software<span className="text-blue-500"> development</span>!
          </p>
          <p className={tw.heroSubText}>
          Ich mag <span className="text-blue-500">Web-Entwicklung</span>!
          </p>
          <p className={tw.heroSubText}>
          And think that <span className="text-blue-500"> frontend </span> and 
          <span className="text-blue-500"> backend </span> development can be fun!
          </p>
          <p className={tw.heroSubText}>
          I enjoy <span className="text-blue-500">learning</span> new things!
          </p>
          <p className={tw.heroSubText}>
    I am an aspiring <span className="text-blue-500">junior web developer</span> who has trained extensively in <span className="text-blue-500">web design</span> and <span className="text-blue-500">web development</span>.
  </p>
  <p className={tw.heroSubText}>
    In the <span className="text-blue-500">front-end</span>, I have learned and trained in HTML, CSS, JavaScript, and various frameworks such as <span className="text-blue-500">React</span>. I have also enjoyed working with responsive design using frameworks like <span className="text-blue-500">Tailwind CSS</span>, <span className="text-blue-500">SASS</span>, and <span className="text-blue-500">Bootstrap</span>.
  </p>
  <p className={tw.heroSubText}>
    On the <span className="text-blue-500">back-end</span>, I have acquired the skills to build RESTful APIs using <span className="text-blue-500">Express</span> servers with <span className="text-blue-500">Node.js</span>. I have also utilized <span className="text-blue-500">Mongoose</span> with <span className="text-blue-500">MongoDB</span> for database management.
  </p>
  <p className={tw.heroSubText}>
    Additionally, I have worked with numerous npm modules to incorporate additional functionalities and features into my projects.
  </p>
  <p className={tw.heroSubText}>
    Furthermore, I have graduated from university with honors, majoring in <span className="text-blue-500">Information Technology and Computing</span> and earning a Bachelor of Science in <span className="text-blue-500">Computer Science</span>.
  </p> */}
    </section>
  );
};

export default Hero;
