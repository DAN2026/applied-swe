import { Role } from "@prisma/client";
import NextAuth, {DefaultSession, DefaultUser} from "next-auth";

declare module "next-auth" {
    interface User extends DefaultUser {
        id?: number;
        name?: string;
        email?: string;
        role?: Role | string;
        staffId?: number;
        adminId?: number;
        charityId?: number;
        needsOnboarding?: boolean;
    }

    interface Session {
        user: {
            id?: number;
            name?: string;
            email?: string;
            role?: Role | string;
            staffId?: number;
            adminId?: number;
            charityId?: number;
            needsOnboarding?: boolean;
        } & DefaultSession["user"]
    }
}

declare module "next-auth/jwt"{
    interface JWT {
        id?: number;
        name?: string;
        email?: string;
        role?: Role | string;
        staffId?: number;
        adminId?: number;
        charityId?: number;
        needsOnboarding?: boolean;
    }
}