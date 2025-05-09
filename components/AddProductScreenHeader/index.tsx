import { Button, ButtonIcon } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { ArrowLeftIcon } from "@/components/ui/icon";
import { useRouter } from "expo-router";
import React from "react";

interface AddProductScreenHeader {
  id: string;
}

const AddProductScreenHeader = ({ id }: AddProductScreenHeader) => {
  const screenTitle = id === "new" ? "Add Product" : `#${id}`;
  const router = useRouter();

  return (
    <HStack className="justify-between">
      <Button onPress={() => router.back()}>
        <ButtonIcon as={ArrowLeftIcon} />
      </Button>
      <Heading size="2xl">{screenTitle}</Heading>
    </HStack>
  );
};

export default AddProductScreenHeader;
