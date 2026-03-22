"use client"

import "./globals.css"
import { ReactNode } from "react"
import { supabase } from "@/lib/supabase/client"

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
