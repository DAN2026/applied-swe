import Navbar from "@/components/general/LandingNavbar";
import NavbarWrapper from "@/components/wrappers/NavbarWrapper";
import prisma from "@/lib/prisma";

export default function Landing(){
    return (
    <div className="h-[2000px]">
        <NavbarWrapper></NavbarWrapper>
    </div>
    )
}