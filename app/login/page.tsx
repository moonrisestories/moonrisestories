async function handleLogin() {
  alert("Button clicked");

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  console.log(data, error);

  if (error) {
    alert(error.message);
    return;
  }

  if (data.user) {
    alert("Login successful!");
    window.location.href = "/dashboard";
  } else {
    alert("No user returned");
  }
}
