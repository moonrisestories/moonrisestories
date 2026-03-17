import React from "react";

export const metadata = {
  title: "MoonRiseStories",
  description: "Where Legends Begin and Love Defies Fate",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">

      <body style={{ margin: 0, fontFamily: "Arial" }}>

        {/* Navigation Bar */}

        <nav
          style={{
            background: "#111",
            color: "#fff",
            padding: "15px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >

          {/* Logo */}

          <h2 style={{ margin: 0 }}>
            MoonRiseStories
          </h2>

          {/* Navigation Links */}

          <div
            style={{
              display: "flex",
              gap: "20px",
            }}
          >

            <a
              href="/"
              style={{
                color: "#fff",
                textDecoration: "none",
              }}
            >
              Home
            </a>

            <a
              href="#"
              style={{
                color: "#fff",
                textDecoration: "none",
              }}
            >
              Genres
            </a>

            <a
              href="#"
              style={{
                color: "#fff",
                textDecoration: "none",
              }}
            >
              Rankings
            </a>

            <a
              href="/dashboard"
              style={{
                color: "#fff",
                textDecoration: "none",
              }}
            >
              Write
            </a>

            <a
              href="/bookmarks"
              style={{
                color: "#fff",
                textDecoration: "none",
              }}
            >
              Bookmarks
            </a>

            <a
              href="#"
              style={{
                color: "#fff",
                textDecoration: "none",
              }}
            >
              Login
            </a>

          </div>

        </nav>

        {/* Page Content */}

        <div
          style={{
            padding: "40px",
          }}
        >
          {children}
        </div>

      </body>

    </html>
  );
}

