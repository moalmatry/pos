import { Box } from "@/components/ui/box";
import {
  TableHeader as GlueStackHeader,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import { Text } from "@/components/ui/text";
import React from "react";

const TableHeader = () => {
  return (
    <GlueStackHeader>
      <TableRow className="h-20">
        <TableHead className="border-0 border-r border-solid border-outline-200 ">
          <Box className="w-full h-full justify-center items-center">
            <Text className="text-gray-400 font-bold">Product</Text>
          </Box>
        </TableHead>
        <TableHead className="border-0 border-r border-solid border-outline-200 ">
          <Box className="w-full h-full justify-center items-center">
            <Text className="text-gray-400 font-bold">Category</Text>
          </Box>
        </TableHead>
        <TableHead className="border-0 border-r border-solid border-outline-200 ">
          <Box className="w-full h-full justify-center items-center">
            <Text className="text-gray-400 font-bold">Status</Text>
          </Box>
        </TableHead>
        <TableHead className="border-0 border-r border-solid border-outline-200 ">
          <Box className="w-full h-full justify-center items-center">
            <Text className="text-gray-400 font-bold">Product Id</Text>
          </Box>
        </TableHead>
        <TableHead className="border-0 border-r border-solid border-outline-200 ">
          <Box className="w-full h-full justify-center items-center">
            <Text className="text-gray-400 font-bold">Quantity</Text>
          </Box>
        </TableHead>
        <TableHead className="border-0 border-r border-solid border-outline-200 ">
          <Box className="w-full h-full justify-center items-center">
            <Text className="text-gray-400 font-bold">Price</Text>
          </Box>
        </TableHead>
        <TableHead className="border-0 border-r border-solid border-outline-200">
          <Box className="w-full h-full justify-center items-center">
            <Text className="text-gray-400 font-bold">Actions</Text>
          </Box>
        </TableHead>
      </TableRow>
    </GlueStackHeader>
  );
};

export default TableHeader;
