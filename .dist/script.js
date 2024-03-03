document.addEventListener("DOMContentLoaded", function() {
    // Simulate loading phase
    setTimeout(function() {
      document.getElementById("loading-screen").classList.add("hidden");
      document.getElementById("result-screen").classList.remove("hidden");
      document.getElementById("result-text").textContent = "Your driver has been selected.";
    }, 2000); // Change 2000 to your desired loading time in milliseconds
});
