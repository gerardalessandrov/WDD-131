document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const productName = document.getElementById("name-1").value;
        const overallRating = document.querySelector("input[name='star']:checked").value;
        const dateInstallation = document.getElementById("date").value;
        const usefulFeatures = [];
        document.querySelectorAll("input[name='feature']:checked").forEach(function (checkbox) {
            usefulFeatures.push(checkbox.value);
        });
        const writtenDescription = document.getElementById("text-area").value;
        const userName = document.getElementById("your-name").value;

        const review = {
            productName: productName,
            overallRating: overallRating,
            dateInstallation: dateInstallation,
            usefulFeatures: usefulFeatures,
            writtenDescription: writtenDescription,
            userName: userName
        };


        let reviewCounter = localStorage.getItem("reviewCounter");
        if (!reviewCounter) {
            reviewCounter = 0;
        }


        reviewCounter++;

        localStorage.setItem(`review_${reviewCounter}`, JSON.stringify(review));


        localStorage.setItem("reviewCounter", reviewCounter);


        window.location.href = "review.html";
    });
});






const products = [
    {
        id: "Carrots",
        value: "carrots",
        avgeragerating: 4.5
    },
    {
        id: "Rice",
        value: "rice",
        averagerating: 4.7
    },
    {
        id: "Chicken",
        value: "chicken",
        averagerating: 3.5
    },
    {
        id: "Legums",
        value: "legums",
        averagerating: 3.9
    }

];

function populateProductOptions() {
    const selectElement = document.getElementById("name-1");

    const defaultOption = document.createElement("option");
    defaultOption.text = "Select a Product ...";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    selectElement.appendChild(defaultOption);


    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.value; // Usar 'value' en lugar de 'id'
        option.text = product.id; // Usar 'id' en lugar de 'name'
        selectElement.appendChild(option);
    });
    localStorage.setItem('numeroDeReviews', '1');


    const numeroDeReviews = localStorage.getItem('numeroDeReviews');
    console.log(numeroDeReviews);
}
