import RootLayout from "@/components/RootLayout";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: {
    template: "Arif Group | Services",
    default: "Arif Group | Services",
  },
};

export default function Layout({ children }) {
  return (
    <html
      lang="en"
      className="h-full bg-neutral-950 text-base antialiased text-neutral-100"
    >
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
        <Analytics />
      </body>
    </html>
  );
}
