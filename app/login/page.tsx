async function handleLogin() {
  alert("Button clicked"); // test

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  console.log(data, error);

  if (error) {
    alert(error.message);
    return;
  }

  alert("Login successful!");

  window.location.href = "/dashboard";
}
