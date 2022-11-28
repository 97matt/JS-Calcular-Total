function outputTotal() {
    const cantidad = document.querySelector('#cantidad').value;
    const color = document.querySelector('#color').value;
    const precio = document.querySelector('#precio').innerHTML;
    document.querySelector('#outputTotal').innerHTML = cantidad * precio;
    document.querySelector('#outputCantidad').innerHTML = cantidad;
    document.querySelector('#outputColor').style.backgroundColor = color;
};

document.querySelector('#btn').addEventListener('click', outputTotal);