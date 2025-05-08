import TableHeader from "@/components/CustomTable/TableHeader";
import TableRow from "@/components/CustomTable/TableRow";
import ProductsHeader from "@/components/ProductsHeader";
import { Box } from "@/components/ui/box";
import { Table, TableBody } from "@/components/ui/table";
import { VStack } from "@/components/ui/vstack";
import { productsTable } from "@/data";
import React from "react";

const ProductsScreen = () => {
  return (
    <VStack space="lg" className="m-6">
      <ProductsHeader />
      <Box className="border border-solid border-outline-200 rounded-lg overflow-hidden ">
        <Table className="w-full">
          <TableHeader />
          {productsTable.map((item) => (
            <TableBody className="w-full" key={item.id}>
              <TableRow
                product={<>{/* <TableRowItem /> */}</>}
                category="Food"
                price={40}
                productId="1222"
                qty={30}
                status="in stock"
              />
            </TableBody>
          ))}
        </Table>
      </Box>
    </VStack>
  );
};

export default ProductsScreen;
