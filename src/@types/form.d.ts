export type TOrderForm = {
  submitOrder: (side: TSide, { price, amount }: TOrder) => void;
};

export type TOrderFormData = {
  side: TSide;
} & TOrder;
