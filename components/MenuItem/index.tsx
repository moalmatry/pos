import React from "react";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Image } from "@/components/ui/image";
import { MenuItemProps } from "./types";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Heading } from "@/components/ui/heading";
import { formatNumber } from "@/lib/util";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { TouchableOpacity } from "react-native";
import { AddIcon } from "@/components/ui/icon";

const MenuItem = ({ name, price, description, image }: MenuItemProps) => {
  return (
    <VStack className="h-[367] w-[277] border border-gray-200 rounded-lg m-2 p-3 items-center gap-3">
      <Box className="h-[180] w-[247] relative overflow-hidden rounded-lg">
        <Image
          className="aspect-[247/180]"
          alt="Logo"
          size="full"
          source={{ uri: image }}
        />
      </Box>
      <VStack>
        <HStack className="w-full">
          <Heading size="lg">{name}</Heading>
          <Heading size="xl" className="text-primary-500 ml-auto">
            E£{formatNumber(price)}
          </Heading>
        </HStack>
        <Box>
          {description && <Text className="text-gray-500">{description}</Text>}
        </Box>
      </VStack>
      <Box className="flex-1" />
      <HStack className="w-full justify-between">
        <TouchableOpacity>
          {/* <ButtonText>Hello World!</ButtonText> */}
        </TouchableOpacity>

        <Button size="lg" className="p-2" variant="solid" action="primary">
          <ButtonIcon as={AddIcon} />
          <ButtonText>Add Product</ButtonText>
        </Button>
      </HStack>
    </VStack>
  );
};

export default MenuItem;
