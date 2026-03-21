"use client";

import { useState } from "react";
import { supabase } from "../../../lib/supabase";

export default function WriteChapter({ params }: any) {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function publishChapter() {

    const { error } = await supabase
      .from("chapters")
      .insert({
        novel_id: params.novelId,
        title,
        content,
        chapter_number: Date.now()
      });

    if (error) {
      alert(error.message);
    } else {
      alert("Chapter published!");
    }

  }

  return (
    <div style={{ padding: "40px" }}>

      <h1>Write Chapter</h1>

      <input
        placeholder="Chapter Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Write your chapter..."
        rows={15}
        onChange={(e) => setContent(e.target.value)}
      />

      <br /><br />

      <button onClick={publishChapter}>
        Publish Chapter
      </button>

    </div>
  );
}
