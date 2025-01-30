document.addEventListener("DOMContentLoaded", function () {
    const filters = document.querySelectorAll(".group li");
    const articles = document.querySelectorAll(".tuto");

    filters.forEach((filter) => {
        filter.addEventListener("click", function () {
            filters.forEach(f => f.classList.remove("active"));
            this.classList.add("active");

            const category = this.getAttribute("data-category");
            articles.forEach((article) => {
                const categories = article.getAttribute("data-category").split(" ");
                if (category === "tout" || categories.includes(category)) {
                    article.style.display = "block";
                } else {
                    article.style.display = "none";
                }
            });
        });
    });
});

document.getElementById("burger-menu").addEventListener("click", function () {
    document.getElementById("nav-links").classList.toggle("active");
});

document.querySelectorAll('.category').forEach(item => {
    item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            item.click();
        }
    });
});