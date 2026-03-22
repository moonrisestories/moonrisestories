"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

export default function Dashboard() {

  const router = useRouter()
  const [email, setEmail] = useState("")

  useEffect(() => {

    const getUser = async () => {

      const { data } = await supabase.auth.getUser()

      if (!data.user) {
        router.push("/login")
        return
      }

      setEmail(data.user.email || "")
    }

    getUser()

  }, [])

  const logout = async () => {

    await supabase.auth.signOut()

    router.push("/login")

  }

  return (

    <div style={{maxWidth:600, margin:"100px auto"}}>

      <h1>MoonRiseStories Dashboard</h1>

      <p>Welcome:</p>

      <b>{email}</b>

      <br/><br/>

      <button onClick={logout}>
        Logout
      </button>

    </div>

  )
}
