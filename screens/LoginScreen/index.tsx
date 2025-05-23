import LoginForm from "@/components/LoginForm";
import { Box } from "@/components/ui/box";
import { Divider } from "@/components/ui/divider";
import { HStack } from "@/components/ui/hstack";
import { Image } from "@/components/ui/image";
import images from "@/constants/images";
import React from "react";

const LoginScreen = () => {
  return (
    <HStack className="flex-1">
      <Box className="flex-1 items-center justify-center">
        <Image size="4xl" alt="invest" source={images.investImg} />
      </Box>
      <Divider orientation="vertical" />
      <Box className="flex-1 items-center justify-center">
        <LoginForm />
      </Box>
    </HStack>
  );
};

export default LoginScreen;
