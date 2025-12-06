import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import Navbar from "../general/LandingNavbar";

export default async function NavbarWrapper() {
  const session = await getServerSession(authOptions);

  return <Navbar session={session} />;
}
