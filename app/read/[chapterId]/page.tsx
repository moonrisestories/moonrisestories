import { createClient } from "@supabase/supabase-js"
import Link from "next/link"

const supabase = createClient(
 process.env.NEXT_PUBLIC_SUPABASE_URL!,
 process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default async function NovelPage({ params }: any) {

 const { slug } = await params

 const title = slug
  .split("-")
  .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ")

 const { data: novel } = await supabase
  .from("novel")
  .select("*")
  .ilike("title", title)
  .single()

 if (!novel) {
  return (
   <div style={{ padding: "40px" }}>
    <h2>Novel not found</h2>
   </div>
  )
 }

 const { data: chapters } = await supabase
  .from("chapters")
  .select("*")
  .eq("novel_id", novel.id)
  .order("number", { ascending: true })

 return (
  <div style={{ maxWidth: "900px", margin: "auto", padding: "40px" }}>

   <h1>{novel.title}</h1>

   <p style={{ color: "gray" }}>
    by {novel.author_name}
   </p>

   <br/>

   <img
    src={novel.cover_url}
    style={{
     width: "200px",
     borderRadius: "10px"
    }}
   />

   <br/><br/>

   <p>{novel.description}</p>

   <br/><br/>

   {chapters && chapters.length > 0 && (

    <Link href={`/read/${chapters[0].id}`}>
     <button style={{
      background: "black",
      color: "white",
      padding: "12px 20px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer"
     }}>
      Start Reading
     </button>
    </Link>

   )}

   <br/><br/>

   <h3>Chapters</h3>

   {chapters?.map((chapter: any) => (

    <div key={chapter.id} style={{ marginBottom: "10px" }}>

     <Link href={`/read/${chapter.id}`}>
      Chapter {chapter.number}: {chapter.title}
     </Link>

    </div>

   ))}

  </div>
 )
}
