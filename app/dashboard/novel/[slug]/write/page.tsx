"use client"
import { useState, useEffect } from "react"

export default function ChapterEditor() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [wordCount, setWordCount] = useState(0)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const words = content.trim().split(/\s+/).filter(Boolean)
    setWordCount(words.length)
  }, [content])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (content.length > 0) {
        localStorage.setItem("chapter_draft", content)
        setSaved(true)
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [content])

  useEffect(() => {
    const draft = localStorage.getItem("chapter_draft")
    if (draft) setContent(draft)
  }, [])

  return (
    <div style={{ maxWidth: "900px", margin: "40px auto" }}>

      <h1>Chapter Editor</h1>

      <input
        placeholder="Chapter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          fontSize: "18px",
          marginBottom: "20px"
        }}
      />

      <textarea
        placeholder="Write your chapter here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{
          width: "100%",
          height: "400px",
          padding: "20px",
          fontSize: "16px",
          lineHeight: "1.7"
        }}
      />

      <div style={{ marginTop: "15px", display: "flex", justifyContent: "space-between" }}>
        <span>Word Count: {wordCount}</span>
        <span>{saved ? "Draft Auto-Saved ✓" : ""}</span>
      </div>

      <button
        style={{
          marginTop: "25px",
          padding: "12px 20px",
          background: "black",
          color: "white",
          border: "none",
          borderRadius: "6px"
        }}
      >
        Publish Chapter
      </button>

    </div>
  )
}
