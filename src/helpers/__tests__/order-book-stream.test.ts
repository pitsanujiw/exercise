import { orderBookStream } from "helpers";

describe("order-book-stream", () => {
  it("should be defined", () => {
    expect(orderBookStream.currentData).toBeDefined();
  });

  it("should return empty user Order", () => {
    expect(orderBookStream.userOrder).toEqual({
      buy: [],
      sell: [],
    });
  });
});
