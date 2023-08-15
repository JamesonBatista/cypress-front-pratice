document.addEventListener("DOMContentLoaded", function () {
    const alphabetButtons = document.querySelectorAll(".alphabet-btn");
    const textField = document.getElementById("text-field");

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Função para embaralhar o alfabeto
    function shuffleAlphabet() {
        const shuffledAlphabet = alphabet.split("").sort(() => 0.5 - Math.random()).join("");
        return shuffledAlphabet;
    }

    // Preenche o campo de texto com a letra clicada
    alphabetButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const letter = button.textContent;
            textField.value += letter;
        });
    });

    // Embaralha o alfabeto ao recarregar a página
    const shuffledAlphabet = shuffleAlphabet();
    for (let i = 0; i < alphabetButtons.length; i++) {
        alphabetButtons[i].textContent = shuffledAlphabet[i];
    }
});

function realizarLogin() {
    const loginInput = document.getElementById("login");
    const mensagemLogin = document.getElementById("mensagem-login");

    if (loginInput.value) {
        mensagemLogin.textContent = "Login realizado com sucesso.";
    } else {
        mensagemLogin.textContent = "";
    }
}

function adicionarItem() {
    const lista = document.getElementById("lista");
    const newItem = document.createElement("li");
    newItem.textContent = "Novo Item " + (lista.childElementCount + 1);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    deleteButton.onclick = function () { excluirItem(newItem); };
    newItem.appendChild(deleteButton);
    lista.appendChild(newItem);
}

function excluirItem(item) {
    item.parentNode.removeChild(item);
}

function alternarMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("menu-hidden");
}

function verificarSoma() {
    const numero1 = parseInt(document.getElementById("numero1").value);
    const numero2 = parseInt(document.getElementById("numero2").value);
    const resultadoInput = document.getElementById("resultado");
    const mensagemCalculo = document.getElementById("mensagem-calculo");

    if (isNaN(numero1) || isNaN(numero2)) {
        mensagemCalculo.textContent = "Digite números válidos.";
        return;
    }

    const resultadoSoma = numero1 + numero2;
    const resultadoDigitado = parseInt(resultadoInput.value);

    if (resultadoDigitado === resultadoSoma) {
        mensagemCalculo.textContent = "Resultado correto!";
    } else {
        mensagemCalculo.textContent = "Resultado incorreto.";
    }
}
// Função para gerar um número aleatório entre min e max
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para preencher os campos com números aleatórios
function fillRandomNumbers() {
    const randomNumber1 = generateRandomNumber(1, 999);
    const randomNumber2 = generateRandomNumber(1, 999);

    document.getElementById('random-number-1').value = randomNumber1;
    document.getElementById('random-number-2').value = randomNumber2;
}

// Event listener para o botão de calcular
document.getElementById('calculate-btn').addEventListener('click', function () {
    const randomNumber1 = parseInt(document.getElementById('random-number-1').value);
    const randomNumber2 = parseInt(document.getElementById('random-number-2').value);
    const result = parseInt(document.getElementById('result').value);

    if (isNaN(randomNumber1) || isNaN(randomNumber2) || isNaN(result)) {
        alert('Por favor, preencha os números corretamente.');
        return;
    }

    if (randomNumber1 + randomNumber2 === result) {
        alert('Correto! A soma está certa.');
    } else {
        alert('Incorreto! A soma está errada.');
    }
});

// Preencher números aleatórios no carregamento da página
window.onload = fillRandomNumbers;
