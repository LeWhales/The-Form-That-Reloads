const form = document.querySelector("#profile");

form.addEventListener("submit", (event) => {
  if (nameInput.value.trim() === "") {
    event.preventDefault();
    showError("Required");
  }
});
