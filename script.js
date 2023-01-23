var passConfirm = function() {
    if (document.getElementById("password").value ==
      document.getElementById("conf-password").value) {
      document.getElementById("Message").style.color = "Green";
      document.getElementById("Message").innerHTML = "Passwords match!"
      document.getElementById("password").classList.remove("red");
      document.getElementById("conf-password").classList.remove("red");
      document.getElementById("password").classList.add("green");
      document.getElementById("conf-password").classList.add("green");
    } else {
      document.getElementById("Message").style.color = "Red";
      document.getElementById("Message").innerHTML = "*Passwords do NOT match!"
      document.getElementById("password").classList.remove("green");
      document.getElementById("conf-password").classList.remove("green");
      document.getElementById("password").classList.add("red");
      document.getElementById("conf-password").classList.add("red");
    }
  }