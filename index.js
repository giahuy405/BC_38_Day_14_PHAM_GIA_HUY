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

// bài 5  ngày tháng năm 


btnYesterday.onclick = function () {
    // nhân với 1 để ép kiểu từ string sang number 
    // hoặc dùng parseInt(document.getElementById('day').value) 
    // hoặc dùng parseFloat() nếu là số thực, Number() lên google tìm hiểu thêm
    var day = document.getElementById('day').value * 1;
    var month = document.getElementById('month').value * 1;
    var year = document.getElementById('year').value * 1;

    var namNhuan = true;
    var displayDay = document.getElementById('displayDay');
    //kiểm tra năm nhuận
    if (month === 2) {
        if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
            namNhuan = true;
        }
        else {
            namNhuan = false;
        }
    }

    // kiểm tra số thập phân *
    // kiểm tra tính hợp lệ ngày, tháng, năm
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            if (day < 0 || day > 31) alert('Nhập sai ngày1')
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            if (day < 0 || day > 30) alert('Nhập sai ngày2')
            break;
        case 2:
            if (namNhuan === true && (day < 0 || day > 29)  ) alert('Nhập sai ngày')
            else if ( namNhuan === false && (day < 0 || day > 28)) alert('Nhập sai ngày4')
            break;
        default:
            alert('nhập dữ liệu ko hợp lệ');
            return;
    }
    if (year < 1921) {
        alert('Nhập năm cần lớn hơn 1920');
    }

    // kiểm tra ngày đầu tháng 
    if (day === 1) {
        switch (month) {
            case 5:
            case 7:
            case 10:
            case 12:
                day = 30; month = month - 1;
                break;
            case 1:
                day = 31; month = 12; year = year - 1;
                break;
            case 2:
            case 4:
            case 6:
            case 8:
            case 9:
            case 11:
                day = 31;
                month = month - 1;
                break;
            case 3:
                if (namNhuan === true) day = 29;
                else day = 28;
                month = 2;
                break;
        }
    } else {
        day = day - 1;
    }

    // 09/09 
    if (day < 10 && month < 10) {
        displayDay.innerHTML = '0' + day + '/' + '0' + month + '/' + year;
    }
    // 09/10
    else if (day < 10 && month > 9) {
        displayDay.innerHTML = '0' + day + '/' + month + '/' + year;
    }
    // 10/09
    else if (day > 9 && month < 10) {
        displayDay.innerHTML = day + '/' + '0' + month + '/' + year;
    }
    // 10/10
    else {
        displayDay.innerHTML = day + '/' + month + '/' + year;
    }
}

btnTomorrow.onclick = function () {
    // nhân với 1 để ép kiểu từ string sang number 
    // hoặc dùng parseInt(document.getElementById('day').value) 
    // hoặc dùng parseFloat() nếu là số thực, Number() lên google tìm hiểu thêm
    var day = document.getElementById('day').value * 1;
    var month = document.getElementById('month').value * 1;
    var year = document.getElementById('year').value * 1;

    var namNhuan = true;
    var displayDay = document.getElementById('displayDay');
    //kiểm tra năm nhuận
    if (month === 2) {
        if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
            namNhuan = true;
        }
        else {
            namNhuan = false;
        }
    }

    // kiểm tra số thập phân *
    // kiểm tra tính hợp lệ ngày, tháng, năm
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            if (day < 0 || day > 31) alert('Nhập sai ngày1')
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            if (day < 0 || day > 30) alert('Nhập sai ngày2')
            break;
        case 2:
            if (namNhuan === true && (day < 0 || day > 29)  ) alert('Nhập sai ngày3')
            else if ( namNhuan === false && (day < 0 || day > 28)) alert('Nhập sai ngày4')
            break;
        default:
            alert('nhập dữ liệu ko hợp lệ');
            return;
    }
    if (year < 1921) {
        alert('Nhập năm cần lớn hơn 1920');
    }

    // kiểm tra ngày cuối tháng 
    if (day === 31) {
        switch (month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
                day++;
                month++;
                break;
            case 12:
                day++; month = 1; year++;
                break;
        }
    }
    else if (day === 30) {
        switch (month) {
            case 4:
            case 6:
            case 9:
            case 11:
                day++; month++;
                break;
        }
    }
    else if (month === 2) {
        if (namNhuan === true && day === 29) {
            day = 1
        }else{
            day++;
        }
    }
    else {
        day++;
    }
    // 09/09 
    if (day < 10 && month < 10) {
        displayDay.innerHTML = '0' + day + '/' + '0' + month + '/' + year;
    }
    // 09/10
    else if (day < 10 && month > 9) {
        displayDay.innerHTML = '0' + day + '/' + month + '/' + year;
    }
    // 10/09
    else if (day > 9 && month < 10) {
        displayDay.innerHTML = day + '/' + '0' + month + '/' + year;
    }
    // 10/10
    else {
        displayDay.innerHTML = day + '/' + month + '/' + year;
    }

}





