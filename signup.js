function validateForm() {
    var username = document.forms["signupForm"]["username"].value;
    var email = document.forms["signupForm"]["email"].value;
    var password = document.forms["signupForm"]["password"].value;
    var confirmPassword = document.forms["signupForm"]["confirmPassword"].value;
  
    if (username == "") {
      alert("Username must be filled out");
      return false;
    }
    if (email == "") {
      alert("Email must be filled out");
      return false;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters long");
      return false;
    }
    if (password != confirmPassword) {
      alert("Passwords do not match");
      return false;
    }
  
    alert("Form is submitted successfully");
    return true;
  }
  