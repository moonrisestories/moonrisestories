"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    console.log("LOGIN RESULT:", data, error);

    if (error) {
      alert(error.message);
      setLoading(false);
      return;
    }

    if (data?.user) {
      alert("Login successful ✅");

      // ✅ CORRECT REDIRECT (NO BUGS)
      router.push("/dashboard");
    } else {
      alert("Login failed: No user returned");
    }

    setLoading(false);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Login</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", margin: "10px auto", padding: "10px" }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", margin: "10px auto", padding: "10px" }}
      />

      <button
        onClick={handleLogin}
        disabled={loading}
        style={{ padding: "10px 20px", marginTop: "10px" }}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </div>
  );
}
