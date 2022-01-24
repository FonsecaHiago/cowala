const obj = {
  fizz: "buzz",
  foo: null,
  bar: 42,
  carro: null,
  comida: "boa",
};


function faxina() {
  Object.keys(obj).forEach((item) => {
    if (obj[item] != null) {
      console.log(item + " = " + obj[item]);
    }
  });
}

faxina(obj);