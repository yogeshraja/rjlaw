if (sessionStorage.getItem("disclaimer") === null) {
    $('#disclaimer').modal('show', {
        backdrop:'static'
    })
}

document.getElementById('disclaimer-agree').addEventListener('click',() => {
    sessionStorage.setItem("disclaimer","true")
})

// document.getElementById('disclaimer-disagree').addEventListener('click',() => {

//     window.close();
//     opener.window.focus()
// })