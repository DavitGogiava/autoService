import Footer from "@/Components/Footer";
import "./globals.css";
import Header from "@/Components/Header";

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Autoservice Company",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
