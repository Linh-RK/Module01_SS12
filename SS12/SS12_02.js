// khai báo mà chưa gán giá trị chạm vào biến sẽ báo undefined
// chưa khai báo mà chạm vào biến sẽ báo lỗi
// Bài 1: In dãy Fibonaci
// let f1 = 0;
// let f2 = 1;
// let fnext;
// for (let i = 3; i <= 20; i = i + 1) {
//   fnext = f1 + f2;
//   f1 = f2;
//   f2 = fnext;
//   console.log(fnext);
// }

// ======================================================
// Bài 2: Tính giai thừa của một số nguyên dương
// let n = +prompt("moi ban nhap vao so n");
// let result = 1;
// for (let i = 1; i <= n; i = i + 1) {
//   result = result * i;
// }
// console.log(result);
// ======================================================
// Bài 3: In tam giác vuông. Các góc vuông nằm ở các vị trí khác nhau

// for (let i = 1; i <= 5; i = i + 1) {
//   for (let j = 1; j <= i; j = j + 1) {
//     document.write("*");
//   }
//   document.write("<br />\n");
// }
// ======================================================
// for (let line = "*"; line.length < 6; line += "*") {
//   document.write(line);
//   document.write("<br />\n");
// }
// ======================================================
// for (let i = 1; i <= 5; i = i + 1) {
//   for (let j = 1; j <= i; j = j + 1) {
//     document.write("*");
//   }
//   document.write("<br />\n");
// }

// ======================================================
// Bài 4: In hình chữ nhật rỗng

// ======================================================
// Bài 5: In hình trái tim
// ======================================================
// Bài 6: Viết chương trình tính lãi ngân hàng (lãi mẹ đẻ lại con) khi biết số tiền ban đầu, số tháng cho vay và lãi xuất hàng tháng.for

// for (let i = 1; i <= 9; i = i + 1) {
//   for (let j = 1; j <= 9; j = j + 1) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }
// HIỂN THỊ 20 SỐ NGUYÊN TỐ ĐẦU TIÊN
// let n = +prompt("Moi ban nhap vao so n");
// let count = 0;
// // if (n % 6 == 1 || n % 6 == 5)
// for (let i = 1; ; i = i + 1) {
//   if (i % 6 == 1 || i % 6 == 5) {
//     for (let j = 2; j <= Math.sqrt(i); j = j + 1) {
//       if (i % j !== 0) {
//         count = count + 1;
//         if (count < 21) {
//           console.log(i);
//         }
//       }
//     }
//   }
// }

// CHƯA ĐƯỢC NHÁ TÝ LÀM LẠI ĐI
// kiểm tra xem dữ liệu nhập vào có phải là "phải không là số hay không"
// Number.isNaN("a") = True
// ========================================================
// BÀI 1: Viết chương trình hiển thị bình phương của số nguyên từ 2 🡪 N nhưng hiển thị các kết quả chia hết cho 2.. N nhập từ người dùng. Nếu N < 2 hoặc N > 100, thông báo người dùng nhập lại.
// let n = +prompt("Moi ban nhap vao so tu nhien N(2 - 100)");
// if (!Number.isNaN(n) && n >= 2 && n <= 100) {
//   for (let i = 1; i <= n; i = i + 1) {
//     if (i % 2 == 0) {
//       console.log(`${i ** 2}`);
//     }
//   }
// }
// CO THE let i = 2; i <= n; i = i + 2 THI K CAN IF
// ========================================================

// BÀI 2: Viết chương trình hiển thị bình phương của số chẵn từ 2 🡪 N. N nhập từ người dùng. Nếu N < 2 hoặc N > 100, thông báo người dùng nhập lại.
// ========================================================

// BÀI 3: Viết chương trình hiển thị thay đổi 10 màu sắc ngẫu nhiên khi hiển thị console.log()
// console.log(
//     "%cxin chao",
//     `background-color: skyblue;
//       color: rgb(0,0,0);`
//   );

// for (let i = 1; i <= 10; i = i + 1) {
//   console.log(
//     "%cxin chao",
//     `background-color: skyblue;
//           color: rgb(${Math.floor(Math.random() * 256)},${Math.floor(
//       Math.random() * 256
//     )},${Math.floor(Math.random() * 256)});`
//   );
// }

// console.log(
//   "%cxin chao",
//   `background-color: skyblue;
//     color: rgb(${Math.floor(Math.random() * 256)},${Math.floor(
//     Math.random() * 256
//   )},${Math.floor(Math.random() * 256)});`
// );
// Math.random() * 256;
// Math.floor(Math.random() * 256);

// ========================================================

// BÀI 5: Viết chương trình kiểm tra số N có phải là số nguyên tố không? N nhập từ browser
// KÝ THUẬT CẮM CỜ

// let check = true;
// let n = +prompt("Moi ban nhap vao so n");
// for (let i = 2; i < n; i = i + 1) {
//   if (n % i == 0) {
//     check = false;
//     // break;
//   }
// }
// if (check == true) {
//   console.log(`${n} la so nguyen to`);
// } else {
//   console.log(`${n} khong la so nguyen to`);
// }
// ========================================================
// SO HOAN HAO
// let sum = 0;
// let n = +prompt("Moi ban nhap vao so n");
// for (let i = 1; i < n; i = i + 1) {
//   if (n % i == 0) {
//     sum = sum + i;
//   }
// }
// if (sum == n) {
//   console.log(`${n} la so hoan hao`);
// } else {
//   console.log(`${n} khong la so hoan hao`);
// }
// ========================================================
// BÀI 7: In ra giai thừa của số nguyên dương N? N nhập từ browser
// let n = +prompt("Moi ban nhap vao so n");
// let gt = 1;
// for (let i = 1; i <= n; i = i + 1) {
//   gt = gt * i;
// }
// console.log(gt);
// ========================================================
// BÀI 8: In ra dãy 20 số Fibonaci đầu tiên
// let f1 = 0;
// let f2 = 1;
// let count;
// let fn;
// for (let i = 1; i < 21; i = i + 1) {
//   fn = f1 + f2;
//   f1 = f2;
//   f2 = fn;
//   console.log(fn);
// }

// lãi suất kép = P*(1+r/n)^n*t
// ========================================================
