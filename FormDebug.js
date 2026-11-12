const form = document.querySelector("#profile");

form.addEventListener("submit", () => {
    const name = document.querySelector("#name").value;
    if (name === ""); { showError("Required") };
});