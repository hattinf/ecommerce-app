import Header from "@/components/Header";
import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="gEw4y6MmxopZpQLvLxMLDzlnJbOkDE2NTprU1-_r2a0"
        />
      </head>
      <body>
        <main>
          <Header />
          {children}
        </main>

        {/* <SanityLive /> */}
      </body>
    </html>
  );
}
