"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
 process.env.NEXT_PUBLIC_SUPABASE_URL!,
 process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function Dashboard(){

 const [novels,setNovels] = useState<any[]>([])

 async function loadNovels(){

  const { data } = await supabase
   .from("novel")
   .select("*")
   .order("created_at",{ascending:false})

  if(data){
   setNovels(data)
  }

 }

 useEffect(()=>{
  loadNovels()
 },[])

 return(

  <div style={{maxWidth:"1000px",margin:"auto",padding:"40px"}}>

   <h1>Writer Dashboard</h1>

   <br/>

   <Link href="/write">
    <button style={{
     padding:"12px 20px",
     background:"black",
     color:"white",
     border:"none",
     borderRadius:"6px"
    }}>
     Create New Novel
    </button>
   </Link>

   <br/><br/><br/>

   <h2>My Novels</h2>

   <div style={{
    display:"grid",
    gridTemplateColumns:"repeat(3,1fr)",
    gap:"20px",
    marginTop:"20px"
   }}>

    {novels.map((novel)=>(
     
     <div key={novel.id} style={{
      border:"1px solid #ddd",
      borderRadius:"10px",
      padding:"15px"
     }}>

      <img
       src={novel.cover_url}
       style={{
        width:"100%",
        height:"200px",
        objectFit:"cover",
        borderRadius:"6px"
       }}
      />

      <h3 style={{marginTop:"10px"}}>
       {novel.title}
      </h3>

      <p style={{color:"#666"}}>
       {novel.genre}
      </p>

      <div style={{display:"flex",gap:"10px",marginTop:"10px"}}>

       <Link href={`/write/${novel.id}`}>
        <button style={{
         padding:"8px 14px",
         background:"#000",
         color:"#fff",
         border:"none",
         borderRadius:"6px"
        }}>
         Write Chapter
        </button>
       </Link>

       <Link href={`/novel/${novel.id}`}>
        <button style={{
         padding:"8px 14px",
         background:"#ddd",
         border:"none",
         borderRadius:"6px"
        }}>
         View Novel
        </button>
       </Link>

      </div>

     </div>

    ))}

   </div>

  </div>

 )

}

