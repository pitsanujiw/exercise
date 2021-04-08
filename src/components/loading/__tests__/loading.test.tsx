import { LoadingContent } from "components";
import { render } from "@testing-library/react";

describe("Loading", () => {
  it("Should render it correctly", async () => {
    const renderResult = render(
      <div>
        <LoadingContent />
      </div>
    );
    expect(renderResult).toMatchSnapshot();
  });
});
