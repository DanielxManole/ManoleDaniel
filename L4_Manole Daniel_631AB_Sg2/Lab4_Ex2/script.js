const luni = 
[
    "Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie",
    "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"
];

const detalii = document.getElementById("detalii");
const btnDetalii = document.getElementById("btnDetalii");
const spanData = document.getElementById("dataProdus");

detalii.classList.add("ascuns");

const data = new Date();
const zi = data.getDate();
const luna = luni[data.getMonth()];
const an = data.getFullYear();
spanData.textContent = `${zi} ${luna} ${an}`;

btnDetalii.addEventListener("click", function()
{
    
    detalii.classList.toggle("ascuns");

    if (detalii.classList.contains("ascuns"))
    {
        btnDetalii.textContent = "Afișează detalii";
    }
    else
    {
        btnDetalii.textContent = "Ascunde detalii";
    }
});