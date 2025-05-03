import CustomInput from "@/components/CustomInput";
import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { AlertCircleIcon, AtSignIcon, LockIcon } from "@/components/ui/icon";
import { VStack } from "@/components/ui/vstack";
import { Link } from "expo-router";
import React from "react";

const LoginForm = () => {
  return (
    <VStack className="w-full px-36 gap-16">
      <Heading size="3xl">Welcome Back!</Heading>
      <VStack className="gap-8">
        <CustomInput
          isRequired
          type="text"
          isInvalid={false}
          icon={AtSignIcon}
          errorIcon={AlertCircleIcon}
          errorMessage="Please enter valid email"
          value=""
          placeholder="Email"
          onChangeText={() => {}}
        />
        <CustomInput
          isRequired
          type="text"
          isInvalid={false}
          icon={LockIcon}
          errorIcon={AlertCircleIcon}
          errorMessage="Please enter valid password"
          value=""
          placeholder="Password"
          onChangeText={() => {}}
        />
        <Link
          className="self-end text-primary-500 font-bold text-lg"
          href="/forget-password"
        >
          Forgot Password?
        </Link>
      </VStack>
      <Button
        // className="w-full mt-4"
        size="full"
        onPress={() => alert("working")}
      >
        <ButtonText size="xl">Login</ButtonText>
      </Button>
    </VStack>
  );
};

export default LoginForm;
