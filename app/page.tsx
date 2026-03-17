import { createClient } from "@supabase/supabase-js"
import Link from "next/link"

const supabase = createClient(
 process.env.NEXT_PUBLIC_SUPABASE_URL!,
 process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default async function HomePage() {

 const { data: novels } = await supabase
  .from("novel")
  .select("*")
  .order("views", { ascending: false })
  .limit(10)

 return (

  <div style={{maxWidth:"1100px",margin:"auto",padding:"40px"}}>

   <h2>🔥 Trending Stories</h2>

   <br/>

   <div style={{
    display:"grid",
    gridTemplateColumns:"repeat(auto-fill,200px)",
    gap:"20px"
   }}>

   {novels?.map((novel:any)=>(

    <Link key={novel.id} href={`/novel/${novel.id}`}>

     <div style={{cursor:"pointer"}}>

      <img
       src={novel.cover_url}
       style={{
        width:"200px",
        height:"260px",
        objectFit:"cover",
        borderRadius:"10px"
       }}
      />

      <p style={{fontWeight:"bold"}}>
       {novel.title}
      </p>

      <p style={{color:"gray"}}>
       {novel.genre}
      </p>

     </div>

    </Link>

   ))}

   </div>

  </div>

 )
}
