"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function ProducerDashboard() {

  const [stories, setStories] = useState<any[]>([]);

  useEffect(() => {
    fetchStories();
  }, []);

  async function fetchStories() {
    const { data, error } = await supabase
      .from("scouting_stories")
      .select("*")
      .order("quality_score", { ascending: false });

    if (error) {
      console.error(error);
    } else {
      setStories(data || []);
    }
  }

  async function requestRights(novelId: string) {

    const { error } = await supabase
      .from("rights_requests")
      .insert({
        novel_id: novelId,
        message: "Interested in acquiring rights",
        offer_price: 1000
      });

    if (error) {
      alert("Error sending request");
    } else {
      alert("Request sent!");
    }
  }

  return (
    <div style={{ padding: "40px" }}>

      <h1>🎬 Producer Dashboard</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "20px"
      }}>

        {stories.map((story) => (

          <div key={story.id} style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            overflow: "hidden"
          }}>

            <img
              src={story.cover_url}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />

            <div style={{ padding: "10px" }}>

              <h3>{story.title}</h3>

              <p>⭐ Quality: {story.quality_score}</p>
              <p>🔥 Trending: {story.trending_score}</p>
              <p>🚀 Viral: {story.share_count}</p>

              <p>💰 Price: ${story.price}</p>

              <button
                onClick={() => requestRights(story.id)}
                style={{
                  background: "black",
                  color: "white",
                  padding: "10px",
                  borderRadius: "6px",
                  marginTop: "10px"
                }}
              >
                Request Rights
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}
