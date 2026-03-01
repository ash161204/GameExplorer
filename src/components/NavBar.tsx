import { HStack, Image } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ui/color-mode";
import logo from "../assets/logo.svg";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image src={logo} boxSize={"60px"}></Image>
      <SearchInput></SearchInput>
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
