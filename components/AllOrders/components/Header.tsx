import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import React from "react";

const Header = () => {
  return (
    <Box className="border-b border-gray-200 p-5">
      <Heading size="xl">All Orders</Heading>
    </Box>
  );
};

export default Header;
