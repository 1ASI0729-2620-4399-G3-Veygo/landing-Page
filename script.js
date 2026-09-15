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