"use client"

import { useState } from "react"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function WritePage(){

  const [title,setTitle] = useState("")
  const [author,setAuthor] = useState("")
  const [genre,setGenre] = useState("")
  const [description,setDescription] = useState("")
  const [file,setFile] = useState<File | null>(null)
  const [preview,setPreview] = useState<string | null>(null)

  async function createNovel(){

    if(!file){
      alert("Please upload a cover image")
      return
    }

    // sanitize filename
    const safeName = file.name
      .replace(/\s+/g,"-")
      .replace(/[^a-zA-Z0-9.-]/g,"")

    const fileName = Date.now() + "-" + safeName

    // upload image
    const { error:uploadError } = await supabase
      .storage
      .from("covers")
      .upload(fileName,file)

    if(uploadError){
      console.error(uploadError)
      alert("Cover upload failed")
      return
    }

    // get public URL
    const { data } = supabase
      .storage
      .from("covers")
      .getPublicUrl(fileName)

    const coverUrl = data.publicUrl

    // insert novel into database
    const { error } = await supabase
      .from("novel")
      .insert([
        {
          title:title,
          author_name:author,
          genre:genre,
          description:description,
          cover_url:coverUrl,
          status:"published"
        }
      ])

    if(error){
      console.error(error)
      alert("Error creating novel")
    }else{

      alert("Novel created successfully!")

      setTitle("")
      setAuthor("")
      setGenre("")
      setDescription("")
      setFile(null)
      setPreview(null)

    }

  }

  return(

    <div style={{maxWidth:"600px",margin:"auto"}}>

      <h1>Create New Novel</h1>

      <input
        placeholder="Novel Title"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        style={{width:"100%",padding:"10px",marginBottom:"10px"}}
      />

      <input
        placeholder="Author Name"
        value={author}
        onChange={(e)=>setAuthor(e.target.value)}
        style={{width:"100%",padding:"10px",marginBottom:"10px"}}
      />

      <input
        placeholder="Genre"
        value={genre}
        onChange={(e)=>setGenre(e.target.value)}
        style={{width:"100%",padding:"10px",marginBottom:"10px"}}
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e)=>{

          const selected = e.target.files?.[0]

          if(selected){
            setFile(selected)
            setPreview(URL.createObjectURL(selected))
          }

        }}
        style={{marginBottom:"10px"}}
      />

      {preview && (

        <img
          src={preview}
          style={{
            width:"200px",
            marginBottom:"15px",
            borderRadius:"8px"
          }}
        />

      )}

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
        style={{width:"100%",padding:"10px",height:"120px"}}
      />

      <br/><br/>

      <button
        onClick={createNovel}
        style={{
          padding:"12px 20px",
          background:"black",
          color:"white",
          border:"none",
          borderRadius:"6px"
        }}
      >
        Publish Novel
      </button>

    </div>

  )

}

