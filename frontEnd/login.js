const login = async () => {
  const userEmail = document.getElementById("email");
  const userPassword = document.getElementById("password");
  const submit = document.getElementById("login");

  const response = await fetch("http://localhost:8080/user/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: userEmail.value,
      password: userEmail.value,
    }),
  });

  if (response.ok) {
    window.location.href = "/bank.html";
  } else {
    window.alert("Amjiltgui");
  }
};
