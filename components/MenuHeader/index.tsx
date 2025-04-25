import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import React from "react";
import { TouchableOpacity } from "react-native";
import { SearchIcon } from "@/components/ui/icon";

const MenuHeader = () => {
  return (
    <HStack className="h-14 items-center">
      <HStack className="flex-[3]">
        <Heading size="3xl">Point</Heading>
        <Heading className="text-orange-500" size="3xl">
          sell
        </Heading>
      </HStack>
      <Box className="flex-[9]">
        <Input
          variant="rounded"
          size="xl"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
          className="h-14 border-gray-200 px-6"
        >
          <InputField size="lg" placeholder="Search for anything" />
          <InputSlot>
            <InputIcon size="xl" as={SearchIcon} />
          </InputSlot>
        </Input>
      </Box>

      <Box className="flex-[1] justify-center items-center">
        {/* bg-orange-500 */}
        <TouchableOpacity className="h-14 w-14 justify-center items-center rounded-full">
          {/* <Fontisto name="bell-alt" size={20} color="white" /> */}
        </TouchableOpacity>
      </Box>
    </HStack>
  );
};

export default MenuHeader;
