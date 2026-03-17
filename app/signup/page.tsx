export default function SignupPage() {
  return (
    <main style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#020617",
      color: "white"
    }}>
      
      <div style={{
        width: "350px",
        padding: "30px",
        background: "#0f172a",
        borderRadius: "10px"
      }}>
        
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Create Your Account
        </h2>

        <input
          type="text"
          placeholder="Username"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "none"
          }}
        />

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
          background: "#22c55e",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}>
          Sign Up
        </button>

        <p style={{ marginTop: "15px", textAlign: "center" }}>
          Already have an account? <a href="/login" style={{ color: "#22c55e" }}>Login</a>
        </p>

      </div>

    </main>
  );
}

