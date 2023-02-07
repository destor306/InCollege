function validateLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (users[username] && users[username] === password) { return 'homepage.html'; } 

  else { 
    alert("Invalid username or password"); 
    return 'index.html';
  }
}