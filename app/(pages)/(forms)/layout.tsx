import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../api/auth/[...nextauth]/authOptions";

export default async function FormsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await getServerSession(authOptions);

  if (session && !session.user.needsOnboarding) {
    redirect("/dashboard");
  }

  return (<>{children}</>);
}