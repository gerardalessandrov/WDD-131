document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const product_name = document.getElementById("name").value;
        const date = document.getElementById("date").value;
        const number = document.getElementById("number").value;
        const address = document.getElementById("address").value;
        const user_name = document.getElementById("your-name").value;
        const writtendescription = document.getElementById("text-area").value;
        const review = {
            product_name: product_name,
            date: date,
            number: number,
            address: address,
            user_name: user_name,
            writtendescription: writtendescription
        };
        let reviewCounter = localStorage.getItem("reviewCounter");
        if (!reviewCounter) {
            reviewCounter = 0;
        }
        reviewCounter++;
        localStorage.setItem(`review_${reviewCounter}`, JSON.stringify(review));

        localStorage.setItem("reviewCounter", reviewCounter);
        window.location.href = "review.html";


    })
})