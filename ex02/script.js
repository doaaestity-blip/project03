const titleElement = document.getElementById("main-title");
const descElement = document.querySelector(".description");
const buttonElement = document.getElementById("action-btn");

buttonElement.style.cursor = "pointer";

buttonElement.addEventListener("click", function() {
    titleElement.textContent = "Updated DOM Title!";
    descElement.textContent = "This text was successfully changed after clicking the button!";
    buttonElement.textContent = "Clicked!";
    
    buttonElement.classList.add("active");
});
