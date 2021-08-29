//BÀI TẬP MẢNG

//TẠO MẢNG
var numArray = [];
function addElement() {
    var num = parseInt(document.querySelector("#inputNumber").value);
    numArray.push(num);
    console.log(numArray);
    document.getElementById("txt0").innerHTML = String("Mảng: " + numArray);
}
document.getElementById("btn0").onclick = addElement;


//BÀI 1 - TỔNG CÁC SỐ DƯƠNG TRONG MẢNG
function sumInt() {
    var sum = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            sum += numArray[i];
        }
    }
    console.log(sum);
    document.getElementById("txt1").innerHTML = String("Tổng của các số dương: " + sum);
}
document.getElementById("btn1").onclick = sumInt;



//BÀI 2 - ĐẾM SỐ DƯƠNG TRONG MẢNG
function countPosInt() {
    var count = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            count++;
        }
    }
    console.log(count);
    document.getElementById("txt2").innerHTML = String("Số lượng số nguyên dương: " + count);
}
document.getElementById("btn2").onclick = countPosInt;



//BÀI 3 - TÌM SỐ NHỎ NHẤT TRONG MẢNG
function findMin() {
    var viTri = 0;
    var min = numArray[viTri];
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] < min) {
            viTri = i;
            min = numArray[i];
        }
    }
    document.getElementById("txt3").innerHTML = String("Số nhỏ nhất mảng: " + min);
}
document.getElementById("btn3").onclick = findMin;



//BÀI 4 - TÌM SỐ DƯƠNG NHỎ NHẤT TRONG MẢNG
function findMinPosInt() {
    var viTri = 0;
    var min = numArray[viTri];
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0 && numArray[i] < min) {
            viTri = i;
            min = numArray[i];
        }
    }
    document.getElementById("txt4").innerHTML = String("Số dương nhỏ nhất mảng: " + min);
}
document.getElementById("btn4").onclick = findMinPosInt;



//BÀI 5 - TÌM SỐ CHẴN CUỐI CÙNG TRONG MẢNG. NẾU MẢNG KHÔNG CÓ GIÁ TRỊ THÌ TRẢ VỀ -1
function fineLastPosInt() {
    var viTri;
    var last = numArray[viTri]
    if (numArray.length > 0) {
        for (var i = 0; i < numArray.length; i++) {
            if (numArray[i] % 2 == 0) {
                viTri = i;
                last = numArray[i];
            }else{
                last = "Không có số chẵn";
            }
        }
        document.getElementById("txt5").innerHTML = String("Số chẵn cuối cùng trong mảng: " + last);
    } else {
        console.log("Mảng trống");
        document.getElementById("txt5").innerHTML = String("Mảng không có giá trị: -1");
    }
}
document.getElementById("btn5").onclick = fineLastPosInt;



//BÀI 6 - ĐỔI CHỖ 2 GIÁ TRỊ TRONG MẢNG
function exchangeIndex() {
    var index1 = document.getElementById("doiCho1").value;
    var index2 = document.getElementById("doiCho2").value;
    var temp = 0;
    [numArray[index1], numArray[index2]] = [numArray[index2], numArray[index1]]

    console.log(numArray);
    document.getElementById("txt6").innerHTML = String("Mảng sau khi đổi " + numArray);
}
document.getElementById("btn6").onclick = exchangeIndex;



//BÀI 7 - SẮP XẾP MẢNG THEO THỨ TỰ TĂNG DẦN
function sapXepTang() {
    //duyệt lại mảng nhiều lần
    for (var i = 0; i < numArray.length; i++) {
        for (var j = 0; j < numArray.length - 1; j++) {
            if (numArray[j] > numArray[j + 1]) {
                //hoán đổi giá trị
                var temp = numArray[j];
                numArray[j] = numArray[j + 1];
                numArray[j + 1] = temp;
            }
        }
    }
    console.log(numArray);
    document.getElementById("txt7").innerHTML = String("Mảng sau sắp xếp " + numArray);
}
document.getElementById("btn7").onclick = sapXepTang;



//BÀI 8 - TÌM SỐ NGUYÊN TỐ ĐẦU TIÊN TRONG MẢNG
//Hàm kiểm tra số nguyên tố
function kiemTraSNT(n) {
    // Biến cờ hiệu
    var flag = true;
    // Nếu n bé hơn 2 tức là không phải số nguyên tố
    if (n < 2) {
        flag = false;
    }
    else if (n == 2) {
        flag = true;
    }
    else if (n % 2 == 0) {
        flag = false;
    }
    else {
        // lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
        for (var i = 3; i <= Math.sqrt(n); i += 2) {
            if (n % i == 0) {
                flag = false;
                break;
            }
        }
    }

    return flag;
}
//Hàm tìm số nguyên tố đầu tiên
function timSNT() {
    for (var i = 0; i < numArray.length; i++) {
       var flag = kiemTraSNT(numArray[i]);
        if (flag == true) {
            var num = numArray[i];
            console.log(num);
            break;
        }
    }
    document.getElementById("txt8").innerHTML = String("Số nguyên tố đầu tiên: " + num);
}
document.getElementById("btn8").onclick = timSNT;



//BÀI 9 - ĐẾM SỐ NGUYÊN TRONG MẢNG 
//Hàm nhập vào mảng số thực
var numArray1 = [];
function addElement1() {
    var num = parseFloat(document.querySelector("#inputSoThuc").value);
    numArray1.push(num);
    console.log(typeof(numArray1));
    document.getElementById("txt9a").innerHTML = String("Mảng số thực: " + numArray1);
}
document.getElementById("btn9a").onclick = addElement1;

//Hàm đếm số nguyên trong mảng số thực
function sumINT(){
    var count = 0;
for (var i = 0; i < numArray1.length; i++){
  if(Number.isInteger(numArray1[i])){
      count++;
  }
}
console.log ("count  " +count);
document.getElementById("txt9").innerHTML = String("Tổng các số nguyên trong mảng: " +count);
}
document.getElementById("btn9").onclick = sumINT;



//BÀI 10 - SO SÁNH SỐ DƯƠNG VÀ SỐ ÂM
function sumNevPos() {
    var sumPos = 0;
    var sumNev = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            sumPos ++;
        }else if (numArray[i] < 0){
            sumNev ++;
        }
    }
    console.log(sumPos, sumNev);
    if (sumPos>sumNev){
        document.getElementById("txt10").innerHTML = String("Số dương > Số âm");
    }else if(sumPos<sumNev){
        document.getElementById("txt10").innerHTML = String("Số dương < Số âm");
    }else if (sumPos=sumNev){
        document.getElementById("txt10").innerHTML = String("Số dương = Số âm");
    
    }
} 
document.getElementById("btn10").onclick = sumNevPos;

