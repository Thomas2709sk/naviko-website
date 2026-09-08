document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", () => {
        const item = question.closest(".faq-item");
        const answer = item?.querySelector(".faq-answer");
        const icon = question.querySelector(".faq-icon");

        if (answer) {

            answer.classList.toggle("d-none");

            question.classList.toggle("rounded-3");
            question.classList.toggle("rounded-top-3");
        }

        if (icon) {

            icon.classList.toggle("fa-circle-plus");
            icon.classList.toggle("fa-circle-minus");
        }
    });
});