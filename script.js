const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Verifica se o usuário já escolheu um tema anteriormente
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
body.classList.add("dark-mode");
themeToggle.textContent = "Modo claro";
}

// Alterna entre modo claro e escuro
themeToggle.addEventListener("click", () => {
body.classList.toggle("dark-mode");

```
const isDarkMode = body.classList.contains("dark-mode");

if (isDarkMode) {
    themeToggle.textContent = "Modo claro";
    localStorage.setItem("theme", "dark");
} else {
    themeToggle.textContent = "Modo escuro";
    localStorage.setItem("theme", "light");
}
```

});
