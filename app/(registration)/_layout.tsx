import React from "react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const RegistrationLayout = () => {
  return (
    <Stack
      screenLayout={({ children }) => (
        <SafeAreaView className="flex-1 bg-white">{children}</SafeAreaView>
      )}
      screenOptions={{ headerShown: false }}
    />
  );
};

export default RegistrationLayout;
