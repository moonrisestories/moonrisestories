"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import Link from "next/link";

export default function MyNovels() {

  const [novels, setNovels] = useState<any[]>([]);

  useEffect(() => {
    loadNovels();
  }, []);

  async function loadNovels() {

    const { data: user } = await supabase.auth.getUser();

    if (!user.user) return;

    const { data } = await supabase
      .from("novels")
      .select("*")
      .eq("author_id", user.user.id);

    setNovels(data || []);
  }

  return (
    <div style={{ padding: "40px" }}>

      <h1>My Novels</h1>

      {novels.length === 0 && (
        <p>You have not created any novels yet.</p>
      )}

      {novels.map((novel) => (
        <div key={novel.id} style={{ marginTop: "20px" }}>

          <h3>{novel.title}</h3>

          <Link href={`/write/${novel.id}`}>
            Write Chapter
          </Link>

        </div>
      ))}

    </div>
  );
}
