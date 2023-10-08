// 1. if, else, dan nested if
let usia = 20;
let pendapatan = 45000;

if (usia >= 18) {
  console.log("Anda adalah dewasa.");

  if (pendapatan >= 25000) {
    console.log("Anda memiliki pendapatan yang cukup.");
  } else {
    console.log("Anda membutuhkan peningkatan pendapatan.");
  }
} else {
  console.log("Anda masih anak-anak.");
}

// 2. switch case
let operator = "/";
let angka1 = 20;
let angka2 = 2;
let hasil;

switch (operator) {
  case "+":
    hasil = angka1 + angka2;
    break;
  case "-":
    hasil = angka1 - angka2;
    break;
  case "*":
    hasil = angka1 * angka2;
    break;
  case "/":
    hasil = angka1 / angka2;
    break;
  default:
    console.log("Operator tidak valid.");
}

console.log(`Hasil operasi: ${hasil}`);

// 3. for statement
for (let i = 1; i <= 5; i++) {
  console.log(`ke-${i}`);
}

// 4. while statement
let a = 1;
while (a <= 5) {
  console.log(`ke-${a}`);
  a++;
}

// 5. do-while statement
let b = 1;
do {
  console.log(`ke-${a}`);
  b++;
} while (b <= 5);

// 6. Function
function tambahkan(angka1, angka2) {
    return angka1 + angka2;
  }
  
  const hasil2 = tambahkan(45, 9);
  console.log(`Hasil: ${hasil2}`);
