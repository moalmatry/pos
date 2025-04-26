import { Box } from "@/components/ui/box";
import { colors as myColors } from "@/constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";
import { usePathname } from "expo-router";
import React from "react";
import colors from "tailwindcss/colors";
import Link from "./components/link";
const RailTabs = () => {
  const pathname = usePathname();

  return (
    <Box className="flex-[1] border-gray-200 border-r-2">
      <Box className="items-center justify-center flex-[1] border-b-2 border-gray-200 mb-4">
        <FontAwesome5 name="react" size={35} color={myColors.primary[500]} />
      </Box>
      <Box className="justify-around items-center flex-[7] pb-24">
        <Link
          href="/"
          icon={
            <FontAwesome5
              name="home"
              size={35}
              color={
                pathname === "/" ? myColors.primary[500] : colors.gray[500]
              }
            />
          }
        />

        <Link
          href="/manager-dashboard"
          icon={
            <AntDesign
              name="appstore1"
              size={35}
              color={
                pathname === "/manager-dashboard"
                  ? myColors.primary[500]
                  : colors.gray[500]
              }
            />
          }
        />

        <Link
          href="/products"
          icon={
            <MaterialCommunityIcons
              name="package"
              size={35}
              color={
                pathname === "/products"
                  ? myColors.primary[500]
                  : colors.gray[500]
              }
            />
          }
        />

        <Link
          href="/settings"
          icon={
            <Ionicons
              name="settings-sharp"
              size={35}
              color={
                pathname === "/settings"
                  ? myColors.primary[500]
                  : colors.gray[500]
              }
            />
          }
        />

        <Link
          replace
          href="/(registration)"
          icon={<Octicons name="sign-out" size={35} color={colors.red[500]} />}
        />
      </Box>
    </Box>
  );
};

export default RailTabs;
