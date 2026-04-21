const API_URL = "ENDPOINT";

// Criar mesas na tela
function criarMesas() {
  const container = document.getElementById("mesas");

  for (let i = 1; i <= 20; i++) {
    const mesa = document.createElement("div");
    mesa.classList.add("mesa");
    mesa.id = `mesa-${i}`;
    mesa.innerText = i;
    container.appendChild(mesa);
  }
}

// Carregar dados da API
async function carregarMesas() {
  try {
    const response = await fetch(API_URL);
    const mesas = await response.json();

    mesas.forEach(mesa => {
      const elemento = document.getElementById(`mesa-${mesa.id}`);

      if (!elemento) return;

      if (mesa.status === "livre") {
        elemento.style.backgroundColor = "green";
      } else {
        elemento.style.backgroundColor = "red";
      }
    });

  } catch (error) {
    console.error("Erro ao carregar mesas:", error);
  }
}

// Reservar mesa
async function reservarMesa() {
  const id = document.getElementById("mesaId").value;

  if (!id) {
    alert("Informe o número da mesa");
    return;
  }

  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: "reservado" })
  });

  carregarMesas();
}

// Liberar mesa
async function liberarMesa() {
  const id = document.getElementById("mesaId").value;

  if (!id) {
    alert("Informe o número da mesa");
    return;
  }

  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: "livre" })
  });

  carregarMesas();
}

// Inicialização
window.onload = () => {
  criarMesas();
  carregarMesas();
};