import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Escape | Ruang Aman untuk Kesehatan Mental & Produktivitas",
  description:
    "Landing page Escape by PT Neurosains Int Technology ID. Ruang aman untuk kesehatan mental, relaksasi, komunitas, dan produktivitas.",
  applicationName: "Escape",
  icons: {
    icon: "/escape-butterfly-icon.png",
    shortcut: "/escape-butterfly-icon.png",
    apple: "/escape-butterfly-icon.png"
  },
  metadataBase: new URL("https://neurointek.com"),
  openGraph: {
    title: "Escape",
    description: "Ruang untuk kesehatan mental & produktivitas.",
    type: "website",
    images: ["/escape-bg-main.png"]
  }
};

export const viewport: Viewport = {
  themeColor: "#071323",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
