export interface TableRowProps {
  product: React.ReactNode;
  status: "in stock" | "out of stock";
  category: string;
  productId: string;
  qty: number;
  price: number;
  onEdit?: () => void;
  onDelete?: () => void;
}
