document.addEventListener("DOMContentLoaded", () => {
    const eyeIcons = document.querySelectorAll(".fa-eye");

    eyeIcons.forEach(icon => {
        icon.addEventListener("click", event => {
            event.preventDefault(); // Запобігає переходу по посиланню
            const figure = icon.closest("figure"); // Знаходимо батьківський елемент
            const img = figure.querySelector("img");

            // Додаємо/знімаємо клас "збільшення"
            if (img.classList.contains("enlarged")) {
                img.classList.remove("enlarged");
            } else {
                document.querySelectorAll(".enlarged").forEach(enlargedImg => {
                    enlargedImg.classList.remove("enlarged");
                });
                img.classList.add("enlarged");
            }
        });
    });

    // Закриття збільшеного зображення при кліку
    document.addEventListener("click", event => {
        if (event.target.tagName === "IMG" && event.target.classList.contains("enlarged")) {
            event.target.classList.remove("enlarged");
        }
    });
});
