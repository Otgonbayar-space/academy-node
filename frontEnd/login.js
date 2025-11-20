const addBtn = document.getElementById("submitBtn");

const blogs = [];

const addBtnFunc = async () => {
  const titleElement = document.getElementById("email");
  const contentElement = document.getElementById("password");

  const email = titleElement.value;
  const password = contentElement.value;
  const response = await fetch("http://localhost:8080/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
};

addBtn.addEventListener("click", addBtnFunc);
