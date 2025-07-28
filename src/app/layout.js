import "./globals.css";

export const metadata = {
  title: "Pupilo",
  description: "Where Every Child can Code, Create and Thrive.",
  metadataBase: new URL(process.env.PUPILO_HOST_URL),
  openGraph: {
    type: "website",
    title: "Pupilo",
    description: "Where Every Child can Code, Create and Thrive.",
    images: [`${process.env.PUPILO_HOST_URL}/assets/meta.webp`],
  },
  twitter: {
    title: "Pupilo",
    description: "Where Every Child can Code, Create and Thrive.",
    images: [`${process.env.PUPILO_HOST_URL}/assets/meta.webp`],
    url: process.env.PUPILO_HOST_URL,
  },
  alternates: {
    canonical: process.env.PUPILO_HOST_URL,
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
