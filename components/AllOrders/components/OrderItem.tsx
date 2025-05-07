import React from "react";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { cn, formatNumber } from "@/lib/util";
import { OrderItemProps } from "../types";
import { TouchableOpacity } from "react-native";

const OrderItem = ({ totalPrice, id, onPress, active }: OrderItemProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={cn(
        "w-full bg-gray-100 h-32 rounded-xl px-6 justify-center py-4",
        active && "bg-primary-500"
      )}
    >
      <VStack className="gap-3">
        <HStack className="justify-between">
          <Text
            className={cn("text-xl font-extrabold", active && "text-white")}
          >
            Order #{id}
          </Text>
          <Text
            className={cn(
              "font-semibold text-green-600",
              active && "text-white"
            )}
          >
            Paid
          </Text>
        </HStack>
        <HStack className="justify-between items-center">
          <Text className={cn("text-gray-500", active && "text-white")}>
            Total Amount
          </Text>
          <Text
            className={cn("text-2xl font-extrabold", active && "text-white")}
          >
            E£{formatNumber(totalPrice)}
          </Text>
        </HStack>
      </VStack>
    </TouchableOpacity>
  );
};

export default OrderItem;
