import { render } from "@testing-library/react";
import ToggleThemeButton from "./ToggleThemeButton";

describe("ToggleThemeButton", () => {
  it("should render without errors", () => {
    const { getByRole } = render(<ToggleThemeButton />);
    const button = getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
