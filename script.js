// Load JSON and handle compliments
async function fetchCompliments() {
    try {
      const response = await fetch('./data/compliments.json');
      if (!response.ok) throw new Error("Kan JSON-bestand niet laden");
      const data = await response.json();
      return data.compliments;
    } catch (error) {
      console.error("Fout bij laden van complimenten:", error);
      return ["Je bent geweldig!", "Blijf stralen!", "Code met passie!"];
    }
  }
  
  // Display a random compliment
  function displayRandomCompliment(compliments) {
    const complimentElement = document.getElementById('compliment');
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    complimentElement.textContent = randomCompliment;
  }
  
  // Main function
  (async () => {
    const compliments = await fetchCompliments();
  
    const button = document.getElementById('generate-btn');
    button.addEventListener('click', () => displayRandomCompliment(compliments));
  })();
  