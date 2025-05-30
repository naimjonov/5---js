// if1. Butun son berilgan. Agar berilgan son musbat bo`lsa, 1 ga oshiring, aks holda 2 ga kamaytiring. Hosil bo`lgan sonni ekranga chiqaruvchi programma tuzilsin.
// let a = -23;

// if (a > 0) {
//     a = a + 1;
//     console.log(a);
// } else {
//     a = a - 2;
//     console.log(a);
// }





// if2. Uchta butun son berilgan. Shu sonlar orasidan nechta musbat va manfiy son borligini aniqlovchi programma tuzilsin.

// let a = 2
// let b = -8
// let c = -9

// let musbat = 0
// let manfi = 0

// if (a > 0){
//     musbat++
// }else if(a < 0){
//     manfi++
// }
// if (b > 0){
//     musbat++
// }else if(b < 0){
//     manfi++
// }
// if (c > 0){
//     musbat++
// }else if(c < 0){
//     manfi++
// }
// console.log("musbatlar", musbat)
// console.log("manfilar", manfi)



// if3. Uchta son berilgan. Shu sonlarni avval kichigini keyin kattasini ekranga chiqaruvchi programma tuzilsin.

// let a = 2
// let b = -8
// let c = 9

// let kichik = Math.min(a , b , c)
// let katta = Math.max(a , b, c)

// console.log("kishig",kichik)
// console.log("katta", katta)




// if4. Uchta butun son berilgan. Shu sonlarni ikkitasi o`zaro teng, qolgan bittasini tartib raqami aniqlansin.
// let a = 3;
// let b = 3;
// let c = 5;

// if (a === b && a !== c) {
//     console.log("c son boshqacha");
// } else if (a === c && a !== b) {
//     console.log("b son boshqacha");
// } else if (b === c && b !== a) {
//     console.log("a son boshqacha ");
// } else {
//     console.log("ikitasi tengmas ,yoki uchtalasi teng");
// }




// if5. x haqiqiy soni berilgan. Quyidagi funksiya hisoblansin.

// agar x < -2 yoki x > 2 bo’lsa 2 * x 
// aks holda -3 * x;

// let x = 3

// let a = 0
// if (x < -2 || x > 2){
//     a = 2 * x
// } else {
//     a = -3 * x
// }

// console.log(a)







// if6. Butun son berilgan. Berilgan sonni "musbat toq", "musbat juft", "nol", “manfiy juft”, “manfiy toq” ekranga yozadigan programma tuzilsin.

// let son = -4;

// if (son === 0) {
//     console.log("son nol");
// } else if (son > 0) {
//     if (son % 2 === 0) {
//         console.log("musbat juft");
//     } else {
//         console.log("musbat toq");
//     }
// } else {
//     if (son % 2 === 0) {
//         console.log("manfiy juft");
//     } else {
//         console.log("manfiy toq");
//     }
// }



// if7. A va B haqiqiy sonlari beringan. Shu sonlarni shunday o'zgartirish kerakki, A son kichik B son katta bo`lsin. A va B ning qiymati ekranga chiqarilsin.

// let a = 10
// let b = 3
// if (a > b) {
//   let t = a
//   a = b
//   b = t
// }
// console.log(a, b)



// if8. A va B butun sonlari berilgan. Agar o`zgaruvchilar o`zaro teng bo`lmasa, A va B o`zgaruvchilari ularning yig'indisini o`zlashtirsin. Agar teng bo`lsa, 0 ni o`zlashtirsin. A va B ning qiymati ekranga chiqarilsin.

// let a = 2
// let b = 3
// if (a != b) {
//   let s = a + b
//   a = s
//   b = s
// } else {
//   a = 0
//   b = 0
// }
// console.log(a, b)




// if9. A va B butun sonlari berilgan. Agar o`zgaruvchilar o`zaro teng bo`lmasa, A va B bu sonlarning kattasini o`zlashtirsin. Agar teng bo`lsa, 0 ni o`zlashtirsin. A va B ning qiymati ekranga chiqarilsin.
// let a = 7
// let b = 5
// if (a != b) {
//   let m = a > b ? a : b
//   a = m
//   b = m
// } else {
//   a = 0
//   b = 0
// }
// console.log(a, b)



// if10. Uchta son berilgan. Shu sonlarni kichigini aniqlovchi programma tuzilsin.
// let a = 5
// let b = 8
// let c = 3
// let min = a
// if (b < min) {
//     min = b
// }
// if (c < min) {
//     min = c
// }
// console.log(min)




// if11. Uchta son berilgan. Shu sonlarni o`ratachasi (ya'ni katta va kichik sonlar orasidagi son) ni aniqlovchi programma tuzilsin.
// let a = 7
// let b = 3
// let c = 5
// let ortacha = 0
// if ((a > b && a < c) || (a < b && a > c)) ortacha = a
// if ((b > a && b < c) || (b < a && b > c)) ortacha = b
// if ((c > a && c < b) || (c < a && c > b)) ortacha = c
// console.log(ortacha)




// if12. Uchta son berilgan. Shu sonlarning yig'indisi eng katta bo'ladigan ikkitasini ekranga chiqaruvchi programma tuzilsin.

// let a = 4
// let b = 7
// let c = 5
// let x = a + b
// let y = b + c
// let z = a + c
// if (x >= y && x >= z) console.log(a, b)
// if (y >= x && y >= z) console.log(b, c)
// if (z >= x && z >= y) console.log(a, c)



// if15. To`rtta butun son berilgan. Shu sonlarni uchtasi o`zaro teng, qolgan bittasini tartib raqami aniqlansin.

// let a = 4
// let b = 4
// let c = 4
// let d = 2
// if (a == b && b == c) console.log(4)
// if (a == b && b == d) console.log(3)
// if (a == c && c == d) console.log(2)
// if (b == c && c == d) console.log(1)



// if16. x haqiqiy soni berilgan. Quyidagi funksiya hisoblansin.

// agar x≤ 0 bo’lsa -x;
// agar 0<x<2; x^2
// agar x≥2 bo’lsa 4


// let x = 1.5
// if (x <= 0) console.log(-x)
// if (x > 0 && x < 2) console.log(x * x)
// if (x >= 2) console.log(4)





// if17.Yil berilgan(musbat butun son).Berilgan yilda nechta kun borligini aniqlovchi programma tuzilsin.Kabisa yilida 366 kun bor, kabisa bo'lmagan yilda 365 kun bor. Kabisa yil deb 4 ga karrali yillarga aytiladi. Lekin 100 ga karrali yillar ichida faqat 400 ga karrali bo'lganlari kabisa yil hisoblanadi.Masalan 300, 1300 va 1900 kabisa yili emas. 1200 va 2000 kabisa yili.

// let y = 2000
// if (y % 400 == 0 || (y % 4 == 0 && y % 100 != 0)) console.log(366)
// else console.log(365)




