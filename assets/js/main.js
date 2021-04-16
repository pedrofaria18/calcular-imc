const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const inputPeso = document.querySelector('#peso');
  const inputAltura = document.querySelector('#altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  validateForm(peso, altura);
})

function validateForm(peso, altura) {
  if(!peso) setResult("Peso inválido");
  else if(!altura) setResult("Altura inválida");
  else { 
    const imc = calculateImc(peso, altura);
    const nivelImc = getImcLevel(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc})`

    setResult(msg)
  }
}

function calculateImc(peso, altura) {
  const imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function getImcLevel(imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  if(imc < 18.5) return nivel[0];
  else if(imc >= 18.5 && imc <= 24,9) return nivel[1];
  else if(imc >= 25 && imc <= 29,9) return nivel[2];
  else if(imc >= 30 && imc <= 34,9) return nivel[3];
  else if(imc >= 35 && imc <= 39,9) return nivel[4];
  else return nivel[5];
}

function setResult(msg) {
  const result = document.querySelector('#result');
  result.innerHTML = msg;
}