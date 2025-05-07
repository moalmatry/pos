import AllOrders from "@/components/AllOrders";
import OrderDetails from "@/components/OrderDetails";
import { HStack } from "@/components/ui/hstack";
import React from "react";

const OrdersScreens = () => {
  return (
    <HStack className="flex-1 m-6">
      <AllOrders />
      <OrderDetails />
    </HStack>
  );
};

export default OrdersScreens;
