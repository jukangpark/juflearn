import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navigation from "./Navigation";
import navigationItems from "../data/navigationItems";

describe("Navigation.tsx", () => {
  it("should render Navigation component", () => {
    render(<Navigation navigationItems={navigationItems} />);
    const links = navigationItems.map((item) => ({
      text: new RegExp(item.text, "i"),
      href: item.url,
    }));
    links.forEach((link) => {
      const element = screen.getByText(link.text);
      expect(element).toHaveAttribute("href", link.href);
    });
  });
});
