var counterValue = 0.00;

function showMessage() {
    var message = document.getElementById("successMessage");
    message.style.display = "block";
    var button = document.querySelector(".button");
    button.innerHTML = "";
    counterValue += 0.01;
    document.getElementById("counter").innerHTML = "BonyaCoin: " + counterValue.toFixed(2);
    setTimeout(function() {
        message.style.display = "none";
        button.innerHTML = "Claim";
    }, 3000);
}
