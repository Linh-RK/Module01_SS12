// Bài 1
// Bài 1: Nhập vào hai số a và b, và kiểm tra xem a có chia hết cho b hay không
// Bài 2: Nhập tuổi và in ra kết quả nếu tuổi học sinh đó không đủ điều kiện vào học lớp 10.
// Bài 3: Nhập một số nguyên bất kỳ và in kết quả ra màn hình để nói cho người dùng biết số đó là lớn hay nhỏ hơn 0
// Bài 4: Nhập 3 số nguyên và tìm giá trị lớn nhất của ba số nguyên đó
// Bài 5: Xếp hạng học lực của học sinh dựa trên các điểm bài kiểm tra, điểm thi giữa kỳ, điểm thi cuối kỳ
// ======================================================
// Bài 1: Nhập vào hai số a và b, và kiểm tra xem a có chia hết cho b hay không
// let a = +prompt("Moi ban nhap vao so a");
// let b = +prompt("Moi ban nhap vao so b");
// if (a % b == 0) {
//   console.log("a chia het cho b");
// } else {
//   console.log("a khong chia het cho b");
// }
// ======================================================
// Bài 2: Nhập tuổi và in ra kết quả nếu tuổi học sinh đó không đủ điều kiện vào học lớp 10.
// let age = +prompt("Moi ban nhap vao so tuoi");
// if (age < 0 || age % 1 !== 0) {
//   alert("Moi ban nhap lai tuoi");
// } else {
//   if (age < 16) {
//     console.log("ban chua du dieu kien vao lop 10");
//   }
// }
// ======================================================
// Bài 3: Nhập một số nguyên bất kỳ và in kết quả ra màn hình để nói cho người dùng biết số đó là lớn hay nhỏ hơn 0
// let a = +prompt("Moi ban nhap vao mot so nguyen");
// if (a % 1 !== 0) {
//   alert(`so ban nhap khong phai la so nguyen`);
// } else {
//   if (a > 0) {
//     console.log(` ${a} la so nguyen duong`);
//   } else if (a == 0) {
//     console.log(`so 0`);
//   } else {
//     console.log(` ${a} la so nguyen am`);
//   }
// }
// ======================================================
// Bài 4: Nhập 3 số nguyên và tìm giá trị lớn nhất của ba số nguyên đó
// let a = +prompt("Moi ban nhap vao so a");
// let b = +prompt("Moi ban nhap vao so b");
// let c = +prompt("Moi ban nhap vao so c");
// let max;
// if (a > b && a > c) {
//   console.log(`Gia tri lon nhat la ${a}`);
// } else if (b > a && b > c) {
//   console.log(`Gia tri lon nhat la ${b}`);
// } else {
//   console.log(`Gia tri lon nhat la ${c}`);
// }
// ======================================================
// Bài 5: Xếp hạng học lực của học sinh dựa trên các điểm bài kiểm tra, điểm thi giữa kỳ, điểm thi cuối kỳ
// let diemKiemTra = +prompt("Moi ban nhap vao diem kiem tra");
// let diemGiuaKi = +prompt("Moi ban nhap vao diem giua ki");
// let diemCuoiKy = +prompt("Moi ban nhap vao diem cuoi ki");
// let average = (diemKiemTra + diemGiuaKi + diemCuoiKy) / 3;
// if (average >= 8.5 && average <= 10) {
//   console.log("Hoc sinh gioi");
// } else if (average >= 7 && average < 8.5) {
//   console.log("Hoc sinh kha");
// } else if (average >= 5 && average < 7) {
//   console.log("Hoc sinh trung binh");
// } else {
//   console.log("Hoc sinh yeu");
// }
// ======================================================
// ======================================================
// ======================================================
// SS12

// ======================================================
// Bài 1: Sử dụng vòng lặp để đếm từ 1 đến 100. Khi số là 99, hiển thị hộp thoại thông báo là đã hoàn thành.
// let i = 1;
// while (i < 100) {
//   console.log(i);
//   i++;
//   if (i == 99) {
//     alert("hoan thanh");
//   }
// }

