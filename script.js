function showSignup() {
  loginBox.style.display = "none";
  signupBox.style.display = "block";
}

function showLogin() {
  signupBox.style.display = "none";
  loginBox.style.display = "block";
}

function signup() {
  const user = signupUser.value;
  const pass = signupPass.value;
  const confirm = signupConfirm.value;

  if (!user || !pass) {
    alert("Fill all fields");
    return;
  }

  if (pass !== confirm) {
    alert("Passwords do not match");
    return;
  }

  localStorage.setItem("user_" + user, pass);
  alert("Account created!");
  showLogin();
}

function login() {
  const user = loginUser.value;
  const pass = loginPass.value;

  const savedPass = localStorage.getItem("user_" + user);

  if (savedPass === pass) {
    loginBox.style.display = "none";
    mainBox.style.display = "block";

    if (user === "John") {
      uploadBox.style.display = "block";
    }
  } else {
    alert("Wrong username or password");
  }
}

function logout() {
  location.reload();
}