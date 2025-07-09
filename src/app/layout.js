
import "./globals.css";

export const metadata = {
  title: "Pupilo",
  description: "Where Every Child can Code, Create and Thrive.",
  metadataBase: new URL("https://pupilo-omega.vercel.app/"),
  openGraph: {
    type: "website",
    title: "Pupilo",
    description: "Where Every Child can Code, Create and Thrive.",
    images: "/assets/meta.webp",
  },
  twitter: {
    title: "Pupilo",
    description: "Where Every Child can Code, Create and Thrive.",
    images: ["/assets/meta.webp"],
  },
  alternates: {
    canonical: "https://pupilo-omega.vercel.app/",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
