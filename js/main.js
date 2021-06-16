const screen = document.querySelector('[data-screen]')
screen.value = "0"

const arrayButton = document.querySelectorAll('[data-button]')
arrayButton.forEach((dataButton)=>{
    dataButton.addEventListener('click', ()=>{
        render(dataButton.value)
    })
})

function render(data){
    if(screen.value == "0"){
        screen.value = data
    }else{
        screen.value += data
    }
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
    screen.value = "0"
}