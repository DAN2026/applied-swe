import { Navbar } from "@/components/general/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <Navbar></Navbar>
        {children}
    </div>
  );
}
