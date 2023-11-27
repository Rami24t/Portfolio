import { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { github } from "../assets";

export const ProjectCard = ({
  name,
  description,
  tags,
  images,
  source_code_link,
  index,
}) => {
  const [src, setSrc] = useState(images[0]);
  useEffect(() => {
    const imgSrcInterval = setTimeout(() => {
      setSrc(src === images[0] ? images[1] : images[0]);
    }, index * 70 + 3000);

    return () => clearTimeout(imgSrcInterval);
  }, [images, index, src]);

  return (
    <Tilt
      options={{
        max: 35,
        scale: 1,
        speed: 350,
      }}
      className="bg-tertiary py-4 px-5 rounded-xl sm:w-[360px] w-full"
    >
      <div
        className="relative w-full h-[230px]"
        onMouseEnter={() => {
          setSrc(src === images[0] ? images[1] : images[0]);
        }}
      >
        <img
          src={src}
          alt="project images"
          className="w-full h-full object-cover rounded-lg"
        />

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-xl flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
    // </motion.div>
  );
};
