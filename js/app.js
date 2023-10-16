const calculadora = document.querySelector('.calculadora_elements');
const result = document.getElementById('result');

const teclas = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace', 'Enter', '+', '-', '/', '*', '%', '.', 'DEL', '=', 'AC', '00', 'Escape'];

// Limpiar la pantalla de la calculadora
const eliminarResultado = () => result.innerHTML = '';

//Eliminar valores escritos en la pantallas uno x uno
const eliminarValor = () => result.innerText = result.innerText.slice(0, -1);

function determinarOperacion(valor) {
    if (teclas.includes(valor)) {
        switch (valor) {
            case 'DEL': case 'Backspace': eliminarValor();
                break;
            case 'Enter': case '=': calcularOperacion(result.innerText);
                break;
            case '%': calcularPorcentaje(result.innerText);
                break;
            case 'AC': case 'Escape': eliminarResultado();
                break;
            case '00': result.innerText = result.innerText + '00';
                break;
            default:
                result.innerText += valor;
                break;
        };
    };
};

function calcularOperacion(operacion) {
    try {
        const resultado = eval(operacion);
        if (!isNaN(resultado)) {
            result.innerText = resultado;
        };
    } catch (error) {
        alert('Por favor, ingrese bien la operacion');
    };
};

function calcularPorcentaje(valor) {
    const porcentaje = valor * 0.01;
    if (!isNaN(porcentaje)) {
        result.innerText = porcentaje;
    };
};

//Eventos de la pantalla (Ingreso por teclado y click en los botones)
document.body.addEventListener('keydown', (e) => determinarOperacion(e.key));
calculadora.addEventListener('click', (event) => determinarOperacion(event.target.innerText));