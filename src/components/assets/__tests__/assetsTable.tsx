import { AssetTable } from "components";
import { render } from "@testing-library/react";

describe("Asset Table", () => {
  it("Should render it correctly", async () => {
    const renderResult = render(
      <div>
        <AssetTable
          assetList={[
            {
              price: "10",
              amount: "10",
            },
          ]}
          type="sell"
        />
      </div>
    );
    expect(renderResult).toMatchSnapshot();
  });
});
