import AddProductScreen from "@/screens/AddProductScreen";
import { useLocalSearchParams } from "expo-router";
import React from "react";

const AddProduct = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  console.log(id);
  return <AddProductScreen id={id} />;
};

export default AddProduct;
