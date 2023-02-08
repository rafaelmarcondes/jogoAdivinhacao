//variavies
const tela1 = document.querySelector(".tela1")
const tela2 = document.querySelector(".tela2")
const botaoTentar = document.querySelector("#botaoTentar")
const botaoResetar = document.querySelector("#botaoResetar")
let randomNumber = Math.round(Math.random() * 10)
let tentativas = 1

//eventos
botaoTentar.addEventListener('click', renderizarClique)
botaoResetar.addEventListener('click', resetarClique)
document.addEventListener('keydown', function(teclaEnter){

  if(teclaEnter.key == 'Enter' && screen.classList.contains('hide')){
    
    handResetClick()

  }
})

//funções
function renderizarClique(event){
  event.preventDefault()

  const entradaDeNumero = document.querySelector("#entradaDeNumero")

  if(Object.values(entradaDeNumero.value).length === 0){
    alert("escolha um valor entre Zero e DEZ")
  } 

  if(Number(entradaDeNumero.value) < 0){
    alert("escolha um valor entre Zero e DEZ")
  } 

  if(Number(entradaDeNumero.value) >= 11){
    alert("escolha um valor entre Zero e DEZ")
  } 

  if(Number(entradaDeNumero.value) == randomNumber){
    toggleScreen()
    tela2.querySelector(".tela2 h2").innerText = `Acertou em ${tentativas} tentativas`

  } 

  entradaDeNumero.value = ""
  tentativas++

}

function resetarClique(){
  toggleScreen()
  tentativas = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen(){
  tela1.classList.toggle("hide")
  tela2.classList.toggle("hide")
}
