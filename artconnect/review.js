
document.addEventListener("DOMContentLoaded", function () {

    const reviewForm = document.getElementById("reviewForm");

    reviewForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert("💗 Review Submitted Successfully! Thank you for sharing your experience ✨");

        reviewForm.reset();

    });

});
