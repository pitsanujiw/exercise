import { useEffect, useState } from "react";
import { TSide } from "@types";
import { PriceDirection, DURATION } from "constant";

export const useLivePrice = (price: string = "", type: TSide = "sell") => {
  const [direction, setDirection] = useState<PriceDirection>(
    PriceDirection.VOID
  );
  useEffect(() => {
    setDirection(type === "sell" ? PriceDirection.DOWN : PriceDirection.UP);

    const clearDirectionTimeoutId = setTimeout(
      () => setDirection(PriceDirection.VOID),
      DURATION
    );

    return () => clearTimeout(clearDirectionTimeoutId);
  }, [price, type]);

  return { direction };
}
