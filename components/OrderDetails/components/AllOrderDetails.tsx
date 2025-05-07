import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { orderDetails as orderDetailsData } from "@/data";
import React from "react";
import OrderDetailsItem from "./OrderDetailsItem";
import { ScrollView } from "react-native";

const AllOrderDetails = () => {
  return (
    <VStack space="lg">
      {/* Order Details Header */}
      <HStack>
        <VStack className="justify-center" space="md">
          <Heading size="xl" className="text-gray-300 font-semibold">
            Order No
          </Heading>
          <Heading size="md">#123343</Heading>
        </VStack>
      </HStack>
      <VStack className="web:h-[90%] h-[76%]">
        <Heading size="xl">Items</Heading>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerClassName="gap-4"
        >
          {orderDetailsData.items.map((item) => (
            <OrderDetailsItem {...item} key={item.id} />
          ))}
        </ScrollView>
      </VStack>
    </VStack>
  );
};

export default AllOrderDetails;
