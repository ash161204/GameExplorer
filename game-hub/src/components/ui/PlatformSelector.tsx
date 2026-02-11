import usePlatforms, { type Platform } from "@/hooks/usePlatforms";
import { Button, Menu } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

// interface Props {
//   onSelectPlatform: (platform: Platform) => void;
//   selectedPlatform: Platform | null;
// }

const PlatformSelector = () => {
  const { data: platforms, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Platforms
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Menu.Content>
        {platforms.map((platform) => (
          <Menu.Item key={platform.id} value={platform.name}>
            {platform.name}
          </Menu.Item>
        ))}
      </Menu.Content>
    </Menu.Root>
  );
};

export default PlatformSelector;
