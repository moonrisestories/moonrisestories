"use client";

import Link from "next/link";

export default function Dashboard() {

  return (
    <div style={{ padding: "40px" }}>

      <h1>Writer Dashboard</h1>
      <p>Manage your novels and chapters.</p>

      <div style={{ marginTop: "30px" }}>

        <Link href="/write">
          <button style={{ marginRight: "15px" }}>
            Create Novel
          </button>
        </Link>

        <Link href="/my-novels">
          <button style={{ marginRight: "15px" }}>
            My Novels
          </button>
        </Link>

      </div>

    </div>
  );
}
