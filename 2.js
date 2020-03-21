function usernameValidation(username) {
    var lowercaseRe = /[a-z]/g;

	if(username.length > 5 && username.length < 8 && username.match(lowercaseRe).length == username.length) {
    	return true;
    }
    return false;
}

function passwordValidation(data) {
    let password = data;
    const regExp = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9=!@#$%^&*()-_+'"<>,./]+)$/;
  
    if (
      password.match(regExp) &&
      (password.length == 9)
    ) {
      return true;
    } else {
      return false;
    }
  };

  console.log(usernameValidation('hanindaa')); //false
  console.log(usernameValidation('haninda')); //true
  console.log(passwordValidation('h4nindAa!')); //true
  console.log(passwordValidation('h4nindAa')); //false