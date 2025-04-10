function toggleTesto() {
    const testo = document.getElementById("testoEsteso");
    const bottone = document.getElementById("buttones");
    
    if (testo.style.display === "none") {
      testo.style.display = "block";
      bottone.textContent = "Mostra di meno";
    } else {
      testo.style.display = "none";
      bottone.textContent = "Mostra di più";
    }
  }