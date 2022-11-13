import Navbar from "./Navbar";
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className=" flex flex-row">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
