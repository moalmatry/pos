import CustomInput from "@/components/CustomInput";
import CustomSelect from "@/components/CustomSelect";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { AlertCircleIcon } from "@/components/ui/icon";
import { VStack } from "@/components/ui/vstack";
import React from "react";
import { Button, ButtonText } from "@/components/ui/button";
import { Box } from "@/components/ui/box";

const AddProductForm = () => {
  return (
    <VStack
      space="2xl"
      className="border border-gray-200 flex-1 rounded-lg p-6"
    >
      <HStack className="w-full gap-4">
        <VStack space="sm" className="flex-1">
          <Heading>Product Name</Heading>
          <CustomInput
            isRequired
            type="text"
            isInvalid={false}
            errorIcon={AlertCircleIcon}
            errorMessage="Please enter valid name"
            value=""
            placeholder="name"
            onChangeText={() => {}}
          />
        </VStack>
        <VStack space="sm" className="flex-1">
          <Heading>Product Unit</Heading>
          <CustomInput
            isRequired
            type="text"
            isInvalid={false}
            errorIcon={AlertCircleIcon}
            errorMessage="Please enter valid unit"
            value=""
            placeholder="unit ex kg , gram etc.."
            onChangeText={() => {}}
          />
        </VStack>
        <VStack space="sm" className="flex-1">
          <Heading>Category</Heading>
          <CustomSelect
            onChange={() => {}}
            placeHolder="Select Category"
            selectOptions={[
              { label: "Active", value: "active" },
              { label: "Inactive", value: "inactive" },
            ]}
          />
        </VStack>
      </HStack>

      <HStack className="w-full gap-4">
        <VStack space="sm" className="flex-1">
          <Heading>Price</Heading>
          <CustomInput
            isRequired
            type="text"
            isInvalid={false}
            errorIcon={AlertCircleIcon}
            errorMessage="Please enter price"
            value=""
            placeholder="price"
            onChangeText={() => {}}
          />
        </VStack>
        <VStack space="sm" className="flex-1">
          <Heading>Unit</Heading>
          <CustomInput
            isRequired
            type="text"
            isInvalid={false}
            errorIcon={AlertCircleIcon}
            errorMessage="Please enter valid unit"
            value=""
            placeholder="unit ex kg , gram etc.."
            onChangeText={() => {}}
          />
        </VStack>
        <VStack space="sm" className="flex-1">
          <Heading>Status</Heading>
          <CustomSelect
            onChange={() => {}}
            placeHolder="Select Status"
            selectOptions={[
              { label: "Active", value: "active" },
              { label: "Inactive", value: "inactive" },
            ]}
          />
        </VStack>
      </HStack>

      <HStack className="w-full gap-4">
        <VStack space="sm" className="flex-1">
          <Heading>Image Link</Heading>
          <CustomInput
            isRequired
            type="text"
            isInvalid={false}
            errorIcon={AlertCircleIcon}
            errorMessage="Please enter image link"
            value=""
            placeholder="image link"
            onChangeText={() => {}}
          />
        </VStack>

        <VStack space="sm" className="flex-1">
          <Heading>Branches</Heading>
          <CustomSelect
            onChange={() => {}}
            placeHolder="Select Branch"
            selectOptions={[{ label: "Maadi", value: "maadi" }]}
          />
        </VStack>
      </HStack>

      <Box className="flex-1" />
      <Button size="xl">
        <ButtonText>Save Product</ButtonText>
      </Button>
    </VStack>
  );
};

export default AddProductForm;
