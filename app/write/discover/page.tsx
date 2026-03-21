"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import Link from "next/link";

export default function DiscoverPage() {

  const [novels, setNovels] = useState<any[]>([]);

  useEffect(() => {
    loadTrending();
  }, []);

  async function loadTrending() {

    const { data } = await supabase
      .from("novels")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(20);

    setNovels(data || []);
  }

  return (
    <div style={{ padding: "40px" }}>

      <h1>Discover Stories</h1>
      <p>Find amazing novels written by our community.</p>

      <div style={{ marginTop: "40px" }}>

        {novels.map((novel) => (

          <div key={novel.id} style={{ marginBottom: "30px" }}>

            <Link href={`/novel/${novel.id}`}>
              <h3>{novel.title}</h3>
            </Link>

            <p>{novel.description}</p>

          </div>

        ))}

      </div>

    </div>
  );
}
