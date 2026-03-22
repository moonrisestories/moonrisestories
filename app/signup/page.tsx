"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase/client"

export default function SignupPage() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSignup = async (e:any) => {

    e.preventDefault()

    setLoading(true)

    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    setLoading(false)

    if (error) {
      alert(error.message)
      return
    }

    alert("Check your email to verify your account")
  }

  return (

    <div style={{maxWidth:400, margin:"100px auto"}}>

      <h1>Create Account</h1>

      <form onSubmit={handleSignup}>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
        />

        <br/><br/>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
        />

        <br/><br/>

        <button type="submit">
          {loading ? "Creating account..." : "Sign Up"}
        </button>

      </form>

    </div>

  )
}
