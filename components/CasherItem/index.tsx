import { Box } from "@/components/ui/box";
import { HStack } from "@/components/ui/hstack";
import { AddIcon, Icon, RemoveIcon } from "@/components/ui/icon";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { formatNumber } from "@/lib/util";
import React from "react";
import { TouchableOpacity } from "react-native";
import { VStack } from "../ui/vstack";
import { ChaserItemProps } from "./types";

const ChaserItem = ({ name, price, qty, image }: ChaserItemProps) => {
  return (
    <HStack
      space="sm"
      className="w-80 h-[80] border-gray-200 border rounded-lg my-2 px-1 justify-center"
    >
      <Box className="overflow-hidden rounded-lg relative">
        <Image alt={name} size="md" source={{ uri: image }} />
      </Box>
      <VStack className="h-full flex-1 justify-between px-2">
        <HStack className="justify-between">
          <Text className="font-bold">{name}</Text>
          <Text className="text-lg font-bold">E£{formatNumber(price)}</Text>
        </HStack>
        <HStack className="justify-between">
          <Text className="font-bold text-gray-500">Unit</Text>
          <HStack space="sm" className="items-center">
            <TouchableOpacity className="bg-gray-200 w-8 h-8 justify-center items-center rounded-lg">
              <Icon as={RemoveIcon} className="text-gray-500" />
            </TouchableOpacity>
            <Text className="font-bold">{qty}</Text>
            <TouchableOpacity className="bg-primary-500 w-8 h-8 justify-center items-center rounded-lg">
              <Icon as={AddIcon} className="text-white" />
            </TouchableOpacity>
          </HStack>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default ChaserItem;
