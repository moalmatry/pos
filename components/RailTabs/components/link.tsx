import { Box } from "@/components/ui/box";
import { Link as ExpoLink, Href } from "expo-router";
import React from "react";

const Link = ({
  href,
  icon,
  replace,
}: {
  href: Href;
  icon: React.ReactElement;
  replace?: boolean;
}) => {
  return (
    <Box className="items-center justify-center">
      <ExpoLink replace={replace} href={href}>
        {icon}
      </ExpoLink>
    </Box>
  );
};

export default Link;
