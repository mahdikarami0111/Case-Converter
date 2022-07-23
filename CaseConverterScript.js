
const text= document.getElementById("text");
document.getElementById("upper-case").addEventListener("click",() => {
    text.value = text.value.toUpperCase();
});
document.getElementById("lower-case").addEventListener("click", () => {
    text.value = text.value.toLowerCase();
});
document.getElementById("proper-case").addEventListener("click", () => {
    let temp = text.value.toLowerCase().split(" ")
    for(let i = 0; i < temp.length; i++){
        temp[i] = temp[i].charAt(0).toUpperCase() + temp[i].slice(1);
    }
    text.value = temp.join(" ");
});
document.getElementById("sentence-case").addEventListener("click", () => {
    let temp = text.value.toLowerCase().split(".")
    temp[0] = temp[0].charAt(0).toUpperCase() + temp[0].slice(1);
    for(let i = 1; i < temp.length; i++){
        temp[i] = temp[i].charAt(1).toUpperCase() + temp[i].slice(2);
    }
    temp = temp.join(". ");
    text.value = temp.slice(0, temp.length-1)
});
document.getElementById("save-text-file").addEventListener("click",() => {
    download("text.txt", text.value);
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
