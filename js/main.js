const screen = document.querySelector('[data-screen]')

const arrayData = document.querySelectorAll('[data-number]')
arrayData.forEach((buttonNumber)=>{
    buttonNumber.addEventListener('click', ()=>{
        render(buttonNumber.value)} )
})

const arrayOperator = document.querySelectorAll('[data-operator]')
arrayOperator.forEach((buttonOperator)=>{
    buttonOperator.addEventListener('click', ()=>{
        render(buttonOperator.value)
    })
})

function render(data){
    screen.value += data
}
function result(){
    if (screen.value == ""){
        alert('Não vai ter resultado se não tiver o calculo :)')
    }else{
        const result = eval(screen.value)
        screen.value = result
    }
}

function clearScreen(){
    screen.value = ""
}