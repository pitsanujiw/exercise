import { OrderForm } from "components";
import { render } from "@testing-library/react";

describe("OrderForm", () => {
  it("Should render it correctly", async () => {
    const renderResult = render(
      <div>
        <OrderForm submitOrder={() => {}} />
      </div>
    );
    expect(renderResult).toMatchSnapshot();
  });
});
