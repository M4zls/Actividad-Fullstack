



function getData(Form) {
    var formdata = new FormData(Form);

    for (var pair of formdata.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
    }

    console.log(Object.fromEntries(formdata));
    console.log(JSON.stringify(Object.fromEntries(formdata)), null, 4);

  

    msg = "<p>Formulario creado correctamente</p>";
    document.getElementById("result").innerHTML = msg;
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("Form").addEventListener("submit", function (e) {
        console.log(e);
        e.preventDefault();
        getData(e.target);
    });
});



function getData(ageForm) {
    const formData = new FormData(ageForm);

    // Mostrar cada par clave-valor en consola (opcional)
    for (const pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
    }

    console.log(Object.fromEntries(formData));
    console.log(JSON.stringify(Object.fromEntries(formData), null, 4));

    // Obtener el valor de edad
    const age = parseInt(formData.get("age"), 10);
    let message = "";

    if (isNaN(age)) {
        message = "Edad no válida";
    } else if (age < 18) {
        message = "Eres menor de edad";
    } else if (age < 65) {
        message = "Eres adulto";
    } else {
        message = "Eres adulto mayor";
    }

    const result = document.getElementById("result");
    if (result) {
        result.innerHTML = `<p class="resultado">${message}</p><p>Formulario creado correctamente</p>`;
    } else {
        console.warn("No se encontró el contenedor #result en el HTML");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const ageForm = document.getElementById("AgeForm");
    if (ageForm) {
        ageForm.addEventListener("submit", function (e) {
            e.preventDefault();
            getData(e.target);
        });
    }
});