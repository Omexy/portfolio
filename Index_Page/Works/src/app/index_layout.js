import './globals.css';

export const metadata = {
  title: 'Portfolio',
  description: 'Designed by Daniel Game',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
