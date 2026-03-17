export default function SignupPage() {
  return (
    <div style={{
      minHeight: "100vh",
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
          Create Account
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
          padding: "10px",
          background: "#facc15",
          border: "none",
          borderRadius: "5px",
          fontWeight: "bold"
        }}>
          Sign Up
        </button>

        <p style={{ marginTop: "15px", textAlign: "center" }}>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}
