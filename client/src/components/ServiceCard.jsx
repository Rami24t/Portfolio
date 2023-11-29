import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

export const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className="green-pink-gradient p-[1px] rounded-[62px] shadow-card w-[240px]"
  >
    <div
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary rounded-[7px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
    >
      <img
        src={icon}
        alt="web-development"
        className="w-16 h-16 object-contain" />

      <h3 className="text-white text-[20px] font-bold text-center">
        {title}
      </h3>
    </div>
  </motion.div>
  // </Tilt>
);
