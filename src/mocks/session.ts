import { Session } from "next-auth";

const session: Session = {
  user: {
    name: "John Doe",
  },
  expires: "2022-01-01T00:00:00.000Z",
};

export default session;
