export type TOrderBookStream = {
  buy: TOrder[];
  sell: TOrder[];
};

export type TOrder = {
  price: string;
  amount: string;
};
export type TOrderBookFunction = (orderBook: TOrderBookStream) => void;
export type TSide = "buy" | "sell";
