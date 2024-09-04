let buttonAdd = document.getElementById("agregar");
let arrayInput = []; 

buttonAdd.addEventListener("click", function() {
    let input = document.getElementById("item").value;
    let container = document.getElementById("contenedor");

    if (input !== "") {  
        arrayInput.push(input);  
        container.innerHTML += `<p>${input}</p>`;  
        localStorage.setItem("productos", JSON.stringify(arrayInput)); 

    }
});
