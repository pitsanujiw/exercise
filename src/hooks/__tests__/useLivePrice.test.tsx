import { PriceDirection } from "constant";
import { useLivePrice } from "hooks";
import { renderHook } from "@testing-library/react-hooks";
describe("useLivePrice", () => {
  describe("useLivePrice default", () => {
    it("should be down", () => {
      const { result } = renderHook(() => useLivePrice("10", "sell"));
      expect(result.current.direction).toEqual(PriceDirection.DOWN);
    });

    it("should be up", () => {
      const { result } = renderHook(() => useLivePrice("10", "buy"));
      expect(result.current.direction).toEqual(PriceDirection.UP);
    });
  });
});
