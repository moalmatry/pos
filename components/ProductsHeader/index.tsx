import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { AddIcon } from "@/components/ui/icon";
import { useRouter } from "expo-router";
import React from "react";

const ProductsHeader = () => {
  const router = useRouter();
  return (
    <HStack className="justify-between">
      <Heading size="2xl">Products</Heading>
      <Button onPress={() => router.push("/(pos)/add-product/new")} size="xl">
        <ButtonIcon as={AddIcon} />
        <ButtonText>Add Product</ButtonText>
      </Button>
    </HStack>
  );
};

export default ProductsHeader;
