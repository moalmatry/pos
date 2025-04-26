import CasherActions from "@/components//CasherActions";
import ChaserItem from "@/components/CasherItem";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import { casher } from "@/data";
import React from "react";
import { FlatList } from "react-native";

const Casher = () => {
  return (
    <VStack space="lg" className="flex-[2] px-2">
      <FlatList
        className="flex-[7]"
        ListHeaderComponent={<Heading className="mb-4">Casher</Heading>}
        showsVerticalScrollIndicator={false}
        data={casher}
        renderItem={({ item: { name, id, price, image, qty } }) => (
          <ChaserItem
            name={name}
            id={id}
            price={price}
            image={image}
            qty={qty}
          />
        )}
      />
      <CasherActions subtotal={20} total={25} tax={5} discount={0} />
    </VStack>
  );
};

export default Casher;
