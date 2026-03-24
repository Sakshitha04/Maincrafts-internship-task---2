const icon = document.getElementById("main_section_icon");
const card = document.getElementById("icon_card");

icon.addEventListener("click", () => {
  card.style.display = 
    card.style.display === "block" ? "none" : "block";
});