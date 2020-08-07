//procurar o botão, quando clicar, duplicar os campos e pô-los
//na página
document.querySelector("#add-time")
.addEventListener('click', cloneField)

function cloneField(){
const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
const fields = newFieldContainer.querySelectorAll('input')

fields.forEach(function(field){
field.value = 0
})

document.querySelector('#schedule-items').appendChild(newFieldContainer)
}