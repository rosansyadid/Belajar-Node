/*
Operator
1. Aritmatika: +, -, *, /, ++, --, **
2. Assignment: =
3. Logika: && (AND), || (OR),! (NOT)
4. Relasional: <, >, <=, >=, ==, ===, !=, !==
*/

/*
Aritmatika
1.Angka
2.Operasi
Operator
1. + ---> Addition (pejumlahan)
2. - ---> Subtraction (pengrangan)
3. / ---> Division (pembagian)
4. * ---> Multipication perkalian
5. ++ ---> Increment (penjumlahan 1)
6. -- ---> Decrement (pengurangan 1)
7. ** ---> Exponential (perpangkatan)
8. % ---> Modulus (

    Binary
+,-,/,*,**,%

    Unary
++, --
*/

let angka = 5;
angka ++; //6
angka + 1 //6

angka --; //4
angka - 1; //4

angka **2
3**4

// Operand
let angka1 = 10
angka1 = angka1 * 20 // 10 + 20


/*
Operator
1. ! --> tidak sama dengan
2. && --> AND
3. || --> OR

Logika Matematika
*/

let number1 = 5
let number2 = 10
let result1 = number1 > number2; // false
let result2 = number1 < number2; // true
// console.log("Before Negation Result",result1);

let negationResult = !result1;
// console.log("Negation Result",negationResult)

/*
    Assignment --> Assign Value
1. =
2. +=
3. -=
4. *=
5. /=
6. **=
*/

let Assignment1 = 10;
Assignment1 = Assignment1 + 2;
// console.log(Assignment1)

/*
    Comparison --> Perbandingan
1. == --> membandingkan value
2. === --> membandingkan value & data type
3. != -->tidak sama dengan (cek value & data type)
4. >= 
5. <=
*/

let data1 = 50;
let data2 = 100;

let resultOfComparison = data1 === data2;
console.log(resultOfComparison);

/*
Ternary --> pengkondisian
abc ? "123" : "321"
*/

const ternaryExample = 58;
ternaryExample > 50 ? console.log("Di Atas 50") : console.log("Di Bawah 50")