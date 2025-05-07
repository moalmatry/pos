export interface OrderItemProps {
  totalPrice: number;
  id: number;
  status: "Paid" | "Unpaid";
  active?: boolean;
  onPress?: () => void;
}
