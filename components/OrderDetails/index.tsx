import { VStack } from "@/components/ui/vstack";
import React from "react";
import AllOrderDetails from "./components/AllOrderDetails";
import Header from "./components/Header";
import { Button, ButtonText } from "../ui/button";
import { Box } from "../ui/box";

const OrderDetails = () => {
  return (
    <VStack className="flex-[3] p-8 gap-4">
      <Header status="Paid" />
      <AllOrderDetails />
      <Box className="flex-1" />
      <Button size="xl">
        <ButtonText>Print Invoice</ButtonText>
      </Button>
    </VStack>
  );
};

export default OrderDetails;
