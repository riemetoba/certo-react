const Container = ({ children, className }) => {
  return (
    <div className={`lg:max-w-[1320px] lg:m-auto ${className}`}>{children}</div>
  );
};

export default Container;
