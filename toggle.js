document.addEventListener("DOMContentLoaded", function () {
    function addToggleListeners(context = document) {
        context.querySelectorAll(".toggle-title").forEach(title => {
            title.addEventListener("click", function () {
                let content = this.nextElementSibling;
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                    content.classList.remove("show");
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                    content.classList.add("show");
                }
            });
        });
    }
    addToggleListeners();

    // Pour le contenu chargé dynamiquement
    window.addToggleListeners = addToggleListeners;
});