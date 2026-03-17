"use client"

import { createClient } from "@supabase/supabase-js"
import { useState } from "react"
import { useParams } from "next/navigation"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function WritePage() {
  const params = useParams()
  const novelId = params.novelId as string

  const [chapterNumber, setChapterNumber] = useState("")
  const [chapterTitle, setChapterTitle] = useState("")
  const [chapterContent, setChapterContent] = useState("")

  async function publishChapter() {
    await supabase.from("chapters").insert({
      novel_id: novelId,
      chapter_number: chapterNumber,
      title: chapterTitle,
      content: chapterContent,
    })

    alert("Chapter Published!")
  }

  return (
    <div style={{ maxWidth: "900px", margin: "auto", padding: "40px" }}>
      <h1>Write Chapter</h1>

      <input
        placeholder="Chapter Number"
        value={chapterNumber}
        onChange={(e) => setChapterNumber(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <input
        placeholder="Chapter Title"
        value={chapterTitle}
        onChange={(e) => setChapterTitle(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <textarea
        placeholder="Write your chapter..."
        value={chapterContent}
        onChange={(e) => setChapterContent(e.target.value)}
        style={{ width: "100%", height: "300px", padding: "10px" }}
      />

      <br /><br />

      <button
        onClick={publishChapter}
        style={{
          background: "black",
          color: "white",
          padding: "12px 20px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Publish Chapter
      </button>
    </div>
  )
}
