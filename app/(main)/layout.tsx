export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-rows-[5%_95%]">
        <div className="bg-emerald-400 text-3xl shadow-lg text-white font-bold text-center">Navbar</div>
        {children}
    </div>
  );
}
