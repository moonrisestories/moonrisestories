import { supabase } from "../../../lib/supabase";
import Link from "next/link";

export default async function ReadPage({ params }: any) {

  const { data: chapter } = await supabase
    .from("chapters")
    .select("*")
    .eq("id", params.chapterId)
    .single();

  const { data: chapters } = await supabase
    .from("chapters")
    .select("*")
    .eq("novel_id", chapter.novel_id)
    .order("chapter_number");

  const index = chapters.findIndex(c => c.id === chapter.id);

  const prev = chapters[index - 1];
  const next = chapters[index + 1];

  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "auto" }}>
      <h1>{chapter.title}</h1>

      <div style={{ marginTop: "30px", lineHeight: "1.8" }}>
        {chapter.content}
      </div>

      <div style={{ marginTop: "40px" }}>

        {prev && (
          <Link href={`/read/${prev.id}`}>
            ← Previous
          </Link>
        )}

        {" | "}

        {next && (
          <Link href={`/read/${next.id}`}>
            Next →
          </Link>
        )}

      </div>
    </div>
  );
}
