import TableHeader from "@/components/CustomTable/TableHeader";
import TableRow from "@/components/CustomTable/TableRow";
import TableRowItem from "@/components/CustomTable/TableRowItem";
import ProductsHeader from "@/components/ProductsHeader";
import { Box } from "@/components/ui/box";
import { Table, TableBody } from "@/components/ui/table";
import { VStack } from "@/components/ui/vstack";
import { productsTable } from "@/data";
import { truncateText } from "@/lib/util";
import { FlashList } from "@shopify/flash-list";
import React from "react";

const ProductsScreen = () => {
  return (
    <VStack space="lg" className="m-6 mb-36">
      <ProductsHeader />
      <Box className="border border-solid border-outline-200 rounded-lg overflow-hidden min-h-full min-w-full">
        <Table className="w-full h-full">
          <TableHeader />
          <TableBody>
            {/* <FlashList
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={productsTable}
              contentContainerClassName="pb-[400px]"
              estimatedItemSize={20}
              // className="mb-[400px]"
              // contentContainerClassName="pb-96"
              renderItem={({ item }) => (
                <TableRow
                  product={
                    <TableRowItem
                      image={item.image}
                      productName={truncateText(item.name, 9)}
                    />
                  }
                  category={item.category as string}
                  price={item.price}
                  productId={item.id as string}
                  qty={20}
                  status="in stock"
                />
              )}
            /> */}
          </TableBody>
        </Table>
      </Box>
    </VStack>
  );
};

export default ProductsScreen;
