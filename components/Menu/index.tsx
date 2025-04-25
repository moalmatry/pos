import MenuHeader from "@/components/MenuHeader";
import MenuItem from "@/components/MenuItem";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import { menu } from "@/data";
import React from "react";
import { FlatList } from "react-native";
const Menu = () => {
  return (
    <VStack className="flex-[6] border-r border-gray-200 px-4">
      <VStack>
        <MenuHeader />
        <Heading className="mt-10" size="2xl">
          Menu Items
        </Heading>
      </VStack>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={menu}
        renderItem={({ item: { name, id, image, description, price } }) => (
          <MenuItem
            name={name}
            id={id}
            image={image}
            description={description}
            price={price}
          />
        )}
        numColumns={3}
      />
    </VStack>
  );
};

export default Menu;
