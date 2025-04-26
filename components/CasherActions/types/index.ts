export interface CasherActionsProps {
  subtotal: number;
  total: number;
  discount: number;
  tax: number;
  onCheckout?: () => void;
  onClear?: () => void;
}
