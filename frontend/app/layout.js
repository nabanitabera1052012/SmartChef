import { Inter } from "next/font/google";
import Header from "../components/Header";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });



export const metadata = {
  title: "Ai receipe platform",
  description: "",
};


export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: "neobrutalism",
        elements: {
          footerAction__securedBy: "hidden",
        },
      }}
    >
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className={`${inter.className}`}>
        <Header />
        <main className="min-h-screen">
          {children}

        </main>
        <footer className="py-8 px-4 border-t">
        <div className="max-w-6xl mx-auto flex justify-center items-center">
          <p className="text-stone-500 text-sm">
            Made with 💗 by Nabanita

          </p>
        </div>

        </footer>
        

      </body>
    </html>
    </ClerkProvider>
  );
}
