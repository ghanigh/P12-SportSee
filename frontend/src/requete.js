const url = "https://localhost:3000/users/123456/sessions";

const response = await axios.get(url);

if (response.status === 200) {
  const sessions = response.data;

  // Créer un graphique du nombre de sessions réalisées
  const chart = new Chart(document.getElementById("sessions"), {
    type: "line",
    data: {
      labels: sessions.map(session => session.date),
      datasets: [
        {
          label: "Nombre de sessions",
          data: sessions.map(session => session.count),
        },
      ],
    },
  });
} else {
  // Gérer les erreurs
}
