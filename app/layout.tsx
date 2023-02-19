import NavBar from "./components/NavBar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <main className="bg-gray-200 min-h-screen w-full">
          <main className="bg-white container m-auto shadow">
            <NavBar />
            {children}
          </main>
        </main>
      </body>
    </html>
  );
}
