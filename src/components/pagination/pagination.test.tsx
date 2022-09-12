import { render, screen } from "@testing-library/react";
import Pagination from "./pagination";

describe("Pagination", () => {
  it("should render", () => {
    render(
      <Pagination
        postsPerPage={1}
        totalPosts={20}
        currentPage={2}
        paginate={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    expect(screen.getByTestId("pagination")).toBeInTheDocument();
  });
});
