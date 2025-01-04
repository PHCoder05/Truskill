import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "/styles/globals.css";
// import { Head } from "next/document";

export const metadata = {
  title: "TruSkill Academy",
  description: "Truskill a digital courses provider website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
        </head>
      <body className=" text-foreground font-work font-regular">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
