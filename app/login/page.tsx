export default function LoginPage() {
  return (
    <main style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#0f172a",
      color: "white"
    }}>
      
      <div style={{
        width: "350px",
        padding: "30px",
        background: "#1e293b",
        borderRadius: "10px"
      }}>
        
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Login to MoonRiseStories
        </h2>

        <input
          type="email"
          placeholder="Email"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "none"
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "5px",
            border: "none"
          }}
        />

        <button style={{
          width: "100%",
          padding: "12px",
          background: "#facc15",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}>
          Login
        </button>

        <p style={{ marginTop: "15px", textAlign: "center" }}>
          Don’t have an account? <a href="/signup" style={{ color: "#facc15" }}>Sign up</a>
        </p>

      </div>

    </main>
  );
}

