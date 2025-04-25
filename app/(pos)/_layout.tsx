import RailTabs from "@/components/RailTabs";
import { Box } from "@/components/ui/box";
import { Navigator, Slot } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabLayout() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <SafeAreaView className="flex-1 bg-white flex-row">
        <RailTabs />
        <Box className="flex-[15]">
          <Slot />
        </Box>
      </SafeAreaView>
    </Navigator>
  );
}
