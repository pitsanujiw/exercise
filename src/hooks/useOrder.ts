import { useEffect } from "react";
import { IRootStore, TOrderBookStream } from "@types";
import { orderBookStream } from "helpers";
import { useDispatch, useSelector } from "react-redux";
import { updateAll } from "modules/orders";

export const useOrder = (): TOrderBookStream => {
  const dispatch = useDispatch();
  const order = useSelector((store: IRootStore) => store.orders);

  useEffect(() => {
    orderBookStream.subscribe((data) => {
      dispatch(updateAll(data));
    });
  }, [dispatch]);

  return {
    sell: order.sell,
    buy: order.buy,
  };
};
