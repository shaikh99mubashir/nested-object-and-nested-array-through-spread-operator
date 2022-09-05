let mobiles = {
  iphone: {
    v14: {
      ram: 2,
      rom: 3,
      price: 4665,
    },
    v13: {
      ram: 2,
      rom: 3,
      price: 464665,
    },
    v15: {
      ram: 2,
      rom: 3,
      price: 464665,
    },
  },
  samsung: {
    s14: {
      ram: 2,
      rom: 3,
      price: 464665,
    },
    s13: {
      ram: 2,
      rom: 3,
      price: 464665,
    },
    s15: {
      ram: 2,
      rom: 3,
      price: 464665,
    },
  },
  xiomi: {
    x14: {
      ram: 2,
      rom: 3,
      price: 464665,
    },
    x13: {
      ram: 2,
      rom: 3,
      price: 464665,
    },
    x15: {
      ram: 2,
      rom: 3,
      price: 464665,
    },
  },
  infinix: {
    hot14: {
      ram: 2,
      rom: 3,
      price: 464665,
    },
    hot13: {
      ram: "2GB",
      rom: '3GB',
      price: '464665',
    },
    hot15: {
      ram: 2,
      rom: 3,
      price: '464665',
    },
  },
};

document.write(`<h1>Nested Object</h1>`)
let nestedObj = { ...mobiles.infinix.hot13 };
console.log(nestedObj);
let value1 = Object.keys(nestedObj)
let value2 = Object.values(nestedObj)
document.write(value1+"<br>");
document.write(value2);

document.write(`<h1>Nested Array</h1>`)
let nestedArray = [
['iphone',['v14',['ram:2gb','memory:2gb','price:265161']]],
['infinix',['hot10',['ram:2gb','memory:2gb','price:56188']]],
['samsung',['A32',['ram:2gb','memory:2gb','price:268561']]],
['tecno',['s8',['ram;2gb','memory:2gb','price:2661']]],
            ]
let copy = [...nestedArray];
document.write(copy[0][1][1] + "<br>"+copy[1][1][1]+ "<br>"+copy[2][1][1] + "<br>"+copy[3][1][1] + "<br>");

