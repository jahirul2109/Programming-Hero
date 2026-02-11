const deleteBtn = document.getElementById('btn');
const repo = document.getElementById('repo');
repo.addEventListener('keyup', (e) => {
    const txt = e.target.value;
    const del = "delete";
    del.toLocaleLowerCase()
    if (txt.toLocaleLowerCase() === del) {
        deleteBtn.removeAttribute('disabled')
        deleteBtn.addEventListener('click', () => {
            document.getElementById('heading').style.display = "none"
        })
    } else {
        deleteBtn.setAttribute('disabled', true)
    }
})