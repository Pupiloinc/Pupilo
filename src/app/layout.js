import "./globals.css";

const HOST = process.env.PUPILO_HOST_URL;

export const metadata = {
  title: "Pupilo",
  description: "Where Every Child can Code, Create and Thrive.",
  ...(HOST ? { metadataBase: new URL(HOST) } : {}),
  openGraph: {
    type: "website",
    title: "Pupilo",
    description: "Where Every Child can Code, Create and Thrive.",
    images: [HOST ? `${HOST}/assets/meta.webp` : "/assets/meta.webp"],
  },
  twitter: {
    title: "Pupilo",
    description: "Where Every Child can Code, Create and Thrive.",
    images: [HOST ? `${HOST}/assets/meta.webp` : "/assets/meta.webp"],
    ...(HOST ? { url: HOST } : {}),
  },
  ...(HOST ? { alternates: { canonical: HOST } } : {}),
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
