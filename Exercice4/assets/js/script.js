let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];


myButton.addEventListener("click", function () {
    days.forEach((day) => {
        let myDiv = document.createElement("div");
        myDiv.innerText = day;
        myTable.appendChild(myDiv);
        if (day == 'Samedi' || day == 'Dimanche') {
            myDiv.style.fontWeight = "bold";
        }
    })
})