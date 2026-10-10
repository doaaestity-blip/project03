const titleElement = document.getElementById("main-title");
titleElement.textContent = "Updated DOM Title";

const descElement = document.querySelector(".description");
descElement.textContent = "This text was successfully changed using textContent!";

const buttonElement = document.getElementById("action-btn");
buttonElement.style.cursor = "pointer";

buttonElement.classList.add("active");
