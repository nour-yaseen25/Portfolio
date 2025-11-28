//alert("Welcome!");
console.log("Hello");

const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-bs-theme", savedTheme);//documentElement it means html tag

document.getElementById("modeSwitch").addEventListener("click", () => {
  let current = document.documentElement.getAttribute("data-bs-theme");
  let newTheme = current === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-bs-theme", newTheme);
  localStorage.setItem("theme", newTheme); // save it
});
