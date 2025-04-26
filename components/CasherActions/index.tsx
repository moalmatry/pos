import { Divider } from "@/components/ui/divider";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import React from "react";
import { CasherActionsProps } from "./types";
import { Button, ButtonGroup, ButtonText } from "../ui/button";
import { Box } from "../ui/box";

const CasherActions = ({
  subtotal,
  total,
  discount,
  onCheckout,
  onClear,
}: CasherActionsProps) => {
  return (
    <VStack className="flex-[3] px-2 pb-4">
      <HStack className="justify-between">
        <Text className="text-gray-500">Subtotal</Text>
        <Text className="text-gray-500">E£{subtotal}</Text>
      </HStack>
      <HStack className="justify-between">
        <Text className="text-gray-500">Discount</Text>
        <Text className="text-gray-500">E£{discount}</Text>
      </HStack>
      <Divider className="my-2" />
      <HStack className="justify-between">
        <Text className="font-bold text-lg">Total</Text>
        <Text className="font-bold text-lg">E£{total}</Text>
      </HStack>
      <Box className="flex-1" />
      <VStack>
        <ButtonGroup>
          <Button size="md" variant="solid" action="negative">
            <ButtonText>Clear All!</ButtonText>
          </Button>
          <Button size="md" variant="solid" action="positive">
            <ButtonText>Checkout</ButtonText>
          </Button>
        </ButtonGroup>
      </VStack>
    </VStack>
  );
};

export default CasherActions;
