"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import Link from "next/link";

export default function Home() {

  const [novels, setNovels] = useState<any[]>([]);

  useEffect(() => {
    loadNovels();
  }, []);

  async function loadNovels() {

    const { data } = await supabase
      .from("novels")
      .select("*")
      .order("created_at", { ascending: false });

    setNovels(data || []);
  }

  return (
    <div style={{ padding: "40px" }}>

      <h1>MoonRiseStories</h1>
      <p>Discover powerful stories from writers around the world.</p>

      <h2 style={{ marginTop: "40px" }}>Latest Novels</h2>

      {novels.length === 0 && (
        <p>No novels yet.</p>
      )}

      {novels.map((novel) => (
        <div key={novel.id} style={{ marginTop: "20px" }}>

          <Link href={`/novel/${novel.id}`}>
            <h3>{novel.title}</h3>
          </Link>

          <p>{novel.description}</p>

        </div>
      ))}

    </div>
  );
}
