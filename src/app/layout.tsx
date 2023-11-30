import type { Metadata } from 'next'
import { GeistSans } from "geist/font/sans";

import './globals.css'
import LazyMotionProvider from '@/components/animation/LazyMotionProvider';
import Header from '@/components/layout/Header';

export const metadata: Metadata = {
  title: 'Kurt Portfolio',
  description: 'Kurt Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <LazyMotionProvider>
        <body><Header/>{children}</body>
      </LazyMotionProvider>
    </html>
  )
}

