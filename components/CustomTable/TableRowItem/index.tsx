import React from "react";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { Image } from "@/components/ui/image";

export interface TableRowItemProps {
  image: string;
  productName: string;
}

const TableRowItem = ({ image, productName }: TableRowItemProps) => {
  return (
    <HStack className="items-center h-full w-full" space="sm">
      <Image
        source={{
          uri: image,
        }}
        alt="product"
        size="xs"
        className="rounded-lg"
      />
      <Text className="font-bold">{productName}</Text>
    </HStack>
  );
};

export default TableRowItem;
