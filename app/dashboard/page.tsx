"use client";

import { useEffect } from "react";
import { supabase } from "../../lib/supabase";

export default function Dashboard() {
  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    const { data } = await supabase.auth.getUser();

    if (!data.user) {
      window.location.href = "/login";
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Dashboard</h1>
      <p>You are logged in 🎉</p>
    </div>
  );
}
