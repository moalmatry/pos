import React from "react";
import { Box } from "../ui/box";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "tailwindcss/colors";
import { Link, usePathname } from "expo-router";

const RailTabs = () => {
  const pathname = usePathname();

  return (
    <Box className="flex-[1] justify-between items-center py-24">
      <Box className="items-center justify-center">
        <Link href="/">
          <FontAwesome5
            name="home"
            size={30}
            color={pathname === "/" ? colors.yellow[500] : colors.gray[600]}
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
                ? colors.yellow[500]
                : colors.gray[600]
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
              pathname === "/products" ? colors.yellow[500] : colors.gray[600]
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
              pathname === "/settings" ? colors.yellow[500] : colors.gray[600]
            }
          />
        </Link>
      </Box>
    </Box>
  );
};

export default RailTabs;
