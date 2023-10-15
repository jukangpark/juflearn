import { useSession } from "next-auth/react";

const mockUseSession = useSession as jest.MockedFunction<typeof useSession>;

export default mockUseSession;
