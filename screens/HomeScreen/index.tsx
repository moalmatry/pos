import Casher from "@/components/Casher";
import Menu from "@/components/Menu";
import { HStack } from "@/components/ui/hstack";
import React from "react";

const HomeScreen = () => {
  return (
    <HStack className="flex-1">
      <Menu />
      <Casher />
    </HStack>
  );
};

export default HomeScreen;
