const inputTxt = document.querySelector(".inputTxt");
const outputTxt = document.querySelector(".outputTxt");

//`La letra "e" es convertida para "enter"`
//`La letra "i" es convertida para "imes"`
//`La letra "a" es convertida para "ai"`
//`La letra "o" es convertida para "ober"`
//`La letra "u" es convertida para "ufat"`

function encriptar(stringEncrip) {
  let codigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  stringEncrip = stringEncrip.toLowerCase();

  for (let i = 0; i < codigo.length; i++) {
    if (stringEncrip.includes(codigo[i][0])) {
      stringEncrip = stringEncrip.replaceAll(codigo[i][0], codigo[i][1]);
    }
  }
  return stringEncrip;
}

function btnEncriptar() {
  const txtEncriptado = encriptar(inputTxt.value);
  outputTxt.value = txtEncriptado;
  outputTxt.style.backgroundImage = "none";
  inputTxt.value = "";
}

function desencriptar(stringDesencrip) {
  let codigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  stringDesencrip = stringDesencrip.toLowerCase();

  for (let i = 0; i < codigo.length; i++) {
    if (stringDesencrip.includes(codigo[i][1])) {
      stringDesencrip = stringDesencrip.replaceAll(codigo[i][1], codigo[i][0]);
    }
  }
  return stringDesencrip;
}

function btnDesencriptar() {
  const txtDesencriptado = desencriptar(inputTxt.value);
  outputTxt.value = txtDesencriptado;
  outputTxt.style.backgroundImage = "none";
  inputTxt.value = "";
}

function copiar() {
  outputTxt.select();
  navigator.clipboard.writeText(outputTxt.value);
  outputTxt.value = "";
  alert("SE COPIÓ SU TEXTO");
}
