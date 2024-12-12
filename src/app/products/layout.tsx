export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <header>Product</header>
        {children}
        <footer>Featured Product</footer>
      </body>
    </html>
  );
}
