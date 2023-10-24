import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navigation from "./Navigation";
import navigationItems from "@/data/navigationItems";
import mockUseSession from "@/mocks/mockUseSession";
import session from "@/mocks/session";
import updateSessionMock from "@/mocks/updateSessionMock";

jest.mock("next-auth/react");

describe("Navigation", () => {
  beforeEach(() => {
    mockUseSession.mockClear();
  });

  it("should render navigation items", () => {
    mockUseSession.mockReturnValue({
      data: session,
      status: "authenticated",
      update: updateSessionMock,
    });

    render(<Navigation navigationItems={navigationItems} />);

    navigationItems.forEach(item => {
      const link = screen.getByText(item.text);
      expect(link).toBeInTheDocument();
    });
  });

  // 인증이 안된 상태에서는 로그인 버튼이 보여야 함
  it("should show login button when user is not authenticated", () => {
    mockUseSession.mockReturnValue({
      data: null,
      status: "unauthenticated",
      update: updateSessionMock,
    });

    render(<Navigation navigationItems={navigationItems} />);
    expect(mockUseSession).toHaveBeenCalledWith();
    const loginButton = screen.getByText("로그인");
    expect(loginButton).toBeInTheDocument();
  });
});
