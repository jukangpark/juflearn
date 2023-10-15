import { Session } from "next-auth";

const updateSessionMock = (data?: any): Promise<Session | null> => {
  return Promise.resolve({
    user: {
      name: "John Doe",
      email: "john.doe@example.com",
      image: "https://example.com/johndoe.jpg",
    },
    expires: "2022-01-01T00:00:00.000Z",
  });
};

export default updateSessionMock;
