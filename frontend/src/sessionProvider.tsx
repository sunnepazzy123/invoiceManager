import { getSessionUser } from "@/middleware";
import { SessionProvider } from "./sessionContext";

export default async function ServerSessionProvider({ children }: { children: React.ReactNode }) {
  const session = await getSessionUser();
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
