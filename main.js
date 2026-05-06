//alert("Welcome!");
console.log("Hello");

const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-bs-theme", savedTheme);//documentElement it means html tag
savedTheme === "dark" ? document.getElementById("modeSwitch").innerHTML = '<i class="fa-solid fa-moon"></i>' : document.getElementById("modeSwitch").innerHTML = '<i class="fa-solid fa-sun"></i>';

document.getElementById("modeSwitch").addEventListener("click", () => {
  let current = document.documentElement.getAttribute("data-bs-theme");
  let newTheme = current === "light" ? "dark" : "light";
  let icon = document.getElementById("modeSwitch").querySelector("i");
  icon.className = newTheme === "dark" ? "fa-solid fa-moon" : "fa-solid fa-sun";
  document.documentElement.setAttribute("data-bs-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

window.onload = () => {   toastBootstrap.show(); setTimeout(() => toast.classList.remove("show"), 3000);};

document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme") || "light";
  if (!localStorage.getItem("visited")) {
    Swal.fire({
      title: "Welcome 👋",
      text: "Feel free to explore my projects and skills.",
      icon: "success",
      confirmButtonText: "Let's go!",
      background: savedTheme === "dark" ? "#1a1a1a" : "#fff",
  color: savedTheme === "dark" ? "#fff" : "#000"
    });

    localStorage.setItem("visited", "true");
  }
  else {
      const toastEl = document.getElementById("welcomeToast");
  const toast = new bootstrap.Toast(toastEl, {
    delay: 3000 
  });
  toast.show();
  }
});

function smartMail(e) {
  const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);

  if (!isMobile) {
    e.preventDefault();
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=nooryaseen510@gmail.com&su=Hello%20Nour!&body=I%20would%20like%20to%20connect%20with%20you.",
      "_blank"
    );
  }
}

