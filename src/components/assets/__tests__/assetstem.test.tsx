import { AssetItem } from "components";
import { Table, TableBody } from "@material-ui/core";
import { render } from "@testing-library/react";

describe("Asset Item", () => {
  it("Should render it correctly", async () => {
    const renderResult = render(
      <div>
        <Table>
          <TableBody>
            <AssetItem
              asset={{
                price: "10",
                amount: "10",
              }}
              type="sell"
            />
          </TableBody>
        </Table>
      </div>
    );
    expect(renderResult).toMatchSnapshot();
  });
});
