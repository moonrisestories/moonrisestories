"use client";

import { useEffect } from "react";
import { supabase } from "../lib/supabase";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    checkSession();
  }, []);

  async function checkSession() {
    const { data } = await supabase.auth.getSession();

    console.log("SESSION:", data.session);
  }

  return (
    <html lang="en">
      <body>

      <nav style={{ padding: "20px", borderBottom: "1px solid #ddd" }}>

        <Link href="/" style={{ marginRight: "20px" }}>
          Home
        </Link>

        <Link href="/discover" style={{ marginRight: "20px" }}>
          Discover
        </Link>

        <Link href="/dashboard">
          Dashboard
        </Link>

      </nav>

      {children}

    </body>
  </html>
);

}