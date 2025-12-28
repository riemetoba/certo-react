const Button = ({children, className}) => {
  return (
    <button className={`duration-300 font-Inter font-extrabold rounded-[42px] cursor-pointer bg-transparent border-2 ${className}`}>{children}</button>
  )
}

export default Button