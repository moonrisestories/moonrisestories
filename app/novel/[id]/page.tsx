"use client";

import { supabase } from "../../../lib/supabase";
import Link from "next/link";
import { useEffect, useState } from "react";

async function bookmark(novelId: string) {

  const { data: user } = await supabase.auth.getUser();

  if (!user.user) {
    alert("Please login first");
    return;
  }

  await supabase.from("bookmarks").insert({
    user_id: user.user.id,
    novel_id: novelId
  });

  alert("Bookmarked!");
}

export default function NovelPage({ params }: any) {

  const [novel, setNovel] = useState<any>(null);
  const [chapters, setChapters] = useState<any[]>([]);

  useEffect(() => {
    loadNovel();
  }, []);

  async function loadNovel() {

    const { data: novelData } = await supabase
      .from("novels")
      .select("*")
      .eq("id", params.id)
      .single();

    setNovel(novelData);

    const { data: chapterData } = await supabase
      .from("chapters")
      .select("*")
      .eq("novel_id", params.id)
      .order("chapter_number");

    setChapters(chapterData || []);
  }

  return (
    <div style={{ padding: "40px" }}>

      <h1>{novel?.title}</h1>

      <button
        onClick={() => bookmark(novel.id)}
        style={{
          marginTop: "10px",
          padding: "8px 15px",
          background: "black",
          color: "white",
          borderRadius: "6px"
        }}
      >
        Bookmark
      </button>

      <p>{novel?.description}</p>

      <h2>Chapters</h2>

      {chapters.map((chapter) => (
        <div key={chapter.id}>
          <Link href={`/read/${chapter.id}`}>
            Chapter {chapter.chapter_number}: {chapter.title}
          </Link>
        </div>
      ))}

    </div>
  );
}
      <p>{novel?.description}</p>

      <h2>Chapters</h2>

      {chapters?.map((chapter: any) => (
        <div key={chapter.id}>
          <Link href={`/read/${chapter.id}`}>
            Chapter {chapter.chapter_number}: {chapter.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
