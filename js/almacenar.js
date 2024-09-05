addEventListener('DOMContentLoaded', function () {

    let arrayInput = JSON.parse(localStorage.getItem('productos')) || []; // Inicializa arrayInput con los datos guardados o como un array vacío si no hay datos.
    let container = document.getElementById("contenedor");
    let buttonAdd = document.getElementById("agregar");
    let buttonClear = document.getElementById("limpiar");

    // Mostrar los elementos almacenados en localStorage al cargar la página
    for (let i = 0; i < arrayInput.length; i++) {
        container.innerHTML += `<li>${arrayInput[i]}</li>`;
    }

    // Agregar un nuevo ítem al hacer clic en el botón "Agregar"
    buttonAdd.addEventListener("click", function () {
        let input = document.getElementById("item").value;

        if (input !== "") {
            arrayInput.push(input); // Añadir el nuevo ítem al array
            container.innerHTML += `<li>${input}</li>`; // Mostrar el nuevo ítem

            localStorage.setItem("productos", JSON.stringify(arrayInput)); // Guardar el array actualizado en localStorage
        }

        document.getElementById("item").value = ""; // Limpiar el campo de entrada
    });

    // Limpiar el listado al hacer clic en el botón "Limpiar"
    buttonClear.addEventListener("click", function () {
        arrayInput = []; // Vaciar el array
        localStorage.removeItem("productos"); // Limpiar el localStorage
        container.innerHTML = ""; // Limpiar la vista del listado
    });
});