// for (let i = 1; i < 100; i = i + 1) {
//   if (i == 99) {
//     alert("hoan thanh");
//   } else {
//     console.log(i);
//   }
// }
// // ======================================================
// Bài 2: Sử dụng hàm prompt() để lấy thông tin nhiệt độ hiện tại được nhập bởi người truy cập. Nếu nhiệt độ nhập vào trên 100, yêu cầu người dùng giảm nhiệt độ. Nếu nhiệt độ dưới 20, yêu cầu người dùng tăng nhiệt độ.
// let temp = +prompt("Moi ban nhap nhiet do hien tai");
// if (temp < 20) {
//   alert("Vui long tang nhiet do");
// } else if (temp > 100) {
//   alert("Vui long giam nhiet do");
// }
// ======================================================
// Bài 3: Hiển thị ra 20 số trong dãy fibonacci đầu tiên.
// let fi1 = 0;
// let fi2 = 1;
// let finext;
// for (let i = 3; i < 20; i = i + 1) {
//   finext = fi1 + fi2;
//   fi1 = fi2;
//   fi2 = finext;
//   console.log(finext);
// }

// ======================================================
// Bài 4: Tìm số đầu tiên trong dãy fibonacci chia hết cho 5.
// let fi1 = 0;
// let fi2 = 1;
// let finext;
// for (let i = 3; ; i = i + 1) {
//   finext = fi1 + fi2;
//   fi1 = fi2;
//   fi2 = finext;
//   if (finext % 5 == 0) {
//     console.log(`so chia het cho 5 dau tien trong dau fibonacy la ${finext}`);
//     break;
//   }
// }
// ======================================================
// Bài 5: Tính tổng của 20 số đầu tiên trong dãy fibonacci.
// let fi1 = 0;
// let fi2 = 1;
// let finext;
// let sum = 1;
// for (let i = 3; i < 20; i = i + 1) {
//   finext = fi1 + fi2;
//   fi1 = fi2;
//   fi2 = finext;
//   sum = sum + finext;
// }
// console.log(sum);
// ======================================================
// Bài 6: Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên.
// let sum = 0;
// let count = 0;
// for (let i = 1; ; i = i + 1) {
//   if (i % 7 == 0) {
//     sum = sum + i;
//     count = count + 1;
//     if (count == 30) {
//       console.log(sum);
//       break;
//     }
//   }
// }
// ======================================================
// Bài 7: Hãy viết một chương trình in ra các số từ 1 đến 100. Nhưng nếu số chia hết cho 3 thì in ra "Fizz", 5 thì in ra "Buzz" thay vì in ra số đó. Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ "FizzBuzz".
for (let i = 1; i <= 100; i = i + 1) {
  if (i % 3 == 0 && i % 5 !== 0) {
    console.log("Fizz");
  } else if (i % 3 !== 0 && i % 5 == 0) {
    console.log("Buzz");
  } else if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else {
    console.log(i);
  }
}
// // ======================================================
// Bài 8: Game đoán số Nâng cấp game "Hãy thử đoán xem!"
// Thiết kế giao diện gồm 1 Button "Chơi": cho phép người dùng bắt đầu chơi hoặc chơi lại

// Mô tả ứng dụng: Khi người dùng nhấn vào button “Chơi”:

// Ứng dụng hiển thị cửa sổ prompt cho phép người dùng nhập vào muốn đoán trong khoảng nào

// Ứng dụng chọn ra số ngẫu nhiên trong khoảng mà ngườI dùng chọn

// Ứng dụng hiển thị cửa số prompt cho người dùng nhập giá trị mà người dùng đoán

// Ứng dụng lấy kết quả và so sánh với giá trị ngẫu nhiên :

// o Nếu bằng thì hiển thị thông báo chúc mừng và kết thúc lượt chơi

// o Nếu lớn hơn hoặc bé thua thì hiển thị thông báo lớn hơn hay bé thua và cho phép người dùng lựa chọn lại.
// ======================================================
// TÍNH TỐNG 20 SÓ NGUYÊN TỐ ĐẦU TIÊN
// input
// output
// 2. phân tích thông tin input có mối quan hệ gid vs nahu làm gì để ra thuật toan
//
// 3/ design phù hợp nhất không có giái pháp tốt nhất
//
// hieu năng ứng dung
// cshatang tai nguyen
// 4. develop đưa ra
// flow các bước thưc hiện NHẤT ĐỊNH PHẢI LÀM FLOW TRƯƠC KHI VIẾT CODE
// 5. test hộp đen hộp trắng
// 6. review lại code tìm xem có cách nào tốt hơn không
// 7. nên sửa bài cho các bạn
// ======================================================
// let n = + prompt("mơi ban nhap vao so n");
// for (let i = 2; i <= Math.sqrt(n); i = i + 1){
//     if (n % i !== 0){

//     }
// }
