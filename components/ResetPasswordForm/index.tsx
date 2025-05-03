import CustomInput from "@/components/CustomInput";
import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { AlertCircleIcon, AtSignIcon, LockIcon } from "@/components/ui/icon";
import { VStack } from "@/components/ui/vstack";
import { useRouter } from "expo-router";
import React from "react";

const ResetPasswordForm = () => {
  const router = useRouter();
  const submitHandler = () => {
    router.push("/(pos)");
  };
  return (
    <VStack className="w-full px-36 gap-16">
      <VStack>
        <Heading size="3xl">Reset Password</Heading>
        <Heading size="lg">
          A code has been sent to you please check your email!
        </Heading>
      </VStack>
      <VStack className="gap-8">
        <CustomInput
          isRequired
          type="text"
          isInvalid={false}
          icon={AtSignIcon}
          errorIcon={AlertCircleIcon}
          errorMessage="Please enter valid verification code"
          value=""
          placeholder="Verification Code"
          onChangeText={() => {}}
        />
        <CustomInput
          isRequired
          type="text"
          isInvalid={false}
          icon={LockIcon}
          errorIcon={AlertCircleIcon}
          errorMessage="Please enter valid email"
          value=""
          placeholder="Password"
          onChangeText={() => {}}
        />
        <CustomInput
          isRequired
          type="text"
          isInvalid={false}
          icon={LockIcon}
          errorIcon={AlertCircleIcon}
          errorMessage="Please enter valid email"
          value=""
          placeholder="Confirm Password"
          onChangeText={() => {}}
        />
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

export default ResetPasswordForm;
