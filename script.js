// On page load, check if someone is logged in
window.onload = () => {
  let loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser) {
    showMain(loggedInUser);
    loadVideos();
  }
};

// Login button
document.getElementById("loginBtn").onclick = () => {
  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();
  if (!username || !password) return alert("Enter username and password");

  localStorage.setItem("loggedInUser", username);
  showMain(username);
  loadVideos();
};

// Show main box and upload section if John
function showMain(username) {
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("signupBox").style.display = "none";
  document.getElementById("mainBox").style.display = "block";

  if (username === "John") {
    document.getElementById("uploadSection").style.display = "block";
  }
}

// Upload button
document.getElementById("uploadBtn").onclick = () => {
  let title = document.getElementById("videoTitle").value.trim();
  if (!title) return alert("Enter a movie title");

  let videos = JSON.parse(localStorage.getItem("videos") || "[]");
  videos.push({ title, uploadedBy: "John" });
  localStorage.setItem("videos", JSON.stringify(videos));

  document.getElementById("videoTitle").value = "";
  loadVideos();
};

// Load videos on page
function loadVideos() {
  let videos = JSON.parse(localStorage.getItem("videos") || "[]");
  let container = document.getElementById("videoList");
  container.innerHTML = "";
  videos.forEach(v => {
    let div = document.createElement("div");
    div.textContent = `${v.title} (by ${v.uploadedBy})`;
    container.appendChild(div);
  });
}

// Logout
function logout() {
  localStorage.removeItem("loggedInUser");
  document.getElementById("mainBox").style.display = "none";
  document.getElementById("loginBox").style.display = "block";
}

// Show signup/login
function showSignup() {
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("signupBox").style.display = "block";
}
function showLogin() {
  document.getElementById("signupBox").style.display = "none";
  document.getElementById("loginBox").style.display = "block";
}
function signup() {
  let user = document.getElementById("signupUser").value.trim();
  let pass = document.getElementById("signupPass").value.trim();
  let confirm = document.getElementById("signupConfirm").value.trim();
  if (!user || !pass || !confirm) return alert("Fill all fields");
  if (pass !== confirm) return alert("Passwords do not match");
  alert("Account created! You can now log in.");
  showLogin();
}
