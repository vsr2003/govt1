import Footer from "@/app/components/Footer";
import "./globals.css";
import Navbar from "@/app/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {/* <Navbar /> */}
        {children}
        <Footer />

      </body>
    </html>
  );
}
