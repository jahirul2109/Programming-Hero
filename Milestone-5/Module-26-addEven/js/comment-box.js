

const boxContainer = document.getElementById('box-container');
const commentBox = document.getElementsByClassName('box')
const updateCommet = document.getElementById('post');
const textArea = document.getElementById('textArea');

textArea.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        e.preventDefault();
        console.log("jahirul")
        const value = textArea.value;
        const newBox = document.createElement('p')
        newBox.innerText = value;
        newBox.classList.add('box')
        boxContainer.appendChild(newBox);
        textArea.value = ""
    }
})