const handleLogin = async () => {
  console.log("Login button clicked");

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  console.log("Response:", data, error);

  if (error) {
    alert("ERROR: " + error.message);
    return;
  }

  alert("Login successful!");

  window.location.href = "/dashboard";
};
