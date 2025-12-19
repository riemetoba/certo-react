

const Buttontwo = ({ children, className }) => {
  return (
    <div
      className={`bg-transparent border-2 py-2 px-4 rounded-[42px] font-Inter font-extrabold text-[15px] hover:bg-[#4335DE] hover:border-[#4335DE] hover:text-white cursor-pointer duration-300 ${className}`}
    >
      {children}
    </div>
  );
};

export default Buttontwo;
