// ==================== NUMBER TO SPRING===========================
console.log(`toString`);

let value = 0;

// 1-st way
let toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

// 2-nd way
toString = value + '';
console.log(`${value}, через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);



value = 1;

// 1-st way
toString = String(value);
console.log(`${value}, через конструктор String():` , toString );
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString );

// 2-nd way
toString = value+'';
console.log(`${value}, через конструктор String():`, toString);
console.log(`тип данных ${value}, через конструктор String():`, typeof toString);



value = Infinity;

console.log(value);
console.log(typeof value);

toString = String(value);
console.log(toString);
console.log(typeof toString);

toString = value+'';
console.log(toString);
console.log(typeof toString);


value = NaN;

console.log(value);
console.log(typeof value);

toString = String(value);
console.log(toString);
console.log(typeof toString);

toString = value+'';
console.log(toString);
console.log(typeof toString);


// ======================BOOLEAN TO STRING================================================

value = true;

console.log(value);
console.log(typeof value);

toString = String(value);
console.log(toString);
console.log(typeof toString);

toString = value + "";
console.log(toString);
console.log(typeof toString);


value = false;

console.log(value);
console.log(typeof value);

toString = String(value);
console.log(toString);
console.log(typeof toString);

toString = value + "";
console.log(toString);
console.log(typeof toString);


// =============================UNDEFINED TO STRING=======================================

value = undefined;

console.log(value);
console.log(typeof value);

toString = String(value);
console.log(toString);
console.log(typeof toString);

toString = value + "";
console.log(toString);
console.log(typeof toString);


//===============================NULL TO STRING=========================================

value = null;

console.log(value);
console.log(typeof value);

toString = String(value);
console.log(toString);
console.log(typeof toString);

toString = value+'';
console.log(toString);
console.log(typeof toString);