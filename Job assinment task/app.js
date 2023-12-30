
const fontStyle = () => {
    const fontsValue = document.getElementById('list').value
    document.getElementById('h1Tag').style.fontFamily = `${fontsValue}`
}

const textInputSize = () => {
    const textSize = document.getElementById('textSize').value
    document.getElementById('h1Tag').style.fontSize = `${textSize}px`
}
const colors = () => {
    const colorInput = document.getElementById('colorInput').value
    document.getElementById('h1Tag').style.color = `${colorInput}`
}

const addText = () => {
    document.getElementById('textDiv').style.display = 'inline'
}

const addTexth = () => {
    const newText = document.getElementById('AddNewText').value
    newText.value = '';
    const newH1Tag = document.getElementById('newH1Tag')
    const h1 = document.createElement('h1')
    h1.innerText = `${newText}`
    newH1Tag.appendChild(h1)

    document.getElementById('textDiv').style.display = 'none'
}

const back = () => {
    // document.getElementById('textDiv').style.display = 'inline'

    const newH1Tag = document.getElementById('newH1Tag')
    newH1Tag.style.display = 'inline'
}
const delet = () => {
    // document.getElementById('textDiv').style.display = 'inline'
    const newH1Tag = document.getElementById('newH1Tag')
    newH1Tag.style.display = 'none'
}