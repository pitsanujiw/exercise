import { Layout } from "layouts";
import { render } from "@testing-library/react";

describe("Asset Table", () => {
  it("Should render it correctly", async () => {
    const renderResult = render(
      <div>
        <Layout>Hello world</Layout>
      </div>
    );
    expect(renderResult).toMatchSnapshot();
  });
});
