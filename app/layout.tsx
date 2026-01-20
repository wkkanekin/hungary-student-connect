import './globals.css'
import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'ハンガリー現役生名鑑（ベータ版）',
  description: 'ハンガリー在住の現役大学生に、60分のオンライン相談ができるプラットフォーム。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen text-slate-900">
        <Header />
        <main className="mx-auto w-[92vw] max-w-6xl py-6">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
