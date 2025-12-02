const login = async () => {
  const userEmail = document.getElementById("email");
  const userPassword = document.getElementById("password").value;
  const submit = document.getElementById("login").value;

  const response = await fetch("http://localhost:8080/user/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({
      email: userEmail.value,
      password: userPassword.value,
    }),
  });

  if (response.ok) {
    window.location.href = "/bank.html";
  } else {
    window.alert("Amjiltgui");
  }
};
