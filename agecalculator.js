const btnE1 = document.getElementById("btn")
const birthdayE1 = document.getElementById("birthday")

function calculateage()
{
    const birthdayvalue = birthdayE1.value;
    console.log(birthdayvalue);
}
btnE1.addEventListener("click", calculateage)