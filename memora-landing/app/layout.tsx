import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Memora - Lưu giữ ký ức, Kết nối cảm xúc",
  description:
    "Ứng dụng lưu giữ kỷ niệm hàng đầu với giao diện dễ thương, chủ đề pastel SpongeBob. Tạo phòng kỷ niệm, in ảnh và chia sẻ với bạn bè.",
  keywords: "memora, ứng dụng kỷ niệm, lưu giữ ảnh, chia sẻ kỷ niệm, SpongeBob, pastel",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
