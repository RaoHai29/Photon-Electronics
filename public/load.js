document.addEventListener('DOMContentLoaded', function() {
    const applianceSections = document.querySelectorAll('.appliance-section');
    const totalWattsOutput = document.getElementById('total-watts');
    const totalKWOutput = document.getElementById('total-kw');
  
    applianceSections.forEach(section => {
      const powerInput = section.querySelector('input[type="number"]');
      const quantityInput = section.querySelector('[id$="-quantity"]');
      const totalWattsElement = section.querySelector('.total-watts');
  
      powerInput.addEventListener('input', updateTotalWatts);
      quantityInput.addEventListener('input', updateTotalWatts);
  
      function updateTotalWatts() {
        const power = parseInt(powerInput.value) || 0;
        const quantity = parseInt(quantityInput.value) || 0;
        const totalWatts = power * quantity;
        totalWattsElement.textContent = `${totalWattsElement.id.replace('-total-watts', '')} Total Watts: ${totalWatts}`;
        updateTotalWattsDisplay();
      }
    });
  
    function updateTotalWattsDisplay() {
      let totalWatts = 0;
      applianceSections.forEach(section => {
        const totalWattsText = section.querySelector('.total-watts').textContent;
        totalWatts += parseInt(totalWattsText.match(/\d+/)[0]) || 0;
      });
      totalWattsOutput.textContent = totalWatts;
      totalKWOutput.textContent = (totalWatts / 1000).toFixed(2);
    }
  });
  