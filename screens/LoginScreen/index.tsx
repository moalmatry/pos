import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Image } from "@/components/ui/image";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import images from "@/constants/images";
import React, { useState } from "react";

const LoginScreen = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };
  return (
    <HStack className="flex-1 ">
      <Box className="flex-1 items-center justify-center">
        <Image size="4xl" alt="invest" source={images.investImg} />
      </Box>
      <Divider orientation="vertical" />
      <Box className="flex-1 items-center justify-center px-20">
        <FormControl className="w-full">
          <VStack space="xl">
            <Heading className="text-typography-900">Login</Heading>
            <VStack space="xs">
              <Text className="text-typography-500">Email</Text>
              <Input className="min-w-[250px]">
                <InputField type="text" />
              </Input>
            </VStack>
            <VStack space="xs">
              <Text className="text-typography-500">Password</Text>
              <Input className="text-center">
                <InputField type={showPassword ? "text" : "password"} />
                <InputSlot className="pr-3" onPress={handleState}></InputSlot>
              </Input>
            </VStack>
            <Button className="ml-auto" onPress={() => {}}>
              <ButtonText className="text-typography-0">Save</ButtonText>
            </Button>
          </VStack>
        </FormControl>
      </Box>
    </HStack>
  );
};

export default LoginScreen;
