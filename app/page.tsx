"use client";

import { useEffect } from "react";
import { supabase } from "../lib/supabase";

export default function Home() {
  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    const { data } = await supabase.auth.getUser();

    if (data.user) {
      window.location.replace("/dashboard");
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>MoonRiseStories</h1>
      <p>Welcome to the platform</p>
    </div>
  );
}
