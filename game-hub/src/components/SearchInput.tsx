import { Input, InputGroup } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { useRef } from "react";
import { keyframes } from "@emotion/react";

interface Props {
  onSearch: (search: string) => void;
}

const gradientGlow = keyframes`
  0% { 
    box-shadow: 0 0 10px #00d2ff; 
    border-color: #00d2ff; 
  }
  33% { 
    box-shadow: 0 0 15px #9d50bb; 
    border-color: #9d50bb; 
  }
  66% { 
    box-shadow: 0 0 20px #ff00e6; 
    border-color: #ff00e6; 
  }
  100% { 
    box-shadow: 0 0 10px #00d2ff; 
    border-color: #00d2ff; 
  }
`;

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log("Submitted:", ref.current?.value);
        if (ref.current) onSearch(ref.current.value);
      }}
      style={{ width: "100%" }}
    >
      <InputGroup
        flex="1"
        startElement={<LuSearch color="gray.500" />}
        width="full"
      >
        <Input
          ref={ref}
          placeholder="Search games..."
          variant={"subtle"}
          borderRadius="full"
          bg="bg.subtle"
          _focus={{
            bg: { _light: "black", _dark: "white" },
            color: { _light: "white", _dark: "black" },
            animation: `${gradientGlow} 3s infinite linear`,
            outline: "none",
            _placeholder: { color: "gray.500" },
          }}
          transition="all 0.2s ease-in-out"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
