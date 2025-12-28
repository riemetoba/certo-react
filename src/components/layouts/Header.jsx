import { Link } from "react-router-dom";
import Button from "../Button";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "/src/assets/logo.png";
import { FaAngleDown } from "react-icons/fa";

const Header = () => {
  return (
    <div className="py-4 bg-[#E7EFFA]">
      <Container>
        <Flex>
          <div className="w-[50%]">
            <Link to={"/"}>
              <Image src={logo} />
            </Link>
          </div>
          <div className="w-[40%]">
            <ul className="flex gap-x-10">
              <li className="text-[19px] text-common font-Inter font-extrabold">
                iPhone
              </li>
              <li className="text-[19px] text-common font-Inter font-extrabold">
                Android
              </li>
              <li className="text-[19px] text-common font-Inter font-extrabold">
                Help
              </li>
              <li className="text-[19px] text-common font-Inter font-extrabold flex items-center gap-3">
                Company
                <span>
                  <FaAngleDown />
                </span>
              </li>
            </ul>
          </div>
          <div className="">
            <Button className={'py-2 px-4 hover:border-[#4335DE] hover:text-white hover:bg-[#4335DE]'}>Sign in</Button>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
