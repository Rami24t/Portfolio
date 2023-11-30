export const ServiceCard = ({ title, icon }) => (
  <div className="green-pink-gradient p-[1px] rounded-[31px] shadow-card w-[120px]">
    <div className="bg-tertiary rounded-[7px] py-2 px-6 min-h-[140px] flex justify-evenly items-center flex-col">
      <img
        src={icon}
        alt="web-development"
        className="w-12 h-12 object-contain"
        loading="lazy"
      />
      <h3 className="text-white text-[14px] font-bold text-center">{title}</h3>
    </div>
  </div>
);
