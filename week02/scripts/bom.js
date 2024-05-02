document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector("#favchap");
    const list = document.querySelector("#list");
    const button = document.querySelector("button");

    button.addEventListener("click", function () {
        if (input.value.trim() !== "") {
            const li = document.createElement("li");
            const deleteButton = document.createElement("button");
            li.textContent = input.value.trim();
            deleteButton.textContent = "X";
            li.append(deleteButton);
            list.append(li);
            deleteButton.addEventListener("click", function () {
                list.removeChild(li);
                input.value = "";
                input.focus();
            });
        } else {
            alert("Please enter a chapter name.");
            input.focus();
        }
    });
});