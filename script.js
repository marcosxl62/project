console.log("script.js carregou");

document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const switchEl = document.getElementById("switch");
  const img = document.querySelector("#profile img");

  // aplica o tema salvo ao carregar
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    html.classList.add("light");
    img.setAttribute("src", "./assets/avatar-light.png");
    img.setAttribute("alt", "Foto de perfil com fundo claro");
  } else {
    img.setAttribute("src", "./assets/avatar.png");
    img.setAttribute("alt", "Foto de perfil com fundo escuro");
  }

  switchEl.addEventListener("click", () => {
    console.log("clicou no switch");

    html.classList.toggle("light");
    console.log("classes no html:", html.className);

    if (html.classList.contains("light")) {
      img.setAttribute("src", "./assets/avatar-light.png");
      img.setAttribute("alt", "Foto de perfil com fundo claro");
      localStorage.setItem("theme", "light");
    } else {
      img.setAttribute("src", "./assets/avatar.png");
      img.setAttribute("alt", "Foto de perfil com fundo escuro");
      localStorage.setItem("theme", "dark");
    }
  });
});
