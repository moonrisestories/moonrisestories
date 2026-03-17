export default function ManageChapters() {
  const chapters = [
    "Chapter 1 — The Rejection",
    "Chapter 2 — The Crown's Secret",
    "Chapter 3 — Blood Under the Moon",
  ]

  return (
    <div style={{ maxWidth: "900px", margin: "40px auto" }}>
      <h1>Manage Chapters</h1>

      <div style={{ marginTop: "30px" }}>
        {chapters.map((chapter, i) => (
          <div
            key={i}
            style={{
              padding: "15px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              marginBottom: "10px",
            }}
          >
            {chapter}
          </div>
        ))}
      </div>

      <button
        style={{
          marginTop: "30px",
          padding: "12px 20px",
          background: "black",
          color: "white",
          border: "none",
          borderRadius: "6px",
        }}
      >
        + Add New Chapter
      </button>
    </div>
  )
}

