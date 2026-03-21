"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import Link from "next/link";

export default function Dashboard() {

  const [user, setUser] = useState<any>(null);
  const [novels, setNovels] = useState<any[]>([]);

  useEffect(() => {
    loadUser();
    loadNovels();
  }, []);

  async function loadUser() {
    const { data } = await supabase.auth.getUser();
    setUser(data.user);
  }

  async function loadNovels() {

    const { data } = await supabase
      .from("novels")
      .select("*")
      .order("created_at", { ascending: false });

    setNovels(data || []);
  }

  return (

    <div style={{ padding: "40px" }}>

      <h1>Writer Dashboard</h1>

      <p>Welcome to MoonRiseStories</p>

      <br />

      <Link href="/write">
        <button style={{
          padding: "10px 20px",
          background: "#000",
          color: "#fff",
          border: "none",
          cursor: "pointer"
        }}>
          Write New Novel
        </button>
      </Link>

      <br /><br />

      <h2>Your Novels</h2>

      {novels.length === 0 && (
        <p>No novels yet.</p>
      )}

      {novels.map((novel) => (

        <div key={novel.id} style={{
          border: "1px solid #ddd",
          padding: "20px",
          marginBottom: "20px"
        }}>

          <h3>{novel.title}</h3>

          <p>{novel.description}</p>

          <Link href={`/write/${novel.id}`}>
            <button>Edit Chapters</button>
          </Link>

        </div>

      ))}

    </div>
  );
}
