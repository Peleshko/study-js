// ===========================TO NUMBER===============================

//=======================STRING TO NUMBER=============================

//=================СТРОКА С ТЕКСТОМ К ЧИСЛУ===========================
let value = "bla bla bla";

let toNumber =Number(value);
console.log(toNumber);
console.log(typeof toNumber);

toNumber = +value;
console.log(toNumber);
console.log(typeof toNumber);


//=================СТРОКА С ЧИСЛОМ К ЧИСЛУ===========================
value = "125";
console.log(value);
console.log(typeof value);

toNumber =  Number(value);
console.log(toNumber);
console.log(typeof toNumber);

toNumber = +value;
console.log(toNumber);
console.log(typeof toNumber);


//=================ПУСТАЯ СТРОКА К ЧИСЛУ===========================
value = "";
console.log(value);
console.log(typeof value);

toNumber =  Number(value);
console.log(toNumber);
console.log(typeof toNumber);

toNumber = +value;
console.log(toNumber);
console.log(typeof toNumber);


//=================СТРОКА С ПРОБЕЛОМ К ЧИСЛУ===========================
value = " ";
console.log(value);
console.log(typeof value);

toNumber =  Number(value);
console.log(toNumber);
console.log(typeof toNumber);

toNumber = +value;
console.log(toNumber);
console.log(typeof toNumber);


//=======================BOOLEAN TO NUMBER===========================

value = true
console.log(value);
console.log(typeof value);

toNumber =  Number(value);
console.log(toNumber);
console.log(typeof toNumber);

toNumber = +value;
console.log(toNumber);
console.log(typeof toNumber);


value = false
console.log(value);
console.log(typeof value);

toNumber =  Number(value);
console.log(toNumber);
console.log(typeof toNumber);

toNumber = +value;
console.log(toNumber);
console.log(typeof toNumber);


//=======================NULL TO NUMBER===========================
value = null
console.log(value);
console.log(typeof value);

toNumber =  Number(value);
console.log(toNumber);
console.log(typeof toNumber);

toNumber = +value;
console.log(toNumber);
console.log(typeof toNumber);


//=======================UNDEFINED TO NUMBER===========================
value = undefined
console.log(value);
console.log(typeof value);

toNumber =  Number(value);
console.log(toNumber);
console.log(typeof toNumber);

toNumber = +value;
console.log(toNumber);
console.log(typeof toNumber);