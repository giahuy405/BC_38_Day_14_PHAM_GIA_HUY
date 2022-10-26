// Xuất 3 số theo thứ tự tăng dần
var btnArrange = document.getElementById('btnArrange');
btnArrange.onclick = function () {
    var number1 = Number(document.getElementById('number1').value);
    var number2 = Number(document.getElementById('number2').value);
    var number3 = Number(document.getElementById('number3').value);

    var arrangeNumber = document.getElementById('arrangeNumber');
    if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
        alert("nhập không hợp lệ");
    }
    // 9 8 7 
    else if (number1 >= number2 && number1 >= number3) {
        // 9 8 7 
        if (number2 >= number3) {
            arrangeNumber.innerHTML = number3 + ',' + number2 + ',' + number1;
        }
        else {
            // 9 7 8
            arrangeNumber.innerHTML = number2 + ',' + number3 + ',' + number1;
        }
    }
    // 8 9 7 
    else if (number2 >= number1 && number2 >= number3) {
        // 8 9 7 
        if (number1 >= number3) {
            arrangeNumber.innerHTML = number3 + ',' + number1 + ',' + number2;
        }
        // 7 9 8
        else {
            arrangeNumber.innerHTML = number1 + ',' + number3 + ',' + number2;
        }
    }
    // 7 8 9
    else if (number3 >= number1 && number3 >= number2) {
        // 7 8 9
        if (number2 >= number1) {
            arrangeNumber.innerHTML = number1 + ',' + number2 + ',' + number3;
        }
        // 8 7 9
        else {
            arrangeNumber.innerHTML = number2 + ',' + number1 + ',' + number3;
        }
    }
}


// Chào hỏi
var hello = document.getElementById('hello');
var btnHello = document.getElementById('btnHello');
var greeting = document.getElementById('greeting');
btnHello.onclick = function () {
    let hello = document.getElementById('hello');
    // gán giá trị cho từng cái option có selected*
    let giaTri = hello.options[hello.selectedIndex].text;
    switch (giaTri) {
        case 'Chọn thành viên': {
            alert('Vui lòng chọn thành viên');
            break;
        }
        case 'Bố': {
            greeting.innerHTML = 'Xin chào Bố!'
            break;
        }
        case 'Mẹ': {
            greeting.innerHTML = 'Xin chào Mẹ!'
            break;
        }
        case 'Anh trai': {
            greeting.innerHTML = 'Xin chào Anh trai!'
            break;
        }
        default: {
            greeting.innerHTML = 'Xin chào Em gái!'
        }

    }
}

// Đến số chẵn lẻ
btnCount.onclick = function () {
    var btnCount = document.getElementById('btnCount');
    var count1 = Number(document.getElementById('count1').value);
    var count2 = Number(document.getElementById('count2').value);
    var count3 = Number(document.getElementById('count3').value);
    var displayCount = document.getElementById('displayCount');
    // đếm số chẵn 
    var countEvenNumber = 0;
    // đếm số lẻ 
    var countOddNumber = 0;
    if (isNaN(count1) || isNaN(count2) || isNaN(count3)) {
        alert('Nhập sai');
    }
    if (count1 % 2 === 0) {
        countEvenNumber++;
    }
    if (count2 % 2 === 0) {
        countEvenNumber++;
    }
    if (count3 % 2 === 0) {
        countEvenNumber++;
    }

    countOddNumber = 3 - countEvenNumber;
    displayCount.innerHTML = 'Số chẵn = ' + countEvenNumber + ', Số lẻ = ' + countOddNumber;
}

// Đoán hình tam giác 
var guessTriangle = document.getElementById('guessTriangle');
var displayTriangle = document.getElementById('displayTriangle');
guessTriangle.onclick = function () {
    let edge1 = Number(document.getElementById('edge1').value);
    let edge2 = Number(document.getElementById('edge2').value);
    let edge3 = Number(document.getElementById('edge3').value);
    let area = 0;
    if (isNaN(edge1) || isNaN(edge2) || isNaN(edge3)) {
        alert("Vui lòng nhập số");
    }
    else {
        if (edge1 + edge2 > edge3 && edge1 + edge3 > edge2 && edge2 + edge3 > edge1) {
            if (edge1 === edge2 || edge2 === edge3 || edge3 === edge1) {
                displayTriangle.innerHTML = 'Đây là tam giác cân';
            }
            if (edge1 === edge2 && edge1 === edge3) {
                displayTriangle.innerHTML = 'Đây là tam giác đều';
            }
            if (edge1 * edge1 === edge2 * edge2 + edge3 * edge3 ||
                edge2 * edge2 === edge3 * edge3 + edge1 * edge1 ||
                edge3 * edge3 === edge2 * edge2 + edge1 * edge1
            ) {
                displayTriangle.innerHTML = 'Đây là tam giác vuông';
            }
        }
        else {
            alert("Không phải tam giác")
        }
    }


}

// ngày tháng năm 


btnYesterday.onclick = function () {
    // nhân với 1 để ép kiểu từ string sang number 
    // hoặc dùng parseInt(document.getElementById('day').value) 
    // hoặc dùng parseFloat() nếu là số thực, Number() lên google tìm hiểu thêm
    var day = document.getElementById('day').value * 1;
    var month = document.getElementById('month').value * 1;
    var year = document.getElementById('year').value * 1;

    var btnYesterday = document.getElementById('btnYesterday');
    var btnTomorrow = document.getElementById('btnTomorrow');
    var displayDay = document.getElementById('displayDay');
    if (day <= 0 || month <= 0 || year <= 0) {
        alert('Hãy nhập số dương ')
    }
    else {
        switch (month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                {
                    if (day > 0 && day <= 31) {
                       
                        break;
                    }
                    else {
                        alert('Nhập ngày không hợp lệ');
                        break;
                    }
                }
            case 4:
            case 6:
            case 9:
            case 11:
                {
                    if (day > 0 && day <= 30) {

                        break;
                    }
                    else {
                        alert('Nhập ngày không hợp lệ');
                        break;
                    }
                }
            case 2:
                {
                    if (day > 0 && day <= 28) {

                        break;
                    }
                    else {
                        alert('Nhập ngày không hợp lệ');
                        break;
                    }
                }
            default:
                {
                    alert('Không hợp lệ nha');

                }
        }
    }

}







