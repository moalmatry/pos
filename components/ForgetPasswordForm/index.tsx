import CustomInput from "@/components/CustomInput";
import { Heading } from "@/components/ui/heading";
import { AlertCircleIcon, AtSignIcon } from "@/components/ui/icon";
import { VStack } from "@/components/ui/vstack";
import { Link, useRouter } from "expo-router";
import React from "react";
import { Button, ButtonText } from "@/components/ui/button";

const ForgetPasswordForm = () => {
  const router = useRouter();

  const submitHandler = () => {
    router.push("/reset-password");
  };

  return (
    <VStack className="w-full px-36 gap-16">
      <VStack>
        <Heading size="3xl">Forget Password</Heading>
        <Heading size="lg">
          Please enter your email and we will send reset code to you
        </Heading>
      </VStack>
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

        <Link
          className="self-end text-primary-500 font-bold text-lg"
          href="/(registration)"
        >
          Signin?
        </Link>
      </VStack>
      <Button
        // className="w-full mt-4"
        size="full"
        onPress={() => submitHandler()}
      >
        <ButtonText size="xl">Continue</ButtonText>
      </Button>
    </VStack>
  );
};

export default ForgetPasswordForm;
