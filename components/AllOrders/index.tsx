import { VStack } from "@/components/ui/vstack";
import { order } from "@/data";
import React, { useState } from "react";
import { FlatList } from "react-native";
import Header from "./components/Header";
import OrderItem from "./components/OrderItem";

const AllOrders = () => {
  const [selected, setSelected] = useState(0);
  return (
    <VStack className="flex-[2] border border-gray-200">
      <Header />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerClassName="p-5 gap-4"
        data={order}
        renderItem={({ item }) => (
          <OrderItem
            onPress={() => setSelected(item.id as number)}
            active={selected === item.id}
            {...item}
          />
        )}
      />
    </VStack>
  );
};

export default AllOrders;
