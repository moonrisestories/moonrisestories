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
      <body>{children}</body>
    </html>
  );
}
