import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import React from "react";
import { HeaderProps } from "../types";

const Header = ({ status }: HeaderProps) => {
  return (
    <HStack className="justify-between">
      <Heading size="xl">Details</Heading>
      <Heading className="text-green-600">{status}</Heading>
    </HStack>
  );
};

export default Header;
