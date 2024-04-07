// Function to update the progress bar
function updateProgressBar() {
    let filler = document.getElementById("filler");
    let width = parseFloat(filler.style.width) || 0;
    let increment = 0.0050; // Increment per second
    let maxUnits = 1.0000; // Maximum units
    if (width < maxUnits * 100) { // Multiply by 100 to convert to percentage
      width += increment * 100; // Multiply by 100 to convert to percentage
      filler.style.width = width + "%";
    }
    // Update the balance label with the current fill level
    let label = document.querySelector(".label");
    label.textContent = "$" + (width / 100).toFixed(5);
  }
  
  // Function to reset progress and move value to balance label
function resetProgress() {
    let filler = document.getElementById("filler");
    let label = document.querySelector(".label");
    let balanceLabel = document.querySelector(".second-label");
  
    // Get current progress
    let currentProgress = parseFloat(filler.style.width) / 100 || 0;
  
    // Get current balance
    let currentBalance = parseFloat(balanceLabel.textContent.substr(1)) || 0;
  
    // Update balance with discarded progress
    balanceLabel.textContent = "$" + (currentBalance + currentProgress).toFixed(5);
  
    // Reset progress bar width to 0
    filler.style.width = "0%";
  
    // Reset label text to initial value
    label.textContent = "$0.00000";
  }
  
  // Update the progress bar every second
  setInterval(updateProgressBar, 1000);
  
  // Add event listener to the "Claim" button
  document.querySelector(".claim-button").addEventListener("click", resetProgress);
  