var toCopy = document.getElementById("to-copy"),
    btnCopy = document.getElementById("copy"),
    paste = document.getElementById("cleared");

btnCopy.addEventListener("click", () => {
    toCopy.select();
    paste.value = '';


if(document.execCommand("copy")){
    btnCopy.classList.add("copiado");
    paste.focus();

    var temp = setInterval(()=>{
        btnCopy.classList.remove("copiado");
        clearInterval(temp);
    },600);
} else{
    console.info('document.execComand went wrong...')
}
return false;
});