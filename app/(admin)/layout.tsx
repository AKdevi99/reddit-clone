import type { Metadata } from "next";




export const metadata: Metadata = {
  title: "Reddist Sanity Admin Panel",
  description: "Reddist Sanity Admin Panel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
            <html lang="en">
                <body>
                    {children}
                </body>
            </html>
 

  );
    
}
