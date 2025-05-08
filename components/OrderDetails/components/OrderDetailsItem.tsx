import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Image } from "@/components/ui/image";
import { formatNumber } from "@/lib/util";
import React from "react";
import { OrderDetailsItemProps } from "../types";

const OrderDetailsItem = ({
  name,
  price,
  qty,
  image,
}: OrderDetailsItemProps) => {
  return (
    <HStack className="w-full h-24 border border-gray-200 rounded-xl items-center p-2 justify-between pl-2 pr-6">
      <HStack className="items-center" space="xl">
        <Box className="rounded-xl overflow-hidden">
          <Image alt={name} source={{ uri: image }} size="md" />
        </Box>
        <HStack space="lg">
          <Heading>{name}</Heading>
          <Heading size="lg">x{qty}</Heading>
        </HStack>
      </HStack>
      <Box>
        <Heading className="text-primary-500">E£{formatNumber(price)}</Heading>
      </Box>
    </HStack>
  );
};

export default OrderDetailsItem;
