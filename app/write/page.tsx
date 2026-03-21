"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function CreateNovel() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function createNovel() {

    const { data: user } = await supabase.auth.getUser();

    if (!user.user) {
      alert("Please login first");
      return;
    }

    const { error } = await supabase
      .from("novels")
      .insert({
        author_id: user.user.id,
        title,
        description
      });

    if (error) {
      alert(error.message);
    } else {
      alert("Novel created successfully!");
    }

  }

  return (
    <div style={{ padding: "40px" }}>

      <h1>Create Novel</h1>

      <input
        placeholder="Novel Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />

      <br /><br />

      <button onClick={createNovel}>
        Publish Novel
      </button>

    </div>
  );
}
