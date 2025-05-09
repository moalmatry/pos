import AddProductForm from "@/components/AddProductForm";
import AddProductScreenHeader from "@/components/AddProductScreenHeader";
import { VStack } from "@/components/ui/vstack";
import React from "react";

interface AddProductScreenProps {
  id: string;
}

const AddProductScreen = ({ id }: AddProductScreenProps) => {
  return (
    <VStack space="lg" className="m-6 flex-1">
      <AddProductScreenHeader id={id} />
      <AddProductForm />
    </VStack>
  );
};

export default AddProductScreen;
