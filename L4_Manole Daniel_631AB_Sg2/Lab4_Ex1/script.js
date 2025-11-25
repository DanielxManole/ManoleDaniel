const luni = [
    "Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie",
    "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"
];

const btnAdauga = document.getElementById("btnAdauga");
const inputActivitate = document.getElementById("inputActivitate");
const listaActivitati = document.getElementById("listaActivitati");

btnAdauga.addEventListener("click", function() {
    const textActivitate = inputActivitate.value;

    if (textActivitate.trim() !== "") {
        const activitate = document.createElement("li");

        const data = new Date();
        const zi = data.getDate();
        const luna = luni[data.getMonth()];
        const an = data.getFullYear();

        activitate.textContent = `${textActivitate} - această activitate a fost adăugata pe ${zi} ${luna} ${an}`;
        listaActivitati.appendChild(activitate);
        inputActivitate.value = "";
    } else {
        alert("Introduceți o activitate pentru a putea fi adăugata în listă!");
    }
});