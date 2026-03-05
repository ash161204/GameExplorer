import { HStack, Image } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ui/color-mode";
import logo from "../assets/logo.svg";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Link to={"/"}>
        <Image src={logo} boxSize={"60px"} objectFit={"cover"}></Image>
      </Link>
      <SearchInput></SearchInput>
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
