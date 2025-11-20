const apiURL = "http://localhost:8080";

const username = users.find((u) => u.username === username);

if (!username) {
  alert("You are not logged in.");
  window.location.href = "index.html";
}

async function loadHistory() {
  const res = await fetch(`../data/history.json`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username }),
  });

  const history = await res.json();

  const tbody = document.querySelector("#historyTable tbody");
  tbody.innerHTML = "";

  history.forEach((item) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
            <td>${item.type}</td>
            <td>${item.amount}</td>
            <td>${new Date(item.date).toLocaleString()}</td>
        `;
    tbody.appendChild(tr);
  });
}

document.getElementById("depositBtn").addEventListener("click", async () => {
  const amount = Number(document.getElementById("amount").value);

  await fetch(`${apiURL}/bank/deposit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, amount }),
  });

  loadHistory();
});

document.getElementById("withdrawBtn").addEventListener("click", async () => {
  const amount = Number(document.getElementById("amount").value);

  await fetch(`${apiURL}/bank/withdraw`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, amount }),
  });

  loadHistory();
});

loadHistory();
