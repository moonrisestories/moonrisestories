"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function BookmarksPage() {

  const [bookmarks, setBookmarks] = useState<string[]>([])

  useEffect(() => {

    const keys = Object.keys(localStorage)

    const savedBookmarks = keys.filter((key) =>
      key.startsWith("bookmark-")
    )

    setBookmarks(savedBookmarks)

  }, [])

  return (

    <div style={{ maxWidth: "800px", margin: "60px auto" }}>

      <h1>⭐ Your Bookmarks</h1>

      {bookmarks.length === 0 && (
        <p>No bookmarks yet.</p>
      )}

      {bookmarks.map((key) => {

        const novel = key.replace("bookmark-", "")
        const chapter = localStorage.getItem(key)

        return (

          <div
            key={key}
            style={{
              border: "1px solid #ccc",
              padding: "20px",
              marginTop: "20px",
              borderRadius: "8px"
            }}
          >

            <h3>{novel.replaceAll("-", " ")}</h3>

            <Link
              href={`/read/${novel}/${chapter}`}
              style={{ color: "blue" }}
            >
              Continue Reading →
            </Link>

          </div>

        )

      })}

    </div>

  )

}
