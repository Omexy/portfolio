export const metadata = {
  title: 'Portfolio',
  description: 'Daniel Game Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
