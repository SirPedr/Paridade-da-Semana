const primeiroDiaAno = new Date(2019, 0, 0),
     semanaEmMilisegundos = 1000 * 3600 * 168,
     calcularQtSemanas = (data1, data2) => Math.ceil((data2.getTime() - data1.getTime()) / semanaEmMilisegundos);

primeiroDiaAno.setDate(primeiroDiaAno.getDate() - 2); //2019 começou na terça, mas a semana começa no domingo

let containerResultado = document.querySelector('#resultado'),
    paridadeAtual = calcularQtSemanas(primeiroDiaAno, new Date());

containerResultado.innerHTML += paridadeAtual % 2 === 0? "par" : "ímpar";

document.querySelector('#verificarParidade').addEventListener('click', () => {
    let dataEscolhida = new Date(document.querySelector('input[type="date"]').value),
        qtDeSemanas = calcularQtSemanas(primeiroDiaAno, dataEscolhida);

    containerResultado.innerHTML = qtDeSemanas % 2 === 0 ? "Semana par" : "Semana ímpar";
})