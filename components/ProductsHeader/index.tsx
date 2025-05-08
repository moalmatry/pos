import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { AddIcon } from "@/components/ui/icon";
import React from "react";

const ProductsHeader = () => {
  return (
    <HStack className="justify-between">
      <Heading size="2xl">Products</Heading>
      <Button size="xl">
        <ButtonIcon as={AddIcon} />
        <ButtonText>Add Product</ButtonText>
      </Button>
    </HStack>
  );
};

export default ProductsHeader;
