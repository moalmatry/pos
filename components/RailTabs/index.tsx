import React from "react";
import { Box } from "@/components/ui/box";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "tailwindcss/colors";
import { Link, usePathname } from "expo-router";
import { colors as myColors } from "@/constants/Colors";

const RailTabs = () => {
  const pathname = usePathname();

  return (
    <Box className="flex-[1] border-gray-200 border-r-2">
      <Box className="items-center justify-center flex-[1] border-b-2 border-gray-200 mb-4">
        <FontAwesome5 name="react" size={35} color={myColors.primary[500]} />
      </Box>
      <Box className="justify-around items-center flex-[7] pb-24">
        <Box className="items-center justify-center">
          <Link href="/">
            <FontAwesome5
              name="home"
              size={35}
              color={
                pathname === "/" ? myColors.primary[500] : colors.gray[500]
              }
            />
          </Link>
        </Box>
        <Box className="items-center justify-center">
          <Link href="/manager-dashboard">
            <AntDesign
              name="appstore1"
              size={35}
              color={
                pathname === "/manager-dashboard"
                  ? myColors.primary[500]
                  : colors.gray[500]
              }
            />
          </Link>
        </Box>
        <Box className="items-center justify-center">
          <Link href="/products">
            <MaterialCommunityIcons
              name="package"
              size={35}
              color={
                pathname === "/products"
                  ? myColors.primary[500]
                  : colors.gray[500]
              }
            />
          </Link>
        </Box>
        <Box className="items-center justify-center">
          <Link href="/settings">
            <Ionicons
              name="settings-sharp"
              size={35}
              color={
                pathname === "/settings"
                  ? myColors.primary[500]
                  : colors.gray[500]
              }
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default RailTabs;
