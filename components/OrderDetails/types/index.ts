export interface HeaderProps {
  status: "Paid" | "Unpaid";
}

export interface OrderDetailsItemProps {
  id: number;
  name: string;
  price: number;
  qty: number;
  image: string;
}
