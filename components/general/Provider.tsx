'use client';
import { SessionProvider } from 'next-auth/react';
import Navbar from './LandingNavbar';
export default function Provider({session, children}:any){
return(
    <SessionProvider session={session}>{children}
</SessionProvider>
)
}