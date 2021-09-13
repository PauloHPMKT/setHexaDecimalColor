const btnClick = document.querySelector('#btn')
let spanText = document.querySelector('#hexCode')





const setBg = () => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16)
    document.body.style.background = `#${randomColor}`
    spanText.innerHTML = `#${randomColor}`
}

// callback function cannot be acess before inicialization
btnClick.addEventListener('click', setBg)
setBg()