//  bài 6 
var displayDay2 = document.getElementById('displayDay2');
function calDay2() {
    // nhân với 1 để ép kiểu thành số vì mặc định nó là chuỗi
    var month2 = document.getElementById('month2').value * 1;
    var year2 = document.getElementById('year2').value * 1;

    if (year2 < 1920) {
        alert('Năm cần lớn hơn 1920')
    }
    switch (month2) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            displayDay2.innerHTML = 'Tháng ' + month2 + ' năm ' + year2 + ' có 31 ngày';
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            displayDay2.innerHTML = 'Tháng ' + month2 + ' năm ' + year2 + ' có 30 ngày';
            break;
        case 2:
            {
                if (year2 % 4 === 0 && year2 % 100 !== 0 || year2 % 400 === 0) {
                    displayDay2.innerHTML = 'Tháng ' + month2 + ' năm ' + year2 + ' có 29 ngày';
                }
                else {
                    displayDay2.innerHTML = 'Tháng ' + month2 + ' năm ' + year2 + ' có 28 ngày';
                }
                break;
            }
        default:
            alert('Dữ liệu không hợp lệ')
    }
}

// bài 7 
function readNumber() {
    var displayReadNumber = document.getElementById('displayReadNumber');
    var numberThreeDigit = document.getElementById('numberThreeDigit').value * 1;


    var firstDigit = Math.floor(numberThreeDigit / 100);
    var secondDigit = Math.floor((numberThreeDigit / 10) % 10);
    var thirdDigit = Math.floor(numberThreeDigit % 10);

    switch (firstDigit) {
        case 1:
            firstDigit = 'Một trăm';
            break;
        case 2:
            firstDigit = 'Hai trăm';
            break;
        case 3:
            firstDigit = 'Ba trăm';
            break;
        case 4:
            firstDigit = 'Bốn trăm';
            break;
        case 5:
            firstDigit = 'Năm trăm';
            break;
        case 6:
            firstDigit = 'Sáu trăm';
            break;
        case 7:
            firstDigit = 'Bảy trăm';
            break;
        case 8:
            firstDigit = 'Tám trăm';
            break;
        default:
            firstDigit = 'Chín trăm';


    }
    switch (secondDigit) {
        case 1:
            secondDigit = ' Mười';
            break;
        case 2:
            secondDigit = ' Hai Mươi';
            break;
        case 3:
            secondDigit = ' Ba Mươi';
            break;
        case 4:
            secondDigit = ' Bốn Mươi';
            break;
        case 5:
            secondDigit = ' Năm Mươi';
            break;
        case 6:
            secondDigit = ' Sáu Mươi';
            break;
        case 7:
            secondDigit = ' Bảy Mươi';
            break;
        case 8:
            secondDigit = ' Tám Mươi';
            break;
        default:
            secondDigit = ' Chín Mươi';

    }
    switch (thirdDigit) {
        case 1:
            thirdDigit = ' Một';
            break;
        case 2:
            thirdDigit = ' Hai';
            break;
        case 3:
            thirdDigit = ' Ba';
            break;
        case 4:
            thirdDigit = ' Bốn';
            break;
        case 5:
            thirdDigit = ' Năm';
            break;
        case 6:
            thirdDigit = ' Sáu';
            break;
        case 7:
            thirdDigit = ' Bảy';
            break;
        case 8:
            thirdDigit = ' Tám';
            break;
        default:
            thirdDigit = ' Chín';

    }
    if (numberThreeDigit < 99 || numberThreeDigit > 999) {
        alert('Vui lòng nhập số 3 chữ số');
    } else {
        displayReadNumber.innerHTML = firstDigit + secondDigit + thirdDigit;
    }

}

// bài 8
function find() {

    var student1 = document.getElementById('student1').value;
    var student2 = document.getElementById('student2').value;
    var student3 = document.getElementById('student3').value;

    var displayStudent = document.getElementById('displayStudent');

    var coordinateX1 = document.getElementById('coordinateX1').value * 1;
    var coordinateX2 = document.getElementById('coordinateX2').value * 1;
    var coordinateX3 = document.getElementById('coordinateX3').value * 1;
    var coordinateX = document.getElementById('coordinateX').value * 1;

    var coordinateY1 = document.getElementById('coordinateY1').value * 1;
    var coordinateY2 = document.getElementById('coordinateY2').value * 1;
    var coordinateY3 = document.getElementById('coordinateY3').value * 1;
    var coordinateY = document.getElementById('coordinateY').value * 1;
    var d1 = Math.sqrt(Math.pow(coordinateX - coordinateX1, 2) + Math.pow(coordinateY - coordinateY1, 2));
    var d2 = Math.sqrt(Math.pow(coordinateX - coordinateX2, 2) + Math.pow(coordinateY - coordinateY2, 2));
    var d3 = Math.sqrt(Math.pow(coordinateX - coordinateX3, 2) + Math.pow(coordinateY - coordinateY3, 2));
    if (d1 >= d2 && d1 >= d3) {
        displayStudent.innerHTML = student1 + ' là sinh viên xa trường nhất';
    } else if (d2 >= d3 && d2 >= d1) {
        displayStudent.innerHTML = student2 + ' là sinh viên xa trường nhất';
    } else {
        displayStudent.innerHTML = student3 + ' là sinh viên xa trường nhất';
    }

}
