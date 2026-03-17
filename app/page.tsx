export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>
      
      {/* HERO SECTION */}
      <section style={{
        height: "80vh",
        background: "linear-gradient(to right, #0f172a, #1e293b)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
        padding: "20px"
      }}>
        <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
          MoonRiseStories 🌙
        </h1>
        <p style={{ fontSize: "20px", maxWidth: "600px" }}>
          Discover powerful stories, write your own legends, and build your audience.
        </p>

        <div style={{ marginTop: "20px" }}>
          <a href="/write">
            <button style={{
              padding: "12px 25px",
              marginRight: "10px",
              background: "#facc15",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}>
              Start Writing
            </button>
          </a>

          <a href="/novel">
            <button style={{
              padding: "12px 25px",
              background: "#334155",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}>
              Explore Stories
            </button>
          </a>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section style={{
        padding: "50px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "32px", marginBottom: "30px" }}>
          Why MoonRiseStories?
        </h2>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap"
        }}>
          <div>
            <h3>📖 Write Freely</h3>
            <p>Create and publish your own stories.</p>
          </div>

          <div>
            <h3>🌍 Global Audience</h3>
            <p>Reach readers from all over the world.</p>
          </div>

          <div>
            <h3>💰 Earn Money</h3>
            <p>Monetize your creativity (coming soon).</p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section style={{
        padding: "50px 20px",
        background: "#0f172a",
        color: "white",
        textAlign: "center"
      }}>
        <h2>Start Your Writing Journey Today</h2>
        <a href="/write">
          <button style={{
            marginTop: "20px",
            padding: "12px 25px",
            background: "#facc15",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}>
            Get Started
          </button>
        </a>
      </section>

    </main>
  );
}
