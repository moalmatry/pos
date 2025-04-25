import React from "react";
import MenuHeader from "@/components/MenuHeader";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";

const Menu = () => {
  return (
    <VStack className="flex-[6] border-r border-gray-200 px-4">
      <MenuHeader />
      <Text>Menu</Text>
    </VStack>
  );
};

export default Menu;
