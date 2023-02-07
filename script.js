const onSubmit = () => {
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    if(validPassword){
      saveUser(username, password);
    }
    return 'homePage.html';
  }
  
  const validPassword = (password) => {
    if(password.length <= 8 || password.length >= 12) 
      return false;
    if(!checkForCapitalLetters) 
      return false;
    if(!containsDigits) 
      return false;
    if(!containsSpecialChars) 
      return false;
  
    return true;
  }
  
  const containsCapitalLetters = (password) => {
    return /[A-Z]/.test(password);
  }
  
  const containsDigits= (password) => {
    return /\d/.test(password);
  }
  
  const containsSpecialChars = (password) => {
    let sc = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    return sc.test(password);
  }
  
  const saveUser = (username, password) => {
    users.set(username,password);
  }
