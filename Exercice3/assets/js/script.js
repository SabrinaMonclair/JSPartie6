let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++', 'ruby', 'python'];
let element = languages;

myButton.addEventListener("click", function () {
    languages.forEach(element => languages); {
        let myDiv = document.createElement("div");
        myDiv.innerText = element;
        myTable.appendChild(myDiv);
    }

})