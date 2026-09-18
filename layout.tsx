import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = { title: 'Vastra — Indian Ethnic Fashion', description: 'Premium Indian ethnic fashion.' }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html> }
