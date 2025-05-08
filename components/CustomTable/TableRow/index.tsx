import React from "react";
import { TableData, TableRow as GlueStackRow } from "@/components/ui/table";
import { TableRowProps } from "../types";
import { cn, formatNumber } from "@/lib/util";
import {
  Button,
  ButtonGroup,
  ButtonIcon,
  ButtonText,
} from "@/components/ui/button";
import { EditIcon, TrashIcon } from "@/components/ui/icon";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";

const TableRow = ({
  product,
  price,
  productId,
  qty,
  onDelete,
  onEdit,
  status,
  category,
}: TableRowProps) => {
  return (
    // <div>
    <GlueStackRow className="w-full h-28">
      <TableData className="border-0 border-r border-solid border-outline-200 font-bold ">
        {product}
      </TableData>
      <TableData className="border-0 border-r border-solid border-outline-200 font-bold">
        <Box className="items-center justify-center h-full w-full">
          <Text className="font-bold text-black text-lg">{category}</Text>
        </Box>
      </TableData>
      <TableData className="border-0 border-r border-solid border-outline-200 font-bold text-center capitalize">
        <Box className="items-center justify-center h-full w-full">
          <Text
            className={cn(
              "font-bold text-black text-lg",
              status === "in stock" ? "text-green-600" : "text-red-600"
            )}
          >
            {status}
          </Text>
        </Box>
      </TableData>
      <TableData className="border-0 border-r border-solid border-outline-200 font-bold text-center">
        <Box className="items-center justify-center h-full w-full">
          <Text className="font-bold text-black text-lg"> {productId}</Text>
        </Box>
      </TableData>
      <TableData className="border-0 border-r border-solid border-outline-200 font-bold text-center">
        <Box className="items-center justify-center h-full w-full">
          <Text className="font-bold text-black text-lg">{qty}</Text>
        </Box>
      </TableData>
      <TableData className="border-0 border-r border-solid border-outline-200 font-bold text-center">
        <Box className="items-center justify-center h-full w-full">
          <Text className="font-bold text-black text-lg">
            E£{formatNumber(price)}
          </Text>
        </Box>
      </TableData>
      <TableData className="border-0 border-r border-solid border-outline-200 font-bold  ">
        <ButtonGroup className="flex-row justify-around items-center  h-full w-full">
          <Button variant="link" onPress={onEdit} action="positive">
            <ButtonIcon as={EditIcon} />
            <ButtonText>Edit</ButtonText>
          </Button>

          <Button variant="link" action="negative" onPress={onDelete}>
            <ButtonIcon as={TrashIcon} />
            <ButtonText>Delete</ButtonText>
          </Button>
        </ButtonGroup>
      </TableData>
    </GlueStackRow>
    // </div>
  );
};

export default TableRow;
