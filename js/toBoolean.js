//============================TO BOOLEAN=============================


//============================STRING TO BOOLEAN=============================

//=================СТРОКА С ТЕКСТОМ К БУЛЕАНУ===========================
let value = "bla bla bla";

let toBoolean =Boolean(value);
console.log(toBoolean);
console.log(typeof toBoolean);

toBoolean = !!value;
console.log(toBoolean);
console.log(typeof toBoolean);

//=================СТРОКА С ЧИСЛОМ К БУЛЕАНУ===========================
value = "125";
console.log(value);
console.log(typeof value);

toBoolean =Boolean(value);
console.log(toBoolean);
console.log(typeof toBoolean);

toBoolean = !!value;
console.log(toBoolean);
console.log(typeof toBoolean);

//=================ПУСТАЯ СТРОКА К БУЛЕАНУ===========================
value = "";
console.log(value);
console.log(typeof value);

toBoolean =Boolean(value);
console.log(toBoolean);
console.log(typeof toBoolean);

toBoolean = !!value;
console.log(toBoolean);
console.log(typeof toBoolean);

//=================СТРОКА С ПРОБЕЛОМ К БУЛЕАНУ===========================
value = " ";
console.log(value);
console.log(typeof value);

toBoolean =Boolean(value);
console.log(toBoolean);
console.log(typeof toBoolean);

toBoolean = !!value;
console.log(toBoolean);
console.log(typeof toBoolean);


//============================NUMBER TO BOOLEAN=============================
value = 0;
console.log(value);
console.log(typeof value);

toBoolean =Boolean(value);
console.log(toBoolean);
console.log(typeof toBoolean);

toBoolean = !!value;
console.log(toBoolean);
console.log(typeof toBoolean);


value = 1;
console.log(value);
console.log(typeof value);

toBoolean =Boolean(value);
console.log(toBoolean);
console.log(typeof toBoolean);

toBoolean = !!value;
console.log(toBoolean);
console.log(typeof toBoolean);


//============================NaA TO BOOLEAN=============================
value = NaN;
console.log(value);
console.log(typeof value);

toBoolean =Boolean(value);
console.log(toBoolean);
console.log(typeof toBoolean);

toBoolean = !!value;
console.log(toBoolean);
console.log(typeof toBoolean);



//============================INFINITY TO BOOLEAN=============================
value = Infinity;
console.log(value);
console.log(typeof value);

toBoolean =Boolean(value);
console.log(toBoolean);
console.log(typeof toBoolean);

toBoolean = !!value;
console.log(toBoolean);
console.log(typeof toBoolean);




//============================NULL TO BOOLEAN=============================
value = null;
console.log(value);
console.log(typeof value);

toBoolean =Boolean(value);
console.log(toBoolean);
console.log(typeof toBoolean);

toBoolean = !!value;
console.log(toBoolean);
console.log(typeof toBoolean);




//============================UNDEFINED TO BOOLEAN=============================
value = undefined;
console.log(value);
console.log(typeof value);

toBoolean =Boolean(value);
console.log(toBoolean);
console.log(typeof toBoolean);

toBoolean = !!value;
console.log(toBoolean);
console.log(typeof toBoolean);