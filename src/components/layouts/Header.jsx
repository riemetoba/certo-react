import { Link } from "react-router-dom";
import Button from "../Button";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "/src/assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-4 bg-[#E7EFFA] relative px-2 md:px-0">
      <Container>
        <Flex className="justify-between items-center">
          {/* Logo */}
          <Link to="/" className="w-[120px] md:w-auto">
            <Image src={logo} />
          </Link>

          {/* Desktop Menu_hidden on mobile */}
          <ul className="hidden md:flex gap-x-10 font-extrabold text-common">
            <li className="cursor-pointer">iPhone</li>
            <li className="cursor-pointer">Android</li>
            <li className="cursor-pointer">Help</li>
            <li className="cursor-pointer">Company</li>
          </ul>

          {/* Mobile icon */}
          <div className="flex items-center gap-4">
            <Button className="hidden md:block py-2 px-4 hover:bg-[#4335DE] hover:text-white">
              Sign in
            </Button>
            <GiHamburgerMenu
              className="md:hidden text-2xl cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </Flex>
        {/* ===============>  */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white p-5 shadow-md md:hidden text-center z-50">
            <ul className="flex flex-col gap-y-4 font-bold text-common">
              <li>iPhone</li>
              <li>Android</li>
              <li>Help</li>
              <li>Company</li>
              <li>
                <Button className="px-6 py-2 hover:bg-[#4335DE] hover:text-white">
                  Sign in
                </Button>
              </li>
            </ul>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
