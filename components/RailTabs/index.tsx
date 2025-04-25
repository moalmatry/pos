import React from "react";
import { Box } from "@/components/ui/box";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "tailwindcss/colors";
import { Link, usePathname } from "expo-router";

const RailTabs = () => {
  const pathname = usePathname();

  return (
    <Box className="flex-[1] border-gray-200 border-r-2">
      <Box className="items-center justify-center flex-[1] border-b-2 border-gray-200 mb-4">
        <FontAwesome5 name="react" size={35} color={colors.orange[500]} />
      </Box>
      <Box className="justify-around items-center flex-[7] pb-24">
        <Box className="items-center justify-center">
          <Link href="/">
            <FontAwesome5
              name="home"
              size={30}
              color={pathname === "/" ? colors.orange[500] : colors.gray[500]}
            />
          </Link>
        </Box>
        <Box className="items-center justify-center">
          <Link href="/manager-dashboard">
            <AntDesign
              name="appstore1"
              size={30}
              color={
                pathname === "/manager-dashboard"
                  ? colors.orange[500]
                  : colors.gray[500]
              }
            />
          </Link>
        </Box>
        <Box className="items-center justify-center">
          <Link href="/products">
            <MaterialCommunityIcons
              name="package"
              size={30}
              color={
                pathname === "/products" ? colors.orange[500] : colors.gray[500]
              }
            />
          </Link>
        </Box>
        <Box className="items-center justify-center">
          <Link href="/settings">
            <Ionicons
              name="settings-sharp"
              size={30}
              color={
                pathname === "/settings" ? colors.orange[500] : colors.gray[500]
              }
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default RailTabs;
