document.querySelectorAll(".segment-card").forEach(card => {
  card.addEventListener("click", () => {
    const action = card.dataset.action;
    if (action === "renter") {
      document.getElementById("buscar").scrollIntoView({ behavior: "smooth" });
      setTimeout(() => document.getElementById("location").focus(), 500);
    } else {
      document.getElementById("registro").scrollIntoView({ behavior: "smooth" });
    }
  });
});

const form = document.getElementById("searchForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const location = document.getElementById("location").value.trim();
  const start = document.getElementById("startDate").value;
  const end = document.getElementById("endDate").value;
  const need = document.getElementById("need").value;

  if (!location || !start || !end || !need) {
    message.textContent = "Completa todos los campos para buscar un vehículo.";
    return;
  }

  if (end < start) {
    message.textContent = "La fecha de devolución debe ser posterior a la fecha de inicio.";
    return;
  }

  message.textContent = `Buscando vehículos para ${need.toLowerCase()} en ${location}...`;
});