import { createClient } from "@supabase/supabase-js"
import Link from "next/link"

const supabase = createClient(
 process.env.NEXT_PUBLIC_SUPABASE_URL!,
 process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default async function NovelPage({ params }: any) {

 const { slug } = await params

 const { data: novel } = await supabase
  .from("novel")
  .select("*")
  .eq("id", slug)
  .single()

 if (!novel) {
  return <div style={{padding:"40px"}}>Novel not found</div>
 }

 // Automatically get FIRST chapter
 const { data: firstChapter } = await supabase
  .from("chapters")
  .select("*")
  .eq("novel_id", slug)
  .order("chapter_number", { ascending: true })
  .limit(1)
  .single()

 return (

  <div style={{maxWidth:"900px",margin:"auto",padding:"40px"}}>

   <img
    src={novel.cover_url}
    style={{
     width:"220px",
     borderRadius:"10px"
    }}
   />

   <h1>{novel.title}</h1>

   <p style={{color:"gray"}}>{novel.genre}</p>

   <p>{novel.description}</p>

   <br/>

   {firstChapter ? (

    <Link href={`/read/${firstChapter.id}`}>

     <button
      style={{
       background:"black",
       color:"white",
       padding:"12px 20px",
       borderRadius:"8px",
       border:"none",
       cursor:"pointer"
      }}
     >
      Start Reading
     </button>

    </Link>

   ) : (

    <button
     style={{
      background:"#ccc",
      padding:"12px 20px",
      borderRadius:"8px",
      border:"none"
     }}
    >
     Chapters coming soon
    </button>

   )}

  </div>

 )
}
