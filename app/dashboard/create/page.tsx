export default function CreateNovel() {
  return (
    <div style={{ maxWidth: "800px", margin: "40px auto" }}>
      <h1>Create New Novel</h1>

      <form style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "30px" }}>

        <input
          placeholder="Novel Title"
          style={{ padding: "12px", fontSize: "16px" }}
        />

        <textarea
          placeholder="Novel Description"
          rows={5}
          style={{ padding: "12px", fontSize: "16px" }}
        />

        <input
          placeholder="Cover Image URL"
          style={{ padding: "12px", fontSize: "16px" }}
        />

        <select style={{ padding: "12px", fontSize: "16px" }}>
          <option>Ongoing</option>
          <option>Completed</option>
        </select>

        <button
          style={{
            padding: "14px",
            background: "black",
            color: "white",
            border: "none",
            fontSize: "16px",
            borderRadius: "6px",
          }}
        >
          Publish Novel
        </button>

      </form>
    </div>
  );
}

