
let hasVoted = false;
let votes = {};

document.addEventListener("DOMContentLoaded", function() {
  // Index page
  document.getElementById("name-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    localStorage.setItem("name", name);
    window.location.href = "index.html";
  });

  // Vote page
  document.getElementById("vote-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let representative = document.getElementById("representative").value;
    if (!hasVoted) {
      votes[representative] = (votes[representative] || 0) + 1;
      hasVoted = true;
      localStorage.setItem("hasVoted", true);
      window.location.href = "index.html";
    } else {
      alert("You have already voted!");
    }
  });

  // Thank you page
  document.getElementById("home-button").addEventListener("click", function() {
    window.location.href = "index.html";
  });

  document.getElementById("results-button").addEventListener("click", function() {
    let password = prompt("Enter security password:");
    if (password === "1234") {
      let resultMessage = "";
      for (let representative in votes) {
        resultMessage += `${representative}: ${votes[representative]} votes<br>`;
      }
      alert(resultMessage);
    } else {
      alert("Incorrect password!");
    }
  });
});


