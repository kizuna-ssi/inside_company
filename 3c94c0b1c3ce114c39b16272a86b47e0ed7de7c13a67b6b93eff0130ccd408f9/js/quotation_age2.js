
function customCalculate() {
    var selectedOption = document.querySelector('input[name="course"]:checked').value;
    if (selectedOption === "amount_fixed") {
        document.querySelector(".open1").style.display = "block";
        document.querySelector(".open2").style.display = "none";
        document.querySelector(".open3").style.display = "block";
    } else if (selectedOption === "premium_fixed") {
        document.querySelector(".open1").style.display = "none";
        document.querySelector(".open2").style.display = "block";
        document.querySelector(".open3").style.display = "block";
    }
}


function calculate() {
    var premium = calculatePremium();
    var amount = calculateAmount();
}


function calculatePremium() {
    var a, b, c, d;
    a = document.querySelector('select[name="contractor_age"]').value;
    b = document.querySelector('input[name="gender"]:checked').value;
    c = document.querySelector('input[name="select_amount"]:checked').value;
    d = document.querySelector('input[name="times"]:checked').value;
    
    if (a == 50 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "1570";
      document.getElementById("product").innerText = "1,570円/月";
    } else if (a == 51 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "1640";
      document.getElementById("product").innerText = "1,640円/月";
    } else if (a == 52 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "1750";
      document.getElementById("product").innerText = "1,750円/月";
    } else if (a == 53 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "1880";
      document.getElementById("product").innerText = "1,880円/月";
    } else if (a == 54 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "2040";
      document.getElementById("product").innerText = "2,040円/月";
    } else if (a == 55 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "2210";
      document.getElementById("product").innerText = "2,210円/月";
    } else if (a == 56 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "2370";
      document.getElementById("product").innerText = "2,370円/月";
    } else if (a == 57 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "2540";
      document.getElementById("product").innerText = "2,540円/月";
    } else if (a == 58 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "2710";
      document.getElementById("product").innerText = "2,710円/月";
    } else if (a == 59 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "2890";
      document.getElementById("product").innerText = "2,890円/月";
    } else if (a == 60 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "3070";
      document.getElementById("product").innerText = "3,070円/月";
    } else if (a == 61 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "3260";
      document.getElementById("product").innerText = "3,260円/月";
    } else if (a == 62 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "3450";
      document.getElementById("product").innerText = "3,450円/月";
    } else if (a == 63 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "3640";
      document.getElementById("product").innerText = "3,640円/月";
    } else if (a == 64 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "3850";
      document.getElementById("product").innerText = "3,850円/月";
    } else if (a == 65 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "4090";
      document.getElementById("product").innerText = "4,090円/月";
    } else if (a == 66 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "4370";
      document.getElementById("product").innerText = "4,370円/月";
    } else if (a == 67 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "4680";
      document.getElementById("product").innerText = "4,680円/月";
    } else if (a == 68 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "5020";
      document.getElementById("product").innerText = "5,020円/月";
    } else if (a == 69 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "5350";
      document.getElementById("product").innerText = "5,350円/月";
    } else if (a == 70 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "5680";
      document.getElementById("product").innerText = "5,680円/月";
    } else if (a == 71 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "5980";
      document.getElementById("product").innerText = "5,980円/月";
    } else if (a == 72 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "6270";
      document.getElementById("product").innerText = "6,270円/月";
    } else if (a == 73 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "6550";
      document.getElementById("product").innerText = "6,550円/月";
    } else if (a == 74 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "6830";
      document.getElementById("product").innerText = "6,830円/月";
    } else if (a == 75 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "7110";
      document.getElementById("product").innerText = "7,110円/月";
    } else if (a == 76 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "7470";
      document.getElementById("product").innerText = "7,470円/月";
    } else if (a == 77 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "7990";
      document.getElementById("product").innerText = "7,990円/月";
    } else if (a == 78 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "8710";
      document.getElementById("product").innerText = "8,710円/月";
    } else if (a == 79 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "9690";
      document.getElementById("product").innerText = "9,690円/月";
    } else if (a == 80 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "10780";
      document.getElementById("product").innerText = "10,780円/月";
    } else if (a == 81 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "12030";
      document.getElementById("product").innerText = "12,030円/月";
    } else if (a == 82 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "13420";
      document.getElementById("product").innerText = "13,420円/月";
    } else if (a == 83 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "14920";
      document.getElementById("product").innerText = "14,920円/月";
    } else if (a == 84 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "16540";
      document.getElementById("product").innerText = "16,540円/月";
    } else if (a == 85 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "18330";
      document.getElementById("product").innerText = "18,330円/月";
    } else if (a == 86 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "20350";
      document.getElementById("product").innerText = "20,350円/月";
    } else if (a == 87 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "22590";
      document.getElementById("product").innerText = "22,590円/月";
    } else if (a == 88 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "25060";
      document.getElementById("product").innerText = "25,060円/月";
    } else if (a == 89 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "27780";
      document.getElementById("product").innerText = "27,780円/月";
    } else if (a == 90 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "30800";
      document.getElementById("product").innerText = "30,800円/月";
    } else if (a == 91 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "34140";
      document.getElementById("product").innerText = "34,140円/月";
    } else if (a == 92 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "37810";
      document.getElementById("product").innerText = "37,810円/月";
    } else if (a == 93 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "41750";
      document.getElementById("product").innerText = "41,750円/月";
    } else if (a == 94 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "45870";
      document.getElementById("product").innerText = "45,870円/月";
    } else if (a == 95 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "50070";
      document.getElementById("product").innerText = "50,070円/月";
    } else if (a == 96 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "54290";
      document.getElementById("product").innerText = "54,290円/月";
    } else if (a == 97 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "58500";
      document.getElementById("product").innerText = "58,500円/月";
    } else if (a == 98 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "62720";
      document.getElementById("product").innerText = "62,720円/月";
    } else if (a == 99 && b == 1 && c == 1 && d == 1) {
      document.getElementById("premium").value = "67000";
      document.getElementById("product").innerText = "67,000円/月";
    } else if (a == 50 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "1110";
      document.getElementById("product").innerText = "1,110円/月";
    } else if (a == 51 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "1120";
      document.getElementById("product").innerText = "1,120円/月";
    } else if (a == 52 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "1130";
      document.getElementById("product").innerText = "1,130円/月";
    } else if (a == 53 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "1160";
      document.getElementById("product").innerText = "1,160円/月";
    } else if (a == 54 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "1200";
      document.getElementById("product").innerText = "1,200円/月";
    } else if (a == 55 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "1240";
      document.getElementById("product").innerText = "1,240円/月";
    } else if (a == 56 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "1280";
      document.getElementById("product").innerText = "1,280円/月";
    } else if (a == 57 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "1320";
      document.getElementById("product").innerText = "1,320円/月";
    } else if (a == 58 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "1350";
      document.getElementById("product").innerText = "1,350円/月";
    } else if (a == 59 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "1390";
      document.getElementById("product").innerText = "1,390円/月";
    } else if (a == 60 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "1440";
      document.getElementById("product").innerText = "1,440円/月";
    } else if (a == 61 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "1480";
      document.getElementById("product").innerText = "1,480円/月";
    } else if (a == 62 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "1530";
      document.getElementById("product").innerText = "1,530円/月";
    } else if (a == 63 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "1580";
      document.getElementById("product").innerText = "1,580円/月";
    } else if (a == 64 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "1630";
      document.getElementById("product").innerText = "1,630円/月";
    } else if (a == 65 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "1680";
      document.getElementById("product").innerText = "1,680円/月";
    } else if (a == 66 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "1750";
      document.getElementById("product").innerText = "1,750円/月";
    } else if (a == 67 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "1830";
      document.getElementById("product").innerText = "1,830円/月";
    } else if (a == 68 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "1920";
      document.getElementById("product").innerText = "1,920円/月";
    } else if (a == 69 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "2030";
      document.getElementById("product").innerText = "2,030円/月";
    } else if (a == 70 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "2160";
      document.getElementById("product").innerText = "2,160円/月";
    } else if (a == 71 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "2300";
      document.getElementById("product").innerText = "2,300円/月";
    } else if (a == 72 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "2460";
      document.getElementById("product").innerText = "2,460円/月";
    } else if (a == 73 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "2640";
      document.getElementById("product").innerText = "2,640円/月";
    } else if (a == 74 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "2820";
      document.getElementById("product").innerText = "2,820円/月";
    } else if (a == 75 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "3020";
      document.getElementById("product").innerText = "3,020円/月";
    } else if (a == 76 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "3290";
      document.getElementById("product").innerText = "3,290円/月";
    } else if (a == 77 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "3660";
      document.getElementById("product").innerText = "3,660円/月";
    } else if (a == 78 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "4160";
      document.getElementById("product").innerText = "4,160円/月";
    } else if (a == 79 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "4810";
      document.getElementById("product").innerText = "4,810円/月";
    } else if (a == 80 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "5530";
      document.getElementById("product").innerText = "5,530円/月";
    } else if (a == 81 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "6320";
      document.getElementById("product").innerText = "6,320円/月";
    } else if (a == 82 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "7160";
      document.getElementById("product").innerText = "7,160円/月";
    } else if (a == 83 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "8060";
      document.getElementById("product").innerText = "8,060円/月";
    } else if (a == 84 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "9040";
      document.getElementById("product").innerText = "9,040円/月";
    } else if (a == 85 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "10140";
      document.getElementById("product").innerText = "10,140円/月";
    } else if (a == 86 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "11400";
      document.getElementById("product").innerText = "11,400円/月";
    } else if (a == 87 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "12860";
      document.getElementById("product").innerText = "12,860円/月";
    } else if (a == 88 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "14530";
      document.getElementById("product").innerText = "14,530円/月";
    } else if (a == 89 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "16450";
      document.getElementById("product").innerText = "16,450円/月";
    } else if (a == 90 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "18670";
      document.getElementById("product").innerText = "18,670円/月";
    } else if (a == 91 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "21260";
      document.getElementById("product").innerText = "21,260円/月";
    } else if (a == 92 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "24240";
      document.getElementById("product").innerText = "24,240円/月";
    } else if (a == 93 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "27590";
      document.getElementById("product").innerText = "27,590円/月";
    } else if (a == 94 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "31270";
      document.getElementById("product").innerText = "31,270円/月";
    } else if (a == 95 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "35200";
      document.getElementById("product").innerText = "35,200円/月";
    } else if (a == 96 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "39310";
      document.getElementById("product").innerText = "39,310円/月";
    } else if (a == 97 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "43560";
      document.getElementById("product").innerText = "43,560円/月";
    } else if (a == 98 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "47910";
      document.getElementById("product").innerText = "47,910円/月";
    } else if (a == 99 && b == 2 && c == 1 && d == 1) {
      document.getElementById("premium").value = "52370";
      document.getElementById("product").innerText = "52,370円/月";
    } else if (a == 50 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "3140";
      document.getElementById("product").innerText = "3,140円/月";
    } else if (a == 51 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "3280";
      document.getElementById("product").innerText = "3,280円/月";
    } else if (a == 52 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "3500";
      document.getElementById("product").innerText = "3,500円/月";
    } else if (a == 53 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "3760";
      document.getElementById("product").innerText = "3,760円/月";
    } else if (a == 54 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "4080";
      document.getElementById("product").innerText = "4,080円/月";
    } else if (a == 55 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "4420";
      document.getElementById("product").innerText = "4,420円/月";
    } else if (a == 56 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "4740";
      document.getElementById("product").innerText = "4,740円/月";
    } else if (a == 57 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "5080";
      document.getElementById("product").innerText = "5,080円/月";
    } else if (a == 58 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "5420";
      document.getElementById("product").innerText = "5,420円/月";
    } else if (a == 59 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "5780";
      document.getElementById("product").innerText = "5,780円/月";
    } else if (a == 60 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "6140";
      document.getElementById("product").innerText = "6,140円/月";
    } else if (a == 61 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "6520";
      document.getElementById("product").innerText = "6,520円/月";
    } else if (a == 62 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "6900";
      document.getElementById("product").innerText = "6,900円/月";
    } else if (a == 63 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "7280";
      document.getElementById("product").innerText = "7,280円/月";
    } else if (a == 64 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "7700";
      document.getElementById("product").innerText = "7,700円/月";
    } else if (a == 65 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "8180";
      document.getElementById("product").innerText = "8,180円/月";
    } else if (a == 66 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "8740";
      document.getElementById("product").innerText = "8,740円/月";
    } else if (a == 67 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "9360";
      document.getElementById("product").innerText = "9,360円/月";
    } else if (a == 68 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "10040";
      document.getElementById("product").innerText = "10,040円/月";
    } else if (a == 69 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "10700";
      document.getElementById("product").innerText = "10,700円/月";
    } else if (a == 70 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "11360";
      document.getElementById("product").innerText = "11,360円/月";
    } else if (a == 71 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "11960";
      document.getElementById("product").innerText = "11,960円/月";
    } else if (a == 72 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "12540";
      document.getElementById("product").innerText = "12,540円/月";
    } else if (a == 73 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "13100";
      document.getElementById("product").innerText = "13,100円/月";
    } else if (a == 74 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "13660";
      document.getElementById("product").innerText = "13,660円/月";
    } else if (a == 75 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "14220";
      document.getElementById("product").innerText = "14,220円/月";
    } else if (a == 76 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "14940";
      document.getElementById("product").innerText = "14,940円/月";
    } else if (a == 77 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "15980";
      document.getElementById("product").innerText = "15,980円/月";
    } else if (a == 78 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "17420";
      document.getElementById("product").innerText = "17,420円/月";
    } else if (a == 79 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "19380";
      document.getElementById("product").innerText = "19,380円/月";
    } else if (a == 80 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "21560";
      document.getElementById("product").innerText = "21,560円/月";
    } else if (a == 81 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "24060";
      document.getElementById("product").innerText = "24,060円/月";
    } else if (a == 82 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "26840";
      document.getElementById("product").innerText = "26,840円/月";
    } else if (a == 83 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "29840";
      document.getElementById("product").innerText = "29,840円/月";
    } else if (a == 84 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "33080";
      document.getElementById("product").innerText = "33,080円/月";
    } else if (a == 85 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "36660";
      document.getElementById("product").innerText = "36,660円/月";
    } else if (a == 86 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "40700";
      document.getElementById("product").innerText = "40,700円/月";
    } else if (a == 87 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "45180";
      document.getElementById("product").innerText = "45,180円/月";
    } else if (a == 88 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "50120";
      document.getElementById("product").innerText = "50,120円/月";
    } else if (a == 89 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "55560";
      document.getElementById("product").innerText = "55,560円/月";
    } else if (a == 90 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "61600";
      document.getElementById("product").innerText = "61,600円/月";
    } else if (a == 91 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "68280";
      document.getElementById("product").innerText = "68,280円/月";
    } else if (a == 92 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "75620";
      document.getElementById("product").innerText = "75,620円/月";
    } else if (a == 93 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "83500";
      document.getElementById("product").innerText = "83,500円/月";
    } else if (a == 94 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "91740";
      document.getElementById("product").innerText = "91,740円/月";
    } else if (a == 95 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "100140";
      document.getElementById("product").innerText = "100,140円/月";
    } else if (a == 96 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "108580";
      document.getElementById("product").innerText = "108,580円/月";
    } else if (a == 97 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "117000";
      document.getElementById("product").innerText = "117,000円/月";
    } else if (a == 98 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "125440";
      document.getElementById("product").innerText = "125,440円/月";
    } else if (a == 99 && b == 1 && c == 2 && d == 1) {
      document.getElementById("premium").value = "134000";
      document.getElementById("product").innerText = "134,000円/月";
    } else if (a == 50 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "2220";
      document.getElementById("product").innerText = "2,220円/月";
    } else if (a == 51 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "2240";
      document.getElementById("product").innerText = "2,240円/月";
    } else if (a == 52 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "2260";
      document.getElementById("product").innerText = "2,260円/月";
    } else if (a == 53 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "2320";
      document.getElementById("product").innerText = "2,320円/月";
    } else if (a == 54 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "2400";
      document.getElementById("product").innerText = "2,400円/月";
    } else if (a == 55 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "2480";
      document.getElementById("product").innerText = "2,480円/月";
    } else if (a == 56 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "2560";
      document.getElementById("product").innerText = "2,560円/月";
    } else if (a == 57 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "2640";
      document.getElementById("product").innerText = "2,640円/月";
    } else if (a == 58 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "2700";
      document.getElementById("product").innerText = "2,700円/月";
    } else if (a == 59 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "2780";
      document.getElementById("product").innerText = "2,780円/月";
    } else if (a == 60 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "2880";
      document.getElementById("product").innerText = "2,880円/月";
    } else if (a == 61 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "2960";
      document.getElementById("product").innerText = "2,960円/月";
    } else if (a == 62 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "3060";
      document.getElementById("product").innerText = "3,060円/月";
    } else if (a == 63 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "3160";
      document.getElementById("product").innerText = "3,160円/月";
    } else if (a == 64 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "3260";
      document.getElementById("product").innerText = "3,260円/月";
    } else if (a == 65 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "3360";
      document.getElementById("product").innerText = "3,360円/月";
    } else if (a == 66 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "3500";
      document.getElementById("product").innerText = "3,500円/月";
    } else if (a == 67 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "3660";
      document.getElementById("product").innerText = "3,660円/月";
    } else if (a == 68 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "3840";
      document.getElementById("product").innerText = "3,840円/月";
    } else if (a == 69 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "4060";
      document.getElementById("product").innerText = "4,060円/月";
    } else if (a == 70 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "4320";
      document.getElementById("product").innerText = "4,320円/月";
    } else if (a == 71 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "4600";
      document.getElementById("product").innerText = "4,600円/月";
    } else if (a == 72 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "4920";
      document.getElementById("product").innerText = "4,920円/月";
    } else if (a == 73 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "5280";
      document.getElementById("product").innerText = "5,280円/月";
    } else if (a == 74 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "5640";
      document.getElementById("product").innerText = "5,640円/月";
    } else if (a == 75 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "6040";
      document.getElementById("product").innerText = "6,040円/月";
    } else if (a == 76 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "6580";
      document.getElementById("product").innerText = "6,580円/月";
    } else if (a == 77 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "7320";
      document.getElementById("product").innerText = "7,320円/月";
    } else if (a == 78 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "8320";
      document.getElementById("product").innerText = "8,320円/月";
    } else if (a == 79 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "9620";
      document.getElementById("product").innerText = "9,620円/月";
    } else if (a == 80 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "11060";
      document.getElementById("product").innerText = "11,060円/月";
    } else if (a == 81 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "12640";
      document.getElementById("product").innerText = "12,640円/月";
    } else if (a == 82 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "14320";
      document.getElementById("product").innerText = "14,320円/月";
    } else if (a == 83 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "16120";
      document.getElementById("product").innerText = "16,120円/月";
    } else if (a == 84 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "18080";
      document.getElementById("product").innerText = "18,080円/月";
    } else if (a == 85 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "20280";
      document.getElementById("product").innerText = "20,280円/月";
    } else if (a == 86 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "22800";
      document.getElementById("product").innerText = "22,800円/月";
    } else if (a == 87 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "25720";
      document.getElementById("product").innerText = "25,720円/月";
    } else if (a == 88 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "29060";
      document.getElementById("product").innerText = "29,060円/月";
    } else if (a == 89 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "32900";
      document.getElementById("product").innerText = "32,900円/月";
    } else if (a == 90 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "37340";
      document.getElementById("product").innerText = "37,340円/月";
    } else if (a == 91 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "42520";
      document.getElementById("product").innerText = "42,520円/月";
    } else if (a == 92 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "48480";
      document.getElementById("product").innerText = "48,480円/月";
    } else if (a == 93 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "55180";
      document.getElementById("product").innerText = "55,180円/月";
    } else if (a == 94 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "62540";
      document.getElementById("product").innerText = "62,540円/月";
    } else if (a == 95 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "70400";
      document.getElementById("product").innerText = "70,400円/月";
    } else if (a == 96 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "78620";
      document.getElementById("product").innerText = "78,620円/月";
    } else if (a == 97 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "87120";
      document.getElementById("product").innerText = "87,120円/月";
    } else if (a == 98 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "95820";
      document.getElementById("product").innerText = "95,820円/月";
    } else if (a == 99 && b == 2 && c == 2 && d == 1) {
      document.getElementById("premium").value = "104740";
      document.getElementById("product").innerText = "104,740円/月";
    } else if (a == 50 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "4710";
      document.getElementById("product").innerText = "4,710円/月";
    } else if (a == 51 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "4920";
      document.getElementById("product").innerText = "4,920円/月";
    } else if (a == 52 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "5250";
      document.getElementById("product").innerText = "5,250円/月";
    } else if (a == 53 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "5640";
      document.getElementById("product").innerText = "5,640円/月";
    } else if (a == 54 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "6120";
      document.getElementById("product").innerText = "6,120円/月";
    } else if (a == 55 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "6630";
      document.getElementById("product").innerText = "6,630円/月";
    } else if (a == 56 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "7110";
      document.getElementById("product").innerText = "7,110円/月";
    } else if (a == 57 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "7620";
      document.getElementById("product").innerText = "7,620円/月";
    } else if (a == 58 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "8130";
      document.getElementById("product").innerText = "8,130円/月";
    } else if (a == 59 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "8670";
      document.getElementById("product").innerText = "8,670円/月";
    } else if (a == 60 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "9210";
      document.getElementById("product").innerText = "9,210円/月";
    } else if (a == 61 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "9780";
      document.getElementById("product").innerText = "9,780円/月";
    } else if (a == 62 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "10350";
      document.getElementById("product").innerText = "10,350円/月";
    } else if (a == 63 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "10920";
      document.getElementById("product").innerText = "10,920円/月";
    } else if (a == 64 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "11550";
      document.getElementById("product").innerText = "11,550円/月";
    } else if (a == 65 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "12270";
      document.getElementById("product").innerText = "12,270円/月";
    } else if (a == 66 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "13110";
      document.getElementById("product").innerText = "13,110円/月";
    } else if (a == 67 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "14040";
      document.getElementById("product").innerText = "14,040円/月";
    } else if (a == 68 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "15060";
      document.getElementById("product").innerText = "15,060円/月";
    } else if (a == 69 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "16050";
      document.getElementById("product").innerText = "16,050円/月";
    } else if (a == 70 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "17040";
      document.getElementById("product").innerText = "17,040円/月";
    } else if (a == 71 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "17940";
      document.getElementById("product").innerText = "17,940円/月";
    } else if (a == 72 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "18810";
      document.getElementById("product").innerText = "18,810円/月";
    } else if (a == 73 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "19650";
      document.getElementById("product").innerText = "19,650円/月";
    } else if (a == 74 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "20490";
      document.getElementById("product").innerText = "20,490円/月";
    } else if (a == 75 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "21330";
      document.getElementById("product").innerText = "21,330円/月";
    } else if (a == 76 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "22410";
      document.getElementById("product").innerText = "22,410円/月";
    } else if (a == 77 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "23970";
      document.getElementById("product").innerText = "23,970円/月";
    } else if (a == 78 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "26130";
      document.getElementById("product").innerText = "26,130円/月";
    } else if (a == 79 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "29070";
      document.getElementById("product").innerText = "29,070円/月";
    } else if (a == 80 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "32340";
      document.getElementById("product").innerText = "32,340円/月";
    } else if (a == 81 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "36090";
      document.getElementById("product").innerText = "36,090円/月";
    } else if (a == 82 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "40260";
      document.getElementById("product").innerText = "40,260円/月";
    } else if (a == 83 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "44760";
      document.getElementById("product").innerText = "44,760円/月";
    } else if (a == 84 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "49620";
      document.getElementById("product").innerText = "49,620円/月";
    } else if (a == 85 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "54990";
      document.getElementById("product").innerText = "54,990円/月";
    } else if (a == 86 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "61050";
      document.getElementById("product").innerText = "61,050円/月";
    } else if (a == 87 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "67770";
      document.getElementById("product").innerText = "67,770円/月";
    } else if (a == 88 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "75180";
      document.getElementById("product").innerText = "75,180円/月";
    } else if (a == 89 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "83340";
      document.getElementById("product").innerText = "83,340円/月";
    } else if (a == 90 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "92400";
      document.getElementById("product").innerText = "92,400円/月";
    } else if (a == 91 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "102420";
      document.getElementById("product").innerText = "102,420円/月";
    } else if (a == 92 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "113430";
      document.getElementById("product").innerText = "113,430円/月";
    } else if (a == 93 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "125250";
      document.getElementById("product").innerText = "125,250円/月";
    } else if (a == 94 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "137610";
      document.getElementById("product").innerText = "137,610円/月";
    } else if (a == 95 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "150210";
      document.getElementById("product").innerText = "150,210円/月";
    } else if (a == 96 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "162870";
      document.getElementById("product").innerText = "162,870円/月";
    } else if (a == 97 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "175500";
      document.getElementById("product").innerText = "175,500円/月";
    } else if (a == 98 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "188160";
      document.getElementById("product").innerText = "188,160円/月";
    } else if (a == 99 && b == 1 && c == 3 && d == 1) {
      document.getElementById("premium").value = "201000";
      document.getElementById("product").innerText = "201,000円/月";
    } else if (a == 50 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "3330";
      document.getElementById("product").innerText = "3,330円/月";
    } else if (a == 51 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "3360";
      document.getElementById("product").innerText = "3,360円/月";
    } else if (a == 52 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "3390";
      document.getElementById("product").innerText = "3,390円/月";
    } else if (a == 53 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "3480";
      document.getElementById("product").innerText = "3,480円/月";
    } else if (a == 54 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "3600";
      document.getElementById("product").innerText = "3,600円/月";
    } else if (a == 55 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "3720";
      document.getElementById("product").innerText = "3,720円/月";
    } else if (a == 56 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "3840";
      document.getElementById("product").innerText = "3,840円/月";
    } else if (a == 57 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "3960";
      document.getElementById("product").innerText = "3,960円/月";
    } else if (a == 58 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "4050";
      document.getElementById("product").innerText = "4,050円/月";
    } else if (a == 59 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "4170";
      document.getElementById("product").innerText = "4,170円/月";
    } else if (a == 60 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "4320";
      document.getElementById("product").innerText = "4,320円/月";
    } else if (a == 61 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "4440";
      document.getElementById("product").innerText = "4,440円/月";
    } else if (a == 62 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "4590";
      document.getElementById("product").innerText = "4,590円/月";
    } else if (a == 63 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "4740";
      document.getElementById("product").innerText = "4,740円/月";
    } else if (a == 64 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "4890";
      document.getElementById("product").innerText = "4,890円/月";
    } else if (a == 65 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "5040";
      document.getElementById("product").innerText = "5,040円/月";
    } else if (a == 66 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "5250";
      document.getElementById("product").innerText = "5,250円/月";
    } else if (a == 67 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "5490";
      document.getElementById("product").innerText = "5,490円/月";
    } else if (a == 68 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "5760";
      document.getElementById("product").innerText = "5,760円/月";
    } else if (a == 69 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "6090";
      document.getElementById("product").innerText = "6,090円/月";
    } else if (a == 70 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "6480";
      document.getElementById("product").innerText = "6,480円/月";
    } else if (a == 71 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "6900";
      document.getElementById("product").innerText = "6,900円/月";
    } else if (a == 72 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "7380";
      document.getElementById("product").innerText = "7,380円/月";
    } else if (a == 73 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "7920";
      document.getElementById("product").innerText = "7,920円/月";
    } else if (a == 74 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "8460";
      document.getElementById("product").innerText = "8,460円/月";
    } else if (a == 75 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "9060";
      document.getElementById("product").innerText = "9,060円/月";
    } else if (a == 76 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "9870";
      document.getElementById("product").innerText = "9,870円/月";
    } else if (a == 77 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "10980";
      document.getElementById("product").innerText = "10,980円/月";
    } else if (a == 78 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "12480";
      document.getElementById("product").innerText = "12,480円/月";
    } else if (a == 79 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "14430";
      document.getElementById("product").innerText = "14,430円/月";
    } else if (a == 80 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "16590";
      document.getElementById("product").innerText = "16,590円/月";
    } else if (a == 81 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "18960";
      document.getElementById("product").innerText = "18,960円/月";
    } else if (a == 82 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "21480";
      document.getElementById("product").innerText = "21,480円/月";
    } else if (a == 83 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "24180";
      document.getElementById("product").innerText = "24,180円/月";
    } else if (a == 84 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "27120";
      document.getElementById("product").innerText = "27,120円/月";
    } else if (a == 85 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "30420";
      document.getElementById("product").innerText = "30,420円/月";
    } else if (a == 86 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "34200";
      document.getElementById("product").innerText = "34,200円/月";
    } else if (a == 87 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "38580";
      document.getElementById("product").innerText = "38,580円/月";
    } else if (a == 88 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "43590";
      document.getElementById("product").innerText = "43,590円/月";
    } else if (a == 89 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "49350";
      document.getElementById("product").innerText = "49,350円/月";
    } else if (a == 90 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "56010";
      document.getElementById("product").innerText = "56,010円/月";
    } else if (a == 91 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "63780";
      document.getElementById("product").innerText = "63,780円/月";
    } else if (a == 92 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "72720";
      document.getElementById("product").innerText = "72,720円/月";
    } else if (a == 93 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "82770";
      document.getElementById("product").innerText = "82,770円/月";
    } else if (a == 94 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "93810";
      document.getElementById("product").innerText = "93,810円/月";
    } else if (a == 95 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "105600";
      document.getElementById("product").innerText = "105,600円/月";
    } else if (a == 96 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "117930";
      document.getElementById("product").innerText = "117,930円/月";
    } else if (a == 97 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "130680";
      document.getElementById("product").innerText = "130,680円/月";
    } else if (a == 98 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "143730";
      document.getElementById("product").innerText = "143,730円/月";
    } else if (a == 99 && b == 2 && c == 3 && d == 1) {
      document.getElementById("premium").value = "157110";
      document.getElementById("product").innerText = "157,110円/月";
    } else if (a == 50 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "18310";
      document.getElementById("product").innerText = "18,310円/年";
    } else if (a == 51 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "19180";
      document.getElementById("product").innerText = "19,180円/年";
    } else if (a == 52 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "20400";
      document.getElementById("product").innerText = "20,400円/年";
    } else if (a == 53 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "21940";
      document.getElementById("product").innerText = "21,940円/年";
    } else if (a == 54 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "23760";
      document.getElementById("product").innerText = "23,760円/年";
    } else if (a == 55 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "25690";
      document.getElementById("product").innerText = "25,690円/年";
    } else if (a == 56 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "27630";
      document.getElementById("product").innerText = "27,630円/年";
    } else if (a == 57 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "29540";
      document.getElementById("product").innerText = "29,540円/年";
    } else if (a == 58 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "31520";
      document.getElementById("product").innerText = "31,520円/年";
    } else if (a == 59 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "33550";
      document.getElementById("product").innerText = "33,550円/年";
    } else if (a == 60 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "35670";
      document.getElementById("product").innerText = "35,670円/年";
    } else if (a == 61 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "37820";
      document.getElementById("product").innerText = "37,820円/年";
    } else if (a == 62 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "40000";
      document.getElementById("product").innerText = "40,000円/年";
    } else if (a == 63 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "42220";
      document.getElementById("product").innerText = "42,220円/年";
    } else if (a == 64 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "44610";
      document.getElementById("product").innerText = "44,610円/年";
    } else if (a == 65 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "47330";
      document.getElementById("product").innerText = "47,330円/年";
    } else if (a == 66 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "50470";
      document.getElementById("product").innerText = "50,470円/年";
    } else if (a == 67 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "54040";
      document.getElementById("product").innerText = "54,040円/年";
    } else if (a == 68 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "57820";
      document.getElementById("product").innerText = "57,820円/年";
    } else if (a == 69 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "61640";
      document.getElementById("product").innerText = "61,640円/年";
    } else if (a == 70 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "65290";
      document.getElementById("product").innerText = "65,290円/年";
    } else if (a == 71 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "68740";
      document.getElementById("product").innerText = "68,740円/年";
    } else if (a == 72 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "71950";
      document.getElementById("product").innerText = "71,950円/年";
    } else if (a == 73 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "75140";
      document.getElementById("product").innerText = "75,140円/年";
    } else if (a == 74 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "78210";
      document.getElementById("product").innerText = "78,210円/年";
    } else if (a == 75 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "81410";
      document.getElementById("product").innerText = "81,410円/年";
    } else if (a == 76 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "85430";
      document.getElementById("product").innerText = "85,430円/年";
    } else if (a == 77 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "91150";
      document.getElementById("product").innerText = "91,150円/年";
    } else if (a == 78 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "99190";
      document.getElementById("product").innerText = "99,190円/年";
    } else if (a == 79 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "109890";
      document.getElementById("product").innerText = "109,890円/年";
    } else if (a == 80 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "121730";
      document.getElementById("product").innerText = "121,730円/年";
    } else if (a == 81 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "135300";
      document.getElementById("product").innerText = "135,300円/年";
    } else if (a == 82 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "150090";
      document.getElementById("product").innerText = "150,090円/年";
    } else if (a == 83 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "165850";
      document.getElementById("product").innerText = "165,850円/年";
    } else if (a == 84 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "182700";
      document.getElementById("product").innerText = "182,700円/年";
    } else if (a == 85 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "201080";
      document.getElementById("product").innerText = "201,080円/年";
    } else if (a == 86 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "221380";
      document.getElementById("product").innerText = "221,380円/年";
    } else if (a == 87 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "243660";
      document.getElementById("product").innerText = "243,660円/年";
    } else if (a == 88 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "267660";
      document.getElementById("product").innerText = "267,660円/年";
    } else if (a == 89 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "293530";
      document.getElementById("product").innerText = "293,530円/年";
    } else if (a == 90 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "321540";
      document.getElementById("product").innerText = "321,540円/年";
    } else if (a == 91 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "351790";
      document.getElementById("product").innerText = "351,790円/年";
    } else if (a == 92 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "384020";
      document.getElementById("product").innerText = "384,020円/年";
    } else if (a == 93 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "417550";
      document.getElementById("product").innerText = "417,550円/年";
    } else if (a == 94 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "451440";
      document.getElementById("product").innerText = "451,440円/年";
    } else if (a == 95 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "484820";
      document.getElementById("product").innerText = "484,820円/年";
    } else if (a == 96 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "517070";
      document.getElementById("product").innerText = "517,070円/年";
    } else if (a == 97 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "548090";
      document.getElementById("product").innerText = "548,090円/年";
    } else if (a == 98 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "578040";
      document.getElementById("product").innerText = "578,040円/年";
    } else if (a == 99 && b == 1 && c == 1 && d == 2) {
      document.getElementById("premium").value = "607280";
      document.getElementById("product").innerText = "607,280円/年";
    } else if (a == 50 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "12990";
      document.getElementById("product").innerText = "12,990円/年";
    } else if (a == 51 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "13050";
      document.getElementById("product").innerText = "13,050円/年";
    } else if (a == 52 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "13230";
      document.getElementById("product").innerText = "13,230円/年";
    } else if (a == 53 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "13540";
      document.getElementById("product").innerText = "13,540円/年";
    } else if (a == 54 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "13980";
      document.getElementById("product").innerText = "13,980円/年";
    } else if (a == 55 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "14470";
      document.getElementById("product").innerText = "14,470円/年";
    } else if (a == 56 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "14960";
      document.getElementById("product").innerText = "14,960円/年";
    } else if (a == 57 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "15380";
      document.getElementById("product").innerText = "15,380円/年";
    } else if (a == 58 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "15810";
      document.getElementById("product").innerText = "15,810円/年";
    } else if (a == 59 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "16260";
      document.getElementById("product").innerText = "16,260円/年";
    } else if (a == 60 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "16760";
      document.getElementById("product").innerText = "16,760円/年";
    } else if (a == 61 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "17290";
      document.getElementById("product").innerText = "17,290円/年";
    } else if (a == 62 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "17840";
      document.getElementById("product").innerText = "17,840円/年";
    } else if (a == 63 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "18410";
      document.getElementById("product").innerText = "18,410円/年";
    } else if (a == 64 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "19000";
      document.getElementById("product").innerText = "19,000円/年";
    } else if (a == 65 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "19660";
      document.getElementById("product").innerText = "19,660円/年";
    } else if (a == 66 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "20440";
      document.getElementById("product").innerText = "20,440円/年";
    } else if (a == 67 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "21360";
      document.getElementById("product").innerText = "21,360円/年";
    } else if (a == 68 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "22440";
      document.getElementById("product").innerText = "22,440円/年";
    } else if (a == 69 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "23690";
      document.getElementById("product").innerText = "23,690円/年";
    } else if (a == 70 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "25120";
      document.getElementById("product").innerText = "25,120円/年";
    } else if (a == 71 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "26750";
      document.getElementById("product").innerText = "26,750円/年";
    } else if (a == 72 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "28590";
      document.getElementById("product").innerText = "28,590円/年";
    } else if (a == 73 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "30630";
      document.getElementById("product").innerText = "30,630円/年";
    } else if (a == 74 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "32740";
      document.getElementById("product").innerText = "32,740円/年";
    } else if (a == 75 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "35100";
      document.getElementById("product").innerText = "35,100円/年";
    } else if (a == 76 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "38150";
      document.getElementById("product").innerText = "38,150円/年";
    } else if (a == 77 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "42390";
      document.getElementById("product").innerText = "42,390円/年";
    } else if (a == 78 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "48160";
      document.getElementById("product").innerText = "48,160円/年";
    } else if (a == 79 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "55540";
      document.getElementById("product").innerText = "55,540円/年";
    } else if (a == 80 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "63600";
      document.getElementById("product").innerText = "63,600円/年";
    } else if (a == 81 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "72470";
      document.getElementById("product").innerText = "72,470円/年";
    } else if (a == 82 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "81890";
      document.getElementById("product").innerText = "81,890円/年";
    } else if (a == 83 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "91820";
      document.getElementById("product").innerText = "91,820円/年";
    } else if (a == 84 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "102560";
      document.getElementById("product").innerText = "102,560円/年";
    } else if (a == 85 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "114560";
      document.getElementById("product").innerText = "114,560円/年";
    } else if (a == 86 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "128210";
      document.getElementById("product").innerText = "128,210円/年";
    } else if (a == 87 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "143770";
      document.getElementById("product").innerText = "143,770円/年";
    } else if (a == 88 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "161290";
      document.getElementById("product").innerText = "161,290円/年";
    } else if (a == 89 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "181160";
      document.getElementById("product").innerText = "181,160円/年";
    } else if (a == 90 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "203830";
      document.getElementById("product").innerText = "203,830円/年";
    } else if (a == 91 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "229690";
      document.getElementById("product").innerText = "229,690円/年";
    } else if (a == 92 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "258730";
      document.getElementById("product").innerText = "258,730円/年";
    } else if (a == 93 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "290520";
      document.getElementById("product").innerText = "290,520円/年";
    } else if (a == 94 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "324400";
      document.getElementById("product").innerText = "324,400円/年";
    } else if (a == 95 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "359490";
      document.getElementById("product").innerText = "359,490円/年";
    } else if (a == 96 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "394960";
      document.getElementById("product").innerText = "394,960円/年";
    } else if (a == 97 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "430280";
      document.getElementById("product").innerText = "430,280円/年";
    } else if (a == 98 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "465150";
      document.getElementById("product").innerText = "465,150円/年";
    } else if (a == 99 && b == 2 && c == 1 && d == 2) {
      document.getElementById("premium").value = "499480";
      document.getElementById("product").innerText = "499,480円/年";
    } else if (a == 50 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "36620";
      document.getElementById("product").innerText = "36,620円/年";
    } else if (a == 51 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "38360";
      document.getElementById("product").innerText = "38,360円/年";
    } else if (a == 52 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "40800";
      document.getElementById("product").innerText = "40,800円/年";
    } else if (a == 53 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "43880";
      document.getElementById("product").innerText = "43,880円/年";
    } else if (a == 54 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "47520";
      document.getElementById("product").innerText = "47,520円/年";
    } else if (a == 55 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "51380";
      document.getElementById("product").innerText = "51,380円/年";
    } else if (a == 56 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "55260";
      document.getElementById("product").innerText = "55,260円/年";
    } else if (a == 57 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "59080";
      document.getElementById("product").innerText = "59,080円/年";
    } else if (a == 58 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "63040";
      document.getElementById("product").innerText = "63,040円/年";
    } else if (a == 59 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "67100";
      document.getElementById("product").innerText = "67,100円/年";
    } else if (a == 60 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "71340";
      document.getElementById("product").innerText = "71,340円/年";
    } else if (a == 61 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "75640";
      document.getElementById("product").innerText = "75,640円/年";
    } else if (a == 62 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "80000";
      document.getElementById("product").innerText = "80,000円/年";
    } else if (a == 63 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "84440";
      document.getElementById("product").innerText = "84,440円/年";
    } else if (a == 64 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "89220";
      document.getElementById("product").innerText = "89,220円/年";
    } else if (a == 65 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "94660";
      document.getElementById("product").innerText = "94,660円/年";
    } else if (a == 66 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "100940";
      document.getElementById("product").innerText = "100,940円/年";
    } else if (a == 67 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "108080";
      document.getElementById("product").innerText = "108,080円/年";
    } else if (a == 68 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "115640";
      document.getElementById("product").innerText = "115,640円/年";
    } else if (a == 69 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "123280";
      document.getElementById("product").innerText = "123,280円/年";
    } else if (a == 70 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "130580";
      document.getElementById("product").innerText = "130,580円/年";
    } else if (a == 71 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "137480";
      document.getElementById("product").innerText = "137,480円/年";
    } else if (a == 72 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "143900";
      document.getElementById("product").innerText = "143,900円/年";
    } else if (a == 73 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "150280";
      document.getElementById("product").innerText = "150,280円/年";
    } else if (a == 74 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "156420";
      document.getElementById("product").innerText = "156,420円/年";
    } else if (a == 75 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "162820";
      document.getElementById("product").innerText = "162,820円/年";
    } else if (a == 76 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "170860";
      document.getElementById("product").innerText = "170,860円/年";
    } else if (a == 77 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "182300";
      document.getElementById("product").innerText = "182,300円/年";
    } else if (a == 78 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "198380";
      document.getElementById("product").innerText = "198,380円/年";
    } else if (a == 79 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "219780";
      document.getElementById("product").innerText = "219,780円/年";
    } else if (a == 80 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "243460";
      document.getElementById("product").innerText = "243,460円/年";
    } else if (a == 81 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "270600";
      document.getElementById("product").innerText = "270,600円/年";
    } else if (a == 82 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "300180";
      document.getElementById("product").innerText = "300,180円/年";
    } else if (a == 83 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "331700";
      document.getElementById("product").innerText = "331,700円/年";
    } else if (a == 84 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "365400";
      document.getElementById("product").innerText = "365,400円/年";
    } else if (a == 85 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "402160";
      document.getElementById("product").innerText = "402,160円/年";
    } else if (a == 86 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "442760";
      document.getElementById("product").innerText = "442,760円/年";
    } else if (a == 87 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "487320";
      document.getElementById("product").innerText = "487,320円/年";
    } else if (a == 88 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "535320";
      document.getElementById("product").innerText = "535,320円/年";
    } else if (a == 89 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "587060";
      document.getElementById("product").innerText = "587,060円/年";
    } else if (a == 90 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "643080";
      document.getElementById("product").innerText = "643,080円/年";
    } else if (a == 91 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "703580";
      document.getElementById("product").innerText = "703,580円/年";
    } else if (a == 92 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "768040";
      document.getElementById("product").innerText = "768,040円/年";
    } else if (a == 93 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "835100";
      document.getElementById("product").innerText = "835,100円/年";
    } else if (a == 94 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "902880";
      document.getElementById("product").innerText = "902,880円/年";
    } else if (a == 95 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "969640";
      document.getElementById("product").innerText = "969,640円/年";
    } else if (a == 96 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "1034140";
      document.getElementById("product").innerText = "1,034,140円/年";
    } else if (a == 97 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "1096180";
      document.getElementById("product").innerText = "1,096,180円/年";
    } else if (a == 98 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "1156080";
      document.getElementById("product").innerText = "1,156,080円/年";
    } else if (a == 99 && b == 1 && c == 2 && d == 2) {
      document.getElementById("premium").value = "1214560";
      document.getElementById("product").innerText = "1,214,560円/年";
    } else if (a == 50 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "25980";
      document.getElementById("product").innerText = "25,980円/年";
    } else if (a == 51 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "26100";
      document.getElementById("product").innerText = "26,100円/年";
    } else if (a == 52 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "26460";
      document.getElementById("product").innerText = "26,460円/年";
    } else if (a == 53 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "27080";
      document.getElementById("product").innerText = "27,080円/年";
    } else if (a == 54 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "27960";
      document.getElementById("product").innerText = "27,960円/年";
    } else if (a == 55 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "28940";
      document.getElementById("product").innerText = "28,940円/年";
    } else if (a == 56 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "29920";
      document.getElementById("product").innerText = "29,920円/年";
    } else if (a == 57 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "30760";
      document.getElementById("product").innerText = "30,760円/年";
    } else if (a == 58 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "31620";
      document.getElementById("product").innerText = "31,620円/年";
    } else if (a == 59 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "32520";
      document.getElementById("product").innerText = "32,520円/年";
    } else if (a == 60 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "33520";
      document.getElementById("product").innerText = "33,520円/年";
    } else if (a == 61 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "34580";
      document.getElementById("product").innerText = "34,580円/年";
    } else if (a == 62 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "35680";
      document.getElementById("product").innerText = "35,680円/年";
    } else if (a == 63 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "36820";
      document.getElementById("product").innerText = "36,820円/年";
    } else if (a == 64 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "38000";
      document.getElementById("product").innerText = "38,000円/年";
    } else if (a == 65 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "39320";
      document.getElementById("product").innerText = "39,320円/年";
    } else if (a == 66 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "40880";
      document.getElementById("product").innerText = "40,880円/年";
    } else if (a == 67 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "42720";
      document.getElementById("product").innerText = "42,720円/年";
    } else if (a == 68 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "44880";
      document.getElementById("product").innerText = "44,880円/年";
    } else if (a == 69 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "47380";
      document.getElementById("product").innerText = "47,380円/年";
    } else if (a == 70 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "50240";
      document.getElementById("product").innerText = "50,240円/年";
    } else if (a == 71 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "53500";
      document.getElementById("product").innerText = "53,500円/年";
    } else if (a == 72 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "57180";
      document.getElementById("product").innerText = "57,180円/年";
    } else if (a == 73 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "61260";
      document.getElementById("product").innerText = "61,260円/年";
    } else if (a == 74 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "65480";
      document.getElementById("product").innerText = "65,480円/年";
    } else if (a == 75 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "70200";
      document.getElementById("product").innerText = "70,200円/年";
    } else if (a == 76 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "76300";
      document.getElementById("product").innerText = "76,300円/年";
    } else if (a == 77 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "84780";
      document.getElementById("product").innerText = "84,780円/年";
    } else if (a == 78 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "96320";
      document.getElementById("product").innerText = "96,320円/年";
    } else if (a == 79 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "111080";
      document.getElementById("product").innerText = "111,080円/年";
    } else if (a == 80 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "127200";
      document.getElementById("product").innerText = "127,200円/年";
    } else if (a == 81 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "144940";
      document.getElementById("product").innerText = "144,940円/年";
    } else if (a == 82 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "163780";
      document.getElementById("product").innerText = "163,780円/年";
    } else if (a == 83 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "183640";
      document.getElementById("product").innerText = "183,640円/年";
    } else if (a == 84 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "205120";
      document.getElementById("product").innerText = "205,120円/年";
    } else if (a == 85 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "229120";
      document.getElementById("product").innerText = "229,120円/年";
    } else if (a == 86 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "256420";
      document.getElementById("product").innerText = "256,420円/年";
    } else if (a == 87 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "287540";
      document.getElementById("product").innerText = "287,540円/年";
    } else if (a == 88 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "322580";
      document.getElementById("product").innerText = "322,580円/年";
    } else if (a == 89 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "362320";
      document.getElementById("product").innerText = "362,320円/年";
    } else if (a == 90 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "407660";
      document.getElementById("product").innerText = "407,660円/年";
    } else if (a == 91 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "459380";
      document.getElementById("product").innerText = "459,380円/年";
    } else if (a == 92 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "517460";
      document.getElementById("product").innerText = "517,460円/年";
    } else if (a == 93 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "581040";
      document.getElementById("product").innerText = "581,040円/年";
    } else if (a == 94 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "648800";
      document.getElementById("product").innerText = "648,800円/年";
    } else if (a == 95 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "718980";
      document.getElementById("product").innerText = "718,980円/年";
    } else if (a == 96 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "789920";
      document.getElementById("product").innerText = "789,920円/年";
    } else if (a == 97 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "860560";
      document.getElementById("product").innerText = "860,560円/年";
    } else if (a == 98 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "930300";
      document.getElementById("product").innerText = "930,300円/年";
    } else if (a == 99 && b == 2 && c == 2 && d == 2) {
      document.getElementById("premium").value = "998960";
      document.getElementById("product").innerText = "998,960円/年";
    } else if (a == 50 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "54930";
      document.getElementById("product").innerText = "54,930円/年";
    } else if (a == 51 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "57540";
      document.getElementById("product").innerText = "57,540円/年";
    } else if (a == 52 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "61200";
      document.getElementById("product").innerText = "61,200円/年";
    } else if (a == 53 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "65820";
      document.getElementById("product").innerText = "65,820円/年";
    } else if (a == 54 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "71280";
      document.getElementById("product").innerText = "71,280円/年";
    } else if (a == 55 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "77070";
      document.getElementById("product").innerText = "77,070円/年";
    } else if (a == 56 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "82890";
      document.getElementById("product").innerText = "82,890円/年";
    } else if (a == 57 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "88620";
      document.getElementById("product").innerText = "88,620円/年";
    } else if (a == 58 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "94560";
      document.getElementById("product").innerText = "94,560円/年";
    } else if (a == 59 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "100650";
      document.getElementById("product").innerText = "100,650円/年";
    } else if (a == 60 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "107010";
      document.getElementById("product").innerText = "107,010円/年";
    } else if (a == 61 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "113460";
      document.getElementById("product").innerText = "113,460円/年";
    } else if (a == 62 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "120000";
      document.getElementById("product").innerText = "120,000円/年";
    } else if (a == 63 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "126660";
      document.getElementById("product").innerText = "126,660円/年";
    } else if (a == 64 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "133830";
      document.getElementById("product").innerText = "133,830円/年";
    } else if (a == 65 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "141990";
      document.getElementById("product").innerText = "141,990円/年";
    } else if (a == 66 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "151410";
      document.getElementById("product").innerText = "151,410円/年";
    } else if (a == 67 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "162120";
      document.getElementById("product").innerText = "162,120円/年";
    } else if (a == 68 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "173460";
      document.getElementById("product").innerText = "173,460円/年";
    } else if (a == 69 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "184920";
      document.getElementById("product").innerText = "184,920円/年";
    } else if (a == 70 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "195870";
      document.getElementById("product").innerText = "195,870円/年";
    } else if (a == 71 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "206220";
      document.getElementById("product").innerText = "206,220円/年";
    } else if (a == 72 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "215850";
      document.getElementById("product").innerText = "215,850円/年";
    } else if (a == 73 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "225420";
      document.getElementById("product").innerText = "225,420円/年";
    } else if (a == 74 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "234630";
      document.getElementById("product").innerText = "234,630円/年";
    } else if (a == 75 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "244230";
      document.getElementById("product").innerText = "244,230円/年";
    } else if (a == 76 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "256290";
      document.getElementById("product").innerText = "256,290円/年";
    } else if (a == 77 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "273450";
      document.getElementById("product").innerText = "273,450円/年";
    } else if (a == 78 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "297570";
      document.getElementById("product").innerText = "297,570円/年";
    } else if (a == 79 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "329670";
      document.getElementById("product").innerText = "329,670円/年";
    } else if (a == 80 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "365190";
      document.getElementById("product").innerText = "365,190円/年";
    } else if (a == 81 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "405900";
      document.getElementById("product").innerText = "405,900円/年";
    } else if (a == 82 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "450270";
      document.getElementById("product").innerText = "450,270円/年";
    } else if (a == 83 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "497550";
      document.getElementById("product").innerText = "497,550円/年";
    } else if (a == 84 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "548100";
      document.getElementById("product").innerText = "548,100円/年";
    } else if (a == 85 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "603240";
      document.getElementById("product").innerText = "603,240円/年";
    } else if (a == 86 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "664140";
      document.getElementById("product").innerText = "664,140円/年";
    } else if (a == 87 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "730980";
      document.getElementById("product").innerText = "730,980円/年";
    } else if (a == 88 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "802980";
      document.getElementById("product").innerText = "802,980円/年";
    } else if (a == 89 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "880590";
      document.getElementById("product").innerText = "880,590円/年";
    } else if (a == 90 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "964620";
      document.getElementById("product").innerText = "964,620円/年";
    } else if (a == 91 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "1055370";
      document.getElementById("product").innerText = "1,055,370円/年";
    } else if (a == 92 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "1152060";
      document.getElementById("product").innerText = "1,152,060円/年";
    } else if (a == 93 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "1252650";
      document.getElementById("product").innerText = "1,252,650円/年";
    } else if (a == 94 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "1354320";
      document.getElementById("product").innerText = "1,354,320円/年";
    } else if (a == 95 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "1454460";
      document.getElementById("product").innerText = "1,454,460円/年";
    } else if (a == 96 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "1551210";
      document.getElementById("product").innerText = "1,551,210円/年";
    } else if (a == 97 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "1644270";
      document.getElementById("product").innerText = "1,644,270円/年";
    } else if (a == 98 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "1734120";
      document.getElementById("product").innerText = "1,734,120円/年";
    } else if (a == 99 && b == 1 && c == 3 && d == 2) {
      document.getElementById("premium").value = "1821840";
      document.getElementById("product").innerText = "1,821,840円/年";
    } else if (a == 50 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "38970";
      document.getElementById("product").innerText = "38,970円/年";
    } else if (a == 51 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "39150";
      document.getElementById("product").innerText = "39,150円/年";
    } else if (a == 52 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "39690";
      document.getElementById("product").innerText = "39,690円/年";
    } else if (a == 53 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "40620";
      document.getElementById("product").innerText = "40,620円/年";
    } else if (a == 54 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "41940";
      document.getElementById("product").innerText = "41,940円/年";
    } else if (a == 55 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "43410";
      document.getElementById("product").innerText = "43,410円/年";
    } else if (a == 56 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "44880";
      document.getElementById("product").innerText = "44,880円/年";
    } else if (a == 57 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "46140";
      document.getElementById("product").innerText = "46,140円/年";
    } else if (a == 58 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "47430";
      document.getElementById("product").innerText = "47,430円/年";
    } else if (a == 59 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "48780";
      document.getElementById("product").innerText = "48,780円/年";
    } else if (a == 60 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "50280";
      document.getElementById("product").innerText = "50,280円/年";
    } else if (a == 61 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "51870";
      document.getElementById("product").innerText = "51,870円/年";
    } else if (a == 62 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "53520";
      document.getElementById("product").innerText = "53,520円/年";
    } else if (a == 63 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "55230";
      document.getElementById("product").innerText = "55,230円/年";
    } else if (a == 64 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "57000";
      document.getElementById("product").innerText = "57,000円/年";
    } else if (a == 65 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "58980";
      document.getElementById("product").innerText = "58,980円/年";
    } else if (a == 66 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "61320";
      document.getElementById("product").innerText = "61,320円/年";
    } else if (a == 67 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "64080";
      document.getElementById("product").innerText = "64,080円/年";
    } else if (a == 68 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "67320";
      document.getElementById("product").innerText = "67,320円/年";
    } else if (a == 69 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "71070";
      document.getElementById("product").innerText = "71,070円/年";
    } else if (a == 70 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "75360";
      document.getElementById("product").innerText = "75,360円/年";
    } else if (a == 71 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "80250";
      document.getElementById("product").innerText = "80,250円/年";
    } else if (a == 72 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "85770";
      document.getElementById("product").innerText = "85,770円/年";
    } else if (a == 73 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "91890";
      document.getElementById("product").innerText = "91,890円/年";
    } else if (a == 74 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "98220";
      document.getElementById("product").innerText = "98,220円/年";
    } else if (a == 75 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "105300";
      document.getElementById("product").innerText = "105,300円/年";
    } else if (a == 76 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "114450";
      document.getElementById("product").innerText = "114,450円/年";
    } else if (a == 77 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "127170";
      document.getElementById("product").innerText = "127,170円/年";
    } else if (a == 78 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "144480";
      document.getElementById("product").innerText = "144,480円/年";
    } else if (a == 79 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "166620";
      document.getElementById("product").innerText = "166,620円/年";
    } else if (a == 80 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "190800";
      document.getElementById("product").innerText = "190,800円/年";
    } else if (a == 81 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "217410";
      document.getElementById("product").innerText = "217,410円/年";
    } else if (a == 82 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "245670";
      document.getElementById("product").innerText = "245,670円/年";
    } else if (a == 83 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "275460";
      document.getElementById("product").innerText = "275,460円/年";
    } else if (a == 84 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "307680";
      document.getElementById("product").innerText = "307,680円/年";
    } else if (a == 85 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "343680";
      document.getElementById("product").innerText = "343,680円/年";
    } else if (a == 86 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "384630";
      document.getElementById("product").innerText = "384,630円/年";
    } else if (a == 87 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "431310";
      document.getElementById("product").innerText = "431,310円/年";
    } else if (a == 88 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "483870";
      document.getElementById("product").innerText = "483,870円/年";
    } else if (a == 89 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "543480";
      document.getElementById("product").innerText = "543,480円/年";
    } else if (a == 90 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "611490";
      document.getElementById("product").innerText = "611,490円/年";
    } else if (a == 91 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "689070";
      document.getElementById("product").innerText = "689,070円/年";
    } else if (a == 92 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "776190";
      document.getElementById("product").innerText = "776,190円/年";
    } else if (a == 93 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "871560";
      document.getElementById("product").innerText = "871,560円/年";
    } else if (a == 94 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "973200";
      document.getElementById("product").innerText = "973,200円/年";
    } else if (a == 95 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "1078470";
      document.getElementById("product").innerText = "1,078,470円/年";
    } else if (a == 96 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "1184880";
      document.getElementById("product").innerText = "1,184,880円/年";
    } else if (a == 97 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "1290840";
      document.getElementById("product").innerText = "1,290,840円/年";
    } else if (a == 98 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "1395450";
      document.getElementById("product").innerText = "1,395,450円/年";
    } else if (a == 99 && b == 2 && c == 3 && d == 2) {
      document.getElementById("premium").value = "1498440";
      document.getElementById("product").innerText = "1,498,440円/年";
    } else if (a == 50 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "785";
      document.getElementById("product").innerText = "785円/月";
    } else if (a == 51 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "820";
      document.getElementById("product").innerText = "820円/月";
    } else if (a == 52 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "875";
      document.getElementById("product").innerText = "875円/月";
    } else if (a == 53 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "940";
      document.getElementById("product").innerText = "940円/月";
    } else if (a == 54 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "1020";
      document.getElementById("product").innerText = "1,020円/月";
    } else if (a == 55 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "1105";
      document.getElementById("product").innerText = "1,105円/月";
    } else if (a == 56 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "1185";
      document.getElementById("product").innerText = "1,185円/月";
    } else if (a == 57 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "1270";
      document.getElementById("product").innerText = "1,270円/月";
    } else if (a == 58 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "1355";
      document.getElementById("product").innerText = "1,355円/月";
    } else if (a == 59 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "1445";
      document.getElementById("product").innerText = "1,445円/月";
    } else if (a == 60 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "1535";
      document.getElementById("product").innerText = "1,535円/月";
    } else if (a == 61 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "1630";
      document.getElementById("product").innerText = "1,630円/月";
    } else if (a == 62 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "1725";
      document.getElementById("product").innerText = "1,725円/月";
    } else if (a == 63 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "1820";
      document.getElementById("product").innerText = "1,820円/月";
    } else if (a == 64 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "1925";
      document.getElementById("product").innerText = "1,925円/月";
    } else if (a == 65 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "2045";
      document.getElementById("product").innerText = "2,045円/月";
    } else if (a == 66 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "2185";
      document.getElementById("product").innerText = "2,185円/月";
    } else if (a == 67 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "2340";
      document.getElementById("product").innerText = "2,340円/月";
    } else if (a == 68 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "2510";
      document.getElementById("product").innerText = "2,510円/月";
    } else if (a == 69 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "2675";
      document.getElementById("product").innerText = "2,675円/月";
    } else if (a == 70 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "2840";
      document.getElementById("product").innerText = "2,840円/月";
    } else if (a == 71 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "2990";
      document.getElementById("product").innerText = "2,990円/月";
    } else if (a == 72 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "3135";
      document.getElementById("product").innerText = "3,135円/月";
    } else if (a == 73 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "3275";
      document.getElementById("product").innerText = "3,275円/月";
    } else if (a == 74 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "3415";
      document.getElementById("product").innerText = "3,415円/月";
    } else if (a == 75 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "3555";
      document.getElementById("product").innerText = "3,555円/月";
    } else if (a == 76 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "3735";
      document.getElementById("product").innerText = "3,735円/月";
    } else if (a == 77 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "3995";
      document.getElementById("product").innerText = "3,995円/月";
    } else if (a == 78 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "4355";
      document.getElementById("product").innerText = "4,355円/月";
    } else if (a == 79 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "4845";
      document.getElementById("product").innerText = "4,845円/月";
    } else if (a == 80 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "5390";
      document.getElementById("product").innerText = "5,390円/月";
    } else if (a == 81 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "6015";
      document.getElementById("product").innerText = "6,015円/月";
    } else if (a == 82 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "6710";
      document.getElementById("product").innerText = "6,710円/月";
    } else if (a == 83 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "7460";
      document.getElementById("product").innerText = "7,460円/月";
    } else if (a == 84 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "8270";
      document.getElementById("product").innerText = "8,270円/月";
    } else if (a == 85 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "9165";
      document.getElementById("product").innerText = "9,165円/月";
    } else if (a == 86 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "10175";
      document.getElementById("product").innerText = "10,175円/月";
    } else if (a == 87 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "11295";
      document.getElementById("product").innerText = "11,295円/月";
    } else if (a == 88 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "12530";
      document.getElementById("product").innerText = "12,530円/月";
    } else if (a == 89 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "13890";
      document.getElementById("product").innerText = "13,890円/月";
    } else if (a == 90 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "15400";
      document.getElementById("product").innerText = "15,400円/月";
    } else if (a == 91 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "17070";
      document.getElementById("product").innerText = "17,070円/月";
    } else if (a == 92 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "18905";
      document.getElementById("product").innerText = "18,905円/月";
    } else if (a == 93 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "20875";
      document.getElementById("product").innerText = "20,875円/月";
    } else if (a == 94 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "22935";
      document.getElementById("product").innerText = "22,935円/月";
    } else if (a == 95 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "25035";
      document.getElementById("product").innerText = "25,035円/月";
    } else if (a == 96 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "27145";
      document.getElementById("product").innerText = "27,145円/月";
    } else if (a == 97 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "29250";
      document.getElementById("product").innerText = "29,250円/月";
    } else if (a == 98 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "31360";
      document.getElementById("product").innerText = "31,360円/月";
    } else if (a == 99 && b == 1 && c == 0 && d == 1) {
      document.getElementById("premium").value = "33500";
      document.getElementById("product").innerText = "33,500円/月";
    } else if (a == 50 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "9155";
      document.getElementById("product").innerText = "9,155円/年";
    } else if (a == 51 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "9590";
      document.getElementById("product").innerText = "9,590円/年";
    } else if (a == 52 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "10200";
      document.getElementById("product").innerText = "10,200円/年";
    } else if (a == 53 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "10970";
      document.getElementById("product").innerText = "10,970円/年";
    } else if (a == 54 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "11880";
      document.getElementById("product").innerText = "11,880円/年";
    } else if (a == 55 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "12845";
      document.getElementById("product").innerText = "12,845円/年";
    } else if (a == 56 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "13815";
      document.getElementById("product").innerText = "13,815円/年";
    } else if (a == 57 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "14770";
      document.getElementById("product").innerText = "14,770円/年";
    } else if (a == 58 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "15760";
      document.getElementById("product").innerText = "15,760円/年";
    } else if (a == 59 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "16775";
      document.getElementById("product").innerText = "16,775円/年";
    } else if (a == 60 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "17835";
      document.getElementById("product").innerText = "17,835円/年";
    } else if (a == 61 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "18910";
      document.getElementById("product").innerText = "18,910円/年";
    } else if (a == 62 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "20000";
      document.getElementById("product").innerText = "20,000円/年";
    } else if (a == 63 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "21110";
      document.getElementById("product").innerText = "21,110円/年";
    } else if (a == 64 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "22305";
      document.getElementById("product").innerText = "22,305円/年";
    } else if (a == 65 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "23665";
      document.getElementById("product").innerText = "23,665円/年";
    } else if (a == 66 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "25235";
      document.getElementById("product").innerText = "25,235円/年";
    } else if (a == 67 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "27020";
      document.getElementById("product").innerText = "27,020円/年";
    } else if (a == 68 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "28910";
      document.getElementById("product").innerText = "28,910円/年";
    } else if (a == 69 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "30820";
      document.getElementById("product").innerText = "30,820円/年";
    } else if (a == 70 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "32645";
      document.getElementById("product").innerText = "32,645円/年";
    } else if (a == 71 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "34370";
      document.getElementById("product").innerText = "34,370円/年";
    } else if (a == 72 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "35975";
      document.getElementById("product").innerText = "35,975円/年";
    } else if (a == 73 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "37570";
      document.getElementById("product").innerText = "37,570円/年";
    } else if (a == 74 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "39105";
      document.getElementById("product").innerText = "39,105円/年";
    } else if (a == 75 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "40705";
      document.getElementById("product").innerText = "40,705円/年";
    } else if (a == 76 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "42715";
      document.getElementById("product").innerText = "42,715円/年";
    } else if (a == 77 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "45575";
      document.getElementById("product").innerText = "45,575円/年";
    } else if (a == 78 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "49595";
      document.getElementById("product").innerText = "49,595円/年";
    } else if (a == 79 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "54945";
      document.getElementById("product").innerText = "54,945円/年";
    } else if (a == 80 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "60865";
      document.getElementById("product").innerText = "60,865円/年";
    } else if (a == 81 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "67650";
      document.getElementById("product").innerText = "67,650円/年";
    } else if (a == 82 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "75045";
      document.getElementById("product").innerText = "75,045円/年";
    } else if (a == 83 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "82925";
      document.getElementById("product").innerText = "82,925円/年";
    } else if (a == 84 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "91350";
      document.getElementById("product").innerText = "91,350円/年";
    } else if (a == 85 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "100540";
      document.getElementById("product").innerText = "100,540円/年";
    } else if (a == 86 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "110690";
      document.getElementById("product").innerText = "110,690円/年";
    } else if (a == 87 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "121830";
      document.getElementById("product").innerText = "121,830円/年";
    } else if (a == 88 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "133830";
      document.getElementById("product").innerText = "133,830円/年";
    } else if (a == 89 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "146765";
      document.getElementById("product").innerText = "146,765円/年";
    } else if (a == 90 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "160770";
      document.getElementById("product").innerText = "160,770円/年";
    } else if (a == 91 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "175895";
      document.getElementById("product").innerText = "175,895円/年";
    } else if (a == 92 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "192010";
      document.getElementById("product").innerText = "192,010円/年";
    } else if (a == 93 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "208775";
      document.getElementById("product").innerText = "208,775円/年";
    } else if (a == 94 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "225720";
      document.getElementById("product").innerText = "225,720円/年";
    } else if (a == 95 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "242410";
      document.getElementById("product").innerText = "242,410円/年";
    } else if (a == 96 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "258535";
      document.getElementById("product").innerText = "258,535円/年";
    } else if (a == 97 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "274045";
      document.getElementById("product").innerText = "274,045円/年";
    } else if (a == 98 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "289020";
      document.getElementById("product").innerText = "289,020円/年";
    } else if (a == 99 && b == 1 && c == 0 && d == 2) {
      document.getElementById("premium").value = "303640";
      document.getElementById("product").innerText = "303,640円/年";
    } else if (a == 50 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "555";
      document.getElementById("product").innerText = "555円/月";
    } else if (a == 51 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "560";
      document.getElementById("product").innerText = "560円/月";
    } else if (a == 52 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "565";
      document.getElementById("product").innerText = "565円/月";
    } else if (a == 53 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "580";
      document.getElementById("product").innerText = "580円/月";
    } else if (a == 54 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "600";
      document.getElementById("product").innerText = "600円/月";
    } else if (a == 55 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "620";
      document.getElementById("product").innerText = "620円/月";
    } else if (a == 56 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "640";
      document.getElementById("product").innerText = "640円/月";
    } else if (a == 57 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "660";
      document.getElementById("product").innerText = "660円/月";
    } else if (a == 58 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "675";
      document.getElementById("product").innerText = "675円/月";
    } else if (a == 59 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "695";
      document.getElementById("product").innerText = "695円/月";
    } else if (a == 60 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "720";
      document.getElementById("product").innerText = "720円/月";
    } else if (a == 61 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "740";
      document.getElementById("product").innerText = "740円/月";
    } else if (a == 62 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "765";
      document.getElementById("product").innerText = "765円/月";
    } else if (a == 63 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "790";
      document.getElementById("product").innerText = "790円/月";
    } else if (a == 64 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "815";
      document.getElementById("product").innerText = "815円/月";
    } else if (a == 65 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "840";
      document.getElementById("product").innerText = "840円/月";
    } else if (a == 66 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "875";
      document.getElementById("product").innerText = "875円/月";
    } else if (a == 67 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "915";
      document.getElementById("product").innerText = "915円/月";
    } else if (a == 68 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "960";
      document.getElementById("product").innerText = "960円/月";
    } else if (a == 69 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "1015";
      document.getElementById("product").innerText = "1,015円/月";
    } else if (a == 70 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "1080";
      document.getElementById("product").innerText = "1,080円/月";
    } else if (a == 71 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "1150";
      document.getElementById("product").innerText = "1,150円/月";
    } else if (a == 72 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "1230";
      document.getElementById("product").innerText = "1,230円/月";
    } else if (a == 73 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "1320";
      document.getElementById("product").innerText = "1,320円/月";
    } else if (a == 74 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "1410";
      document.getElementById("product").innerText = "1,410円/月";
    } else if (a == 75 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "1510";
      document.getElementById("product").innerText = "1,510円/月";
    } else if (a == 76 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "1645";
      document.getElementById("product").innerText = "1,645円/月";
    } else if (a == 77 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "1830";
      document.getElementById("product").innerText = "1,830円/月";
    } else if (a == 78 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "2080";
      document.getElementById("product").innerText = "2,080円/月";
    } else if (a == 79 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "2405";
      document.getElementById("product").innerText = "2,405円/月";
    } else if (a == 80 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "2765";
      document.getElementById("product").innerText = "2,765円/月";
    } else if (a == 81 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "3160";
      document.getElementById("product").innerText = "3,160円/月";
    } else if (a == 82 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "3580";
      document.getElementById("product").innerText = "3,580円/月";
    } else if (a == 83 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "4030";
      document.getElementById("product").innerText = "4,030円/月";
    } else if (a == 84 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "4520";
      document.getElementById("product").innerText = "4,520円/月";
    } else if (a == 85 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "5070";
      document.getElementById("product").innerText = "5,070円/月";
    } else if (a == 86 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "5700";
      document.getElementById("product").innerText = "5,700円/月";
    } else if (a == 87 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "6430";
      document.getElementById("product").innerText = "6,430円/月";
    } else if (a == 88 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "7265";
      document.getElementById("product").innerText = "7,265円/月";
    } else if (a == 89 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "8225";
      document.getElementById("product").innerText = "8,225円/月";
    } else if (a == 90 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "9335";
      document.getElementById("product").innerText = "9,335円/月";
    } else if (a == 91 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "10630";
      document.getElementById("product").innerText = "10,630円/月";
    } else if (a == 92 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "12120";
      document.getElementById("product").innerText = "12,120円/月";
    } else if (a == 93 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "13795";
      document.getElementById("product").innerText = "13,795円/月";
    } else if (a == 94 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "15635";
      document.getElementById("product").innerText = "15,635円/月";
    } else if (a == 95 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "17600";
      document.getElementById("product").innerText = "17,600円/月";
    } else if (a == 96 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "19655";
      document.getElementById("product").innerText = "19,655円/月";
    } else if (a == 97 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "21780";
      document.getElementById("product").innerText = "21,780円/月";
    } else if (a == 98 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "23955";
      document.getElementById("product").innerText = "23,955円/月";
    } else if (a == 99 && b == 2 && c == 0 && d == 1) {
      document.getElementById("premium").value = "26185";
      document.getElementById("product").innerText = "26,185円/月";
    } else if (a == 50 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "6495";
      document.getElementById("product").innerText = "6,495円/年";
    } else if (a == 51 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "6525";
      document.getElementById("product").innerText = "6,525円/年";
    } else if (a == 52 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "6615";
      document.getElementById("product").innerText = "6,615円/年";
    } else if (a == 53 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "6770";
      document.getElementById("product").innerText = "6,770円/年";
    } else if (a == 54 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "6990";
      document.getElementById("product").innerText = "6,990円/年";
    } else if (a == 55 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "7235";
      document.getElementById("product").innerText = "7,235円/年";
    } else if (a == 56 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "7480";
      document.getElementById("product").innerText = "7,480円/年";
    } else if (a == 57 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "7690";
      document.getElementById("product").innerText = "7,690円/年";
    } else if (a == 58 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "7905";
      document.getElementById("product").innerText = "7,905円/年";
    } else if (a == 59 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "8130";
      document.getElementById("product").innerText = "8,130円/年";
    } else if (a == 60 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "8380";
      document.getElementById("product").innerText = "8,380円/年";
    } else if (a == 61 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "8645";
      document.getElementById("product").innerText = "8,645円/年";
    } else if (a == 62 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "8920";
      document.getElementById("product").innerText = "8,920円/年";
    } else if (a == 63 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "9205";
      document.getElementById("product").innerText = "9,205円/年";
    } else if (a == 64 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "9500";
      document.getElementById("product").innerText = "9,500円/年";
    } else if (a == 65 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "9830";
      document.getElementById("product").innerText = "9,830円/年";
    } else if (a == 66 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "10220";
      document.getElementById("product").innerText = "10,220円/年";
    } else if (a == 67 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "10680";
      document.getElementById("product").innerText = "10,680円/年";
    } else if (a == 68 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "11220";
      document.getElementById("product").innerText = "11,220円/年";
    } else if (a == 69 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "11845";
      document.getElementById("product").innerText = "11,845円/年";
    } else if (a == 70 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "12560";
      document.getElementById("product").innerText = "12,560円/年";
    } else if (a == 71 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "13375";
      document.getElementById("product").innerText = "13,375円/年";
    } else if (a == 72 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "14295";
      document.getElementById("product").innerText = "14,295円/年";
    } else if (a == 73 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "15315";
      document.getElementById("product").innerText = "15,315円/年";
    } else if (a == 74 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "16370";
      document.getElementById("product").innerText = "16,370円/年";
    } else if (a == 75 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "17550";
      document.getElementById("product").innerText = "17,550円/年";
    } else if (a == 76 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "19075";
      document.getElementById("product").innerText = "19,075円/年";
    } else if (a == 77 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "21195";
      document.getElementById("product").innerText = "21,195円/年";
    } else if (a == 78 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "24080";
      document.getElementById("product").innerText = "24,080円/年";
    } else if (a == 79 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "27770";
      document.getElementById("product").innerText = "27,770円/年";
    } else if (a == 80 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "31800";
      document.getElementById("product").innerText = "31,800円/年";
    } else if (a == 81 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "36235";
      document.getElementById("product").innerText = "36,235円/年";
    } else if (a == 82 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "40945";
      document.getElementById("product").innerText = "40,945円/年";
    } else if (a == 83 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "45910";
      document.getElementById("product").innerText = "45,910円/年";
    } else if (a == 84 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "51280";
      document.getElementById("product").innerText = "51,280円/年";
    } else if (a == 85 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "57280";
      document.getElementById("product").innerText = "57,280円/年";
    } else if (a == 86 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "64105";
      document.getElementById("product").innerText = "64,105円/年";
    } else if (a == 87 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "71885";
      document.getElementById("product").innerText = "71,885円/年";
    } else if (a == 88 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "80645";
      document.getElementById("product").innerText = "80,645円/年";
    } else if (a == 89 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "90580";
      document.getElementById("product").innerText = "90,580円/年";
    } else if (a == 90 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "101915";
      document.getElementById("product").innerText = "101,915円/年";
    } else if (a == 91 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "114845";
      document.getElementById("product").innerText = "114,845円/年";
    } else if (a == 92 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "129365";
      document.getElementById("product").innerText = "129,365円/年";
    } else if (a == 93 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "145260";
      document.getElementById("product").innerText = "145,260円/年";
    } else if (a == 94 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "162200";
      document.getElementById("product").innerText = "162,200円/年";
    } else if (a == 95 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "179745";
      document.getElementById("product").innerText = "179,745円/年";
    } else if (a == 96 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "197480";
      document.getElementById("product").innerText = "197,480円/年";
    } else if (a == 97 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "215140";
      document.getElementById("product").innerText = "215,140円/年";
    } else if (a == 98 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "232575";
      document.getElementById("product").innerText = "232,575円/年";
    } else if (a == 99 && b == 2 && c == 0 && d == 2) {
      document.getElementById("premium").value = "249740";
      document.getElementById("product").innerText = "249,740円/年";

    } else {
      document.getElementById("premium").value = "引受不可";
      document.getElementById("product").innerText = "引受不可";
    }
  }

function calculateAmount() {
    var a, b, c;
    a = document.querySelector('select[name="contractor_age"]').value;
    b = document.querySelector('input[name="gender"]:checked').value;
    e = document.querySelector('input[name="select_premium"]:checked').value;

   if (a == 50 && b == 1 && e ==1) {
      document.getElementById("amount").value = "1724140";
      document.getElementById("product2").innerText = "1,724,140円";
    } else if (a == 51 && b == 1 && e ==1) {
      document.getElementById("amount").value = "1612900";
      document.getElementById("product2").innerText = "1,612,900円";
    } else if (a == 52 && b == 1 && e ==1) {
      document.getElementById("amount").value = "1492540";
      document.getElementById("product2").innerText = "1,492,540円";
    } else if (a == 53 && b == 1 && e ==1) {
      document.getElementById("amount").value = "1408450";
      document.getElementById("product2").innerText = "1,408,450円";
    } else if (a == 54 && b == 1 && e ==1) {
      document.getElementById("amount").value = "1298700";
      document.getElementById("product2").innerText = "1,298,700円";
    } else if (a == 55 && b == 1 && e ==1) {
      document.getElementById("amount").value = "1204820";
      document.getElementById("product2").innerText = "1,204,820円";
    } else if (a == 56 && b == 1 && e ==1) {
      document.getElementById("amount").value = "1123600";
      document.getElementById("product2").innerText = "1,123,600円";
    } else if (a == 57 && b == 1 && e ==1) {
      document.getElementById("amount").value = "1052630";
      document.getElementById("product2").innerText = "1,052,630円";
    } else if (a == 58 && b == 1 && e ==1) {
      document.getElementById("amount").value = "980390";
      document.getElementById("product2").innerText = "980,390円";
    } else if (a == 59 && b == 1 && e ==1) {
      document.getElementById("amount").value = "917430";
      document.getElementById("product2").innerText = "917,430円";
    } else if (a == 60 && b == 1 && e ==1) {
      document.getElementById("amount").value = "847460";
      document.getElementById("product2").innerText = "847,460円";
    } else if (a == 61 && b == 1 && e ==1) {
      document.getElementById("amount").value = "769230";
      document.getElementById("product2").innerText = "769,230円";
    } else if (a == 62 && b == 1 && e ==1) {
      document.getElementById("amount").value = "699300";
      document.getElementById("product2").innerText = "699,300円";
    } else if (a == 63 && b == 1 && e ==1) {
      document.getElementById("amount").value = "641030";
      document.getElementById("product2").innerText = "641,030円";
    } else if (a == 64 && b == 1 && e ==1) {
      document.getElementById("amount").value = "591720";
      document.getElementById("product2").innerText = "591,720円";
    } else if (a == 65 && b == 1 && e ==1) {
      document.getElementById("amount").value = "540540";
      document.getElementById("product2").innerText = "540,540円";
    } else if (a == 66 && b == 1 && e ==1) {
      document.getElementById("amount").value = "495050";
      document.getElementById("product2").innerText = "495,050円";
    } else if (a == 67 && b == 1 && e ==1) {
      document.getElementById("amount").value = "456620";
      document.getElementById("product2").innerText = "456,620円";
    } else if (a == 68 && b == 1 && e ==1) {
      document.getElementById("amount").value = "421940";
      document.getElementById("product2").innerText = "421,940円";
    } else if (a == 69 && b == 1 && e ==1) {
      document.getElementById("amount").value = "389110";
      document.getElementById("product2").innerText = "389,110円";
    } else if (a == 70 && b == 1 && e ==1) {
      document.getElementById("amount").value = "357140";
      document.getElementById("product2").innerText = "357,140円";
    } else if (a == 71 && b == 1 && e ==1) {
      document.getElementById("amount").value = "326800";
      document.getElementById("product2").innerText = "326,800円";
    } else if (a == 72 && b == 1 && e ==1) {
      document.getElementById("amount").value = "300300";
      document.getElementById("product2").innerText = "300,300円";
    } else if (a == 73 && b == 1 && e ==1) {
      document.getElementById("amount").value = "277010";
      document.getElementById("product2").innerText = "277,010円";
    } else if (a == 74 && b == 1 && e ==1) {
      document.getElementById("amount").value = "255750";
      document.getElementById("product2").innerText = "255,750円";
    } else if (a == 75 && b == 1 && e ==1) {
      document.getElementById("amount").value = "232560";
      document.getElementById("product2").innerText = "232,560円";
    } else if (a == 76 && b == 1 && e ==1) {
      document.getElementById("amount").value = "209640";
      document.getElementById("product2").innerText = "209,640円";
    } else if (a == 77 && b == 1 && e ==1) {
      document.getElementById("amount").value = "187270";
      document.getElementById("product2").innerText = "187,270円";
    } else if (a == 78 && b == 1 && e ==1) {
      document.getElementById("amount").value = "166110";
      document.getElementById("product2").innerText = "166,110円";
    } else if (a == 79 && b == 1 && e ==1) {
      document.getElementById("amount").value = "147060";
      document.getElementById("product2").innerText = "147,060円";
    } else if (a == 80 && b == 1 && e ==1) {
      document.getElementById("amount").value = "131750";
      document.getElementById("product2").innerText = "131,750円";
    } else if (a == 81 && b == 1 && e ==1) {
      document.getElementById("amount").value = "117510";
      document.getElementById("product2").innerText = "117,510円";
    } else if (a == 82 && b == 1 && e ==1) {
      document.getElementById("amount").value = "104930";
      document.getElementById("product2").innerText = "104,930円";
    } else if (a == 83 && b == 1 && e ==1) {
      document.getElementById("amount").value = "93550";
      document.getElementById("product2").innerText = "93,550円";
    } else if (a == 84 && b == 1 && e ==1) {
      document.getElementById("amount").value = "83330";
      document.getElementById("product2").innerText = "83,330円";
    } else if (a == 85 && b == 1 && e ==1) {
      document.getElementById("amount").value = "74400";
      document.getElementById("product2").innerText = "74,400円";
    } else if (a == 86 && b == 1 && e ==1) {
      document.getElementById("amount").value = "66800";
      document.getElementById("product2").innerText = "66,800円";
    } else if (a == 87 && b == 1 && e ==1) {
      document.getElementById("amount").value = "60060";
      document.getElementById("product2").innerText = "60,060円";
    } else if (a == 88 && b == 1 && e ==1) {
      document.getElementById("amount").value = "54050";
      document.getElementById("product2").innerText = "54,050円";
    } else if (a == 89 && b == 1 && e ==1) {
      document.getElementById("amount").value = "48590";
      document.getElementById("product2").innerText = "48,590円";
    } else if (a == 90 && b == 1 && e ==1) {
      document.getElementById("amount").value = "43610";
      document.getElementById("product2").innerText = "43,610円";
    } else if (a == 91 && b == 1 && e ==1) {
      document.getElementById("amount").value = "39170";
      document.getElementById("product2").innerText = "39,170円";
    } else if (a == 92 && b == 1 && e ==1) {
      document.getElementById("amount").value = "35060";
      document.getElementById("product2").innerText = "35,060円";
    } else if (a == 93 && b == 1 && e ==1) {
      document.getElementById("amount").value = "31420";
      document.getElementById("product2").innerText = "31,420円";
    } else if (a == 94 && b == 1 && e ==1) {
      document.getElementById("amount").value = "28450";
      document.getElementById("product2").innerText = "28,450円";
    } else if (a == 95 && b == 1 && e ==1) {
      document.getElementById("amount").value = "26250";
      document.getElementById("product2").innerText = "26,250円";
    } else if (a == 96 && b == 1 && e ==1) {
      document.getElementById("amount").value = "24150";
      document.getElementById("product2").innerText = "24,150円";
    } else if (a == 97 && b == 1 && e ==1) {
      document.getElementById("amount").value = "22260";
      document.getElementById("product2").innerText = "22,260円";
    } else if (a == 98 && b == 1 && e ==1) {
      document.getElementById("amount").value = "20550";
      document.getElementById("product2").innerText = "20,550円";
    } else if (a == 99 && b == 1 && e ==1) {
      document.getElementById("amount").value = "18980";
      document.getElementById("product2").innerText = "18,980円";
    } else if (a == 50 && b == 2 && e ==1) {
      document.getElementById("amount").value = "2500000";
      document.getElementById("product2").innerText = "2,500,000円";
    } else if (a == 51 && b == 2 && e ==1) {
      document.getElementById("amount").value = "2380950";
      document.getElementById("product2").innerText = "2,380,950円";
    } else if (a == 52 && b == 2 && e ==1) {
      document.getElementById("amount").value = "2222220";
      document.getElementById("product2").innerText = "2,222,220円";
    } else if (a == 53 && b == 2 && e ==1) {
      document.getElementById("amount").value = "2083330";
      document.getElementById("product2").innerText = "2,083,330円";
    } else if (a == 54 && b == 2 && e ==1) {
      document.getElementById("amount").value = "2000000";
      document.getElementById("product2").innerText = "2,000,000円";
    } else if (a == 55 && b == 2 && e ==1) {
      document.getElementById("amount").value = "1923080";
      document.getElementById("product2").innerText = "1,923,080円";
    } else if (a == 56 && b == 2 && e ==1) {
      document.getElementById("amount").value = "1851850";
      document.getElementById("product2").innerText = "1,851,850円";
    } else if (a == 57 && b == 2 && e ==1) {
      document.getElementById("amount").value = "1785710";
      document.getElementById("product2").innerText = "1,785,710円";
    } else if (a == 58 && b == 2 && e ==1) {
      document.getElementById("amount").value = "1724140";
      document.getElementById("product2").innerText = "1,724,140円";
    } else if (a == 59 && b == 2 && e ==1) {
      document.getElementById("amount").value = "1612900";
      document.getElementById("product2").innerText = "1,612,900円";
    } else if (a == 60 && b == 2 && e ==1) {
      document.getElementById("amount").value = "1538460";
      document.getElementById("product2").innerText = "1,538,460円";
    } else if (a == 61 && b == 2 && e ==1) {
      document.getElementById("amount").value = "1428570";
      document.getElementById("product2").innerText = "1,428,570円";
    } else if (a == 62 && b == 2 && e ==1) {
      document.getElementById("amount").value = "1351350";
      document.getElementById("product2").innerText = "1,351,350円";
    } else if (a == 63 && b == 2 && e ==1) {
      document.getElementById("amount").value = "1265820";
      document.getElementById("product2").innerText = "1,265,820円";
    } else if (a == 64 && b == 2 && e ==1) {
      document.getElementById("amount").value = "1190480";
      document.getElementById("product2").innerText = "1,190,480円";
    } else if (a == 65 && b == 2 && e ==1) {
      document.getElementById("amount").value = "1111110";
      document.getElementById("product2").innerText = "1,111,110円";
    } else if (a == 66 && b == 2 && e ==1) {
      document.getElementById("amount").value = "1041670";
      document.getElementById("product2").innerText = "1,041,670円";
    } else if (a == 67 && b == 2 && e ==1) {
      document.getElementById("amount").value = "970870";
      document.getElementById("product2").innerText = "970,870円";
    } else if (a == 68 && b == 2 && e ==1) {
      document.getElementById("amount").value = "900900";
      document.getElementById("product2").innerText = "900,900円";
    } else if (a == 69 && b == 2 && e ==1) {
      document.getElementById("amount").value = "833330";
      document.getElementById("product2").innerText = "833,330円";
    } else if (a == 70 && b == 2 && e ==1) {
      document.getElementById("amount").value = "763360";
      document.getElementById("product2").innerText = "763,360円";
    } else if (a == 71 && b == 2 && e ==1) {
      document.getElementById("amount").value = "699300";
      document.getElementById("product2").innerText = "699,300円";
    } else if (a == 72 && b == 2 && e ==1) {
      document.getElementById("amount").value = "636940";
      document.getElementById("product2").innerText = "636,940円";
    } else if (a == 73 && b == 2 && e ==1) {
      document.getElementById("amount").value = "584800";
      document.getElementById("product2").innerText = "584,800円";
    } else if (a == 74 && b == 2 && e ==1) {
      document.getElementById("amount").value = "534760";
      document.getElementById("product2").innerText = "534,760円";
    } else if (a == 75 && b == 2 && e ==1) {
      document.getElementById("amount").value = "485440";
      document.getElementById("product2").innerText = "485,440円";
    } else if (a == 76 && b == 2 && e ==1) {
      document.getElementById("amount").value = "432900";
      document.getElementById("product2").innerText = "432,900円";
    } else if (a == 77 && b == 2 && e ==1) {
      document.getElementById("amount").value = "381680";
      document.getElementById("product2").innerText = "381,680円";
    } else if (a == 78 && b == 2 && e ==1) {
      document.getElementById("amount").value = "335570";
      document.getElementById("product2").innerText = "335,570円";
    } else if (a == 79 && b == 2 && e ==1) {
      document.getElementById("amount").value = "294990";
      document.getElementById("product2").innerText = "294,990円";
    } else if (a == 80 && b == 2 && e ==1) {
      document.getElementById("amount").value = "261780";
      document.getElementById("product2").innerText = "261,780円";
    } else if (a == 81 && b == 2 && e ==1) {
      document.getElementById("amount").value = "231480";
      document.getElementById("product2").innerText = "231,480円";
    } else if (a == 82 && b == 2 && e ==1) {
      document.getElementById("amount").value = "204080";
      document.getElementById("product2").innerText = "204,080円";
    } else if (a == 83 && b == 2 && e ==1) {
      document.getElementById("amount").value = "178890";
      document.getElementById("product2").innerText = "178,890円";
    } else if (a == 84 && b == 2 && e ==1) {
      document.getElementById("amount").value = "157230";
      document.getElementById("product2").innerText = "157,230円";
    } else if (a == 85 && b == 2 && e ==1) {
      document.getElementById("amount").value = "138500";
      document.getElementById("product2").innerText = "138,500円";
    } else if (a == 86 && b == 2 && e ==1) {
      document.getElementById("amount").value = "121800";
      document.getElementById("product2").innerText = "121,800円";
    } else if (a == 87 && b == 2 && e ==1) {
      document.getElementById("amount").value = "106950";
      document.getElementById("product2").innerText = "106,950円";
    } else if (a == 88 && b == 2 && e ==1) {
      document.getElementById("amount").value = "93460";
      document.getElementById("product2").innerText = "93,460円";
    } else if (a == 89 && b == 2 && e ==1) {
      document.getElementById("amount").value = "81900";
      document.getElementById("product2").innerText = "81,900円";
    } else if (a == 90 && b == 2 && e ==1) {
      document.getElementById("amount").value = "71840";
      document.getElementById("product2").innerText = "71,840円";
    } else if (a == 91 && b == 2 && e ==1) {
      document.getElementById("amount").value = "63010";
      document.getElementById("product2").innerText = "63,010円";
    } else if (a == 92 && b == 2 && e ==1) {
      document.getElementById("amount").value = "54980";
      document.getElementById("product2").innerText = "54,980円";
    } else if (a == 93 && b == 2 && e ==1) {
      document.getElementById("amount").value = "48030";
      document.getElementById("product2").innerText = "48,030円";
    } else if (a == 94 && b == 2 && e ==1) {
      document.getElementById("amount").value = "42210";
      document.getElementById("product2").innerText = "42,210円";
    } else if (a == 95 && b == 2 && e ==1) {
      document.getElementById("amount").value = "37220";
      document.getElementById("product2").innerText = "37,220円";
    } else if (a == 96 && b == 2 && e ==1) {
      document.getElementById("amount").value = "33480";
      document.getElementById("product2").innerText = "33,480円";
    } else if (a == 97 && b == 2 && e ==1) {
      document.getElementById("amount").value = "30300";
      document.getElementById("product2").innerText = "30,300円";
    } else if (a == 98 && b == 2 && e ==1) {
      document.getElementById("amount").value = "27560";
      document.getElementById("product2").innerText = "27,560円";
    } else if (a == 99 && b == 2 && e ==1) {
      document.getElementById("amount").value = "25180";
      document.getElementById("product2").innerText = "25,180円";
    } else if (a == 52 && b == 1 && e ==2) {
      document.getElementById("amount").value = "2985080";
      document.getElementById("product2").innerText = "2,985,080円";
    } else if (a == 53 && b == 1 && e ==2) {
      document.getElementById("amount").value = "2816900";
      document.getElementById("product2").innerText = "2,816,900円";
    } else if (a == 54 && b == 1 && e ==2) {
      document.getElementById("amount").value = "2597400";
      document.getElementById("product2").innerText = "2,597,400円";
    } else if (a == 55 && b == 1 && e ==2) {
      document.getElementById("amount").value = "2409640";
      document.getElementById("product2").innerText = "2,409,640円";
    } else if (a == 56 && b == 1 && e ==2) {
      document.getElementById("amount").value = "2247200";
      document.getElementById("product2").innerText = "2,247,200円";
    } else if (a == 57 && b == 1 && e ==2) {
      document.getElementById("amount").value = "2105260";
      document.getElementById("product2").innerText = "2,105,260円";
    } else if (a == 58 && b == 1 && e ==2) {
      document.getElementById("amount").value = "1960780";
      document.getElementById("product2").innerText = "1,960,780円";
    } else if (a == 59 && b == 1 && e ==2) {
      document.getElementById("amount").value = "1834860";
      document.getElementById("product2").innerText = "1,834,860円";
    } else if (a == 60 && b == 1 && e ==2) {
      document.getElementById("amount").value = "1694920";
      document.getElementById("product2").innerText = "1,694,920円";
    } else if (a == 61 && b == 1 && e ==2) {
      document.getElementById("amount").value = "1538460";
      document.getElementById("product2").innerText = "1,538,460円";
    } else if (a == 62 && b == 1 && e ==2) {
      document.getElementById("amount").value = "1398600";
      document.getElementById("product2").innerText = "1,398,600円";
    } else if (a == 63 && b == 1 && e ==2) {
      document.getElementById("amount").value = "1282060";
      document.getElementById("product2").innerText = "1,282,060円";
    } else if (a == 64 && b == 1 && e ==2) {
      document.getElementById("amount").value = "1183440";
      document.getElementById("product2").innerText = "1,183,440円";
    } else if (a == 65 && b == 1 && e ==2) {
      document.getElementById("amount").value = "1081080";
      document.getElementById("product2").innerText = "1,081,080円";
    } else if (a == 66 && b == 1 && e ==2) {
      document.getElementById("amount").value = "990100";
      document.getElementById("product2").innerText = "990,100円";
    } else if (a == 67 && b == 1 && e ==2) {
      document.getElementById("amount").value = "913240";
      document.getElementById("product2").innerText = "913,240円";
    } else if (a == 68 && b == 1 && e ==2) {
      document.getElementById("amount").value = "843880";
      document.getElementById("product2").innerText = "843,880円";
    } else if (a == 69 && b == 1 && e ==2) {
      document.getElementById("amount").value = "778220";
      document.getElementById("product2").innerText = "778,220円";
    } else if (a == 70 && b == 1 && e ==2) {
      document.getElementById("amount").value = "714280";
      document.getElementById("product2").innerText = "714,280円";
    } else if (a == 71 && b == 1 && e ==2) {
      document.getElementById("amount").value = "653600";
      document.getElementById("product2").innerText = "653,600円";
    } else if (a == 72 && b == 1 && e ==2) {
      document.getElementById("amount").value = "600600";
      document.getElementById("product2").innerText = "600,600円";
    } else if (a == 73 && b == 1 && e ==2) {
      document.getElementById("amount").value = "554020";
      document.getElementById("product2").innerText = "554,020円";
    } else if (a == 74 && b == 1 && e ==2) {
      document.getElementById("amount").value = "511500";
      document.getElementById("product2").innerText = "511,500円";
    } else if (a == 75 && b == 1 && e ==2) {
      document.getElementById("amount").value = "465120";
      document.getElementById("product2").innerText = "465,120円";
    } else if (a == 76 && b == 1 && e ==2) {
      document.getElementById("amount").value = "419280";
      document.getElementById("product2").innerText = "419,280円";
    } else if (a == 77 && b == 1 && e ==2) {
      document.getElementById("amount").value = "374540";
      document.getElementById("product2").innerText = "374,540円";
    } else if (a == 78 && b == 1 && e ==2) {
      document.getElementById("amount").value = "332220";
      document.getElementById("product2").innerText = "332,220円";
    } else if (a == 79 && b == 1 && e ==2) {
      document.getElementById("amount").value = "294120";
      document.getElementById("product2").innerText = "294,120円";
    } else if (a == 80 && b == 1 && e ==2) {
      document.getElementById("amount").value = "263500";
      document.getElementById("product2").innerText = "263,500円";
    } else if (a == 81 && b == 1 && e ==2) {
      document.getElementById("amount").value = "235020";
      document.getElementById("product2").innerText = "235,020円";
    } else if (a == 82 && b == 1 && e ==2) {
      document.getElementById("amount").value = "209860";
      document.getElementById("product2").innerText = "209,860円";
    } else if (a == 83 && b == 1 && e ==2) {
      document.getElementById("amount").value = "187100";
      document.getElementById("product2").innerText = "187,100円";
    } else if (a == 84 && b == 1 && e ==2) {
      document.getElementById("amount").value = "166660";
      document.getElementById("product2").innerText = "166,660円";
    } else if (a == 85 && b == 1 && e ==2) {
      document.getElementById("amount").value = "148800";
      document.getElementById("product2").innerText = "148,800円";
    } else if (a == 86 && b == 1 && e ==2) {
      document.getElementById("amount").value = "133600";
      document.getElementById("product2").innerText = "133,600円";
    } else if (a == 87 && b == 1 && e ==2) {
      document.getElementById("amount").value = "120120";
      document.getElementById("product2").innerText = "120,120円";
    } else if (a == 88 && b == 1 && e ==2) {
      document.getElementById("amount").value = "108100";
      document.getElementById("product2").innerText = "108,100円";
    } else if (a == 89 && b == 1 && e ==2) {
      document.getElementById("amount").value = "97180";
      document.getElementById("product2").innerText = "97,180円";
    } else if (a == 90 && b == 1 && e ==2) {
      document.getElementById("amount").value = "87220";
      document.getElementById("product2").innerText = "87,220円";
    } else if (a == 91 && b == 1 && e ==2) {
      document.getElementById("amount").value = "78340";
      document.getElementById("product2").innerText = "78,340円";
    } else if (a == 92 && b == 1 && e ==2) {
      document.getElementById("amount").value = "70120";
      document.getElementById("product2").innerText = "70,120円";
    } else if (a == 93 && b == 1 && e ==2) {
      document.getElementById("amount").value = "62840";
      document.getElementById("product2").innerText = "62,840円";
    } else if (a == 94 && b == 1 && e ==2) {
      document.getElementById("amount").value = "56900";
      document.getElementById("product2").innerText = "56,900円";
    } else if (a == 95 && b == 1 && e ==2) {
      document.getElementById("amount").value = "52500";
      document.getElementById("product2").innerText = "52,500円";
    } else if (a == 96 && b == 1 && e ==2) {
      document.getElementById("amount").value = "48300";
      document.getElementById("product2").innerText = "48,300円";
    } else if (a == 97 && b == 1 && e ==2) {
      document.getElementById("amount").value = "44520";
      document.getElementById("product2").innerText = "44,520円";
    } else if (a == 98 && b == 1 && e ==2) {
      document.getElementById("amount").value = "41100";
      document.getElementById("product2").innerText = "41,100円";
    } else if (a == 99 && b == 1 && e ==2) {
      document.getElementById("amount").value = "37960";
      document.getElementById("product2").innerText = "37,960円";
    } else if (a == 61 && b == 2 && e ==2) {
      document.getElementById("amount").value = "2857140";
      document.getElementById("product2").innerText = "2,857,140円";
    } else if (a == 62 && b == 2 && e ==2) {
      document.getElementById("amount").value = "2702700";
      document.getElementById("product2").innerText = "2,702,700円";
    } else if (a == 63 && b == 2 && e ==2) {
      document.getElementById("amount").value = "2531640";
      document.getElementById("product2").innerText = "2,531,640円";
    } else if (a == 64 && b == 2 && e ==2) {
      document.getElementById("amount").value = "2380960";
      document.getElementById("product2").innerText = "2,380,960円";
    } else if (a == 65 && b == 2 && e ==2) {
      document.getElementById("amount").value = "2222220";
      document.getElementById("product2").innerText = "2,222,220円";
    } else if (a == 66 && b == 2 && e ==2) {
      document.getElementById("amount").value = "2083340";
      document.getElementById("product2").innerText = "2,083,340円";
    } else if (a == 67 && b == 2 && e ==2) {
      document.getElementById("amount").value = "1941740";
      document.getElementById("product2").innerText = "1,941,740円";
    } else if (a == 68 && b == 2 && e ==2) {
      document.getElementById("amount").value = "1801800";
      document.getElementById("product2").innerText = "1,801,800円";
    } else if (a == 69 && b == 2 && e ==2) {
      document.getElementById("amount").value = "1666660";
      document.getElementById("product2").innerText = "1,666,660円";
    } else if (a == 70 && b == 2 && e ==2) {
      document.getElementById("amount").value = "1526720";
      document.getElementById("product2").innerText = "1,526,720円";
    } else if (a == 71 && b == 2 && e ==2) {
      document.getElementById("amount").value = "1398600";
      document.getElementById("product2").innerText = "1,398,600円";
    } else if (a == 72 && b == 2 && e ==2) {
      document.getElementById("amount").value = "1273880";
      document.getElementById("product2").innerText = "1,273,880円";
    } else if (a == 73 && b == 2 && e ==2) {
      document.getElementById("amount").value = "1169600";
      document.getElementById("product2").innerText = "1,169,600円";
    } else if (a == 74 && b == 2 && e ==2) {
      document.getElementById("amount").value = "1069520";
      document.getElementById("product2").innerText = "1,069,520円";
    } else if (a == 75 && b == 2 && e ==2) {
      document.getElementById("amount").value = "970880";
      document.getElementById("product2").innerText = "970,880円";
    } else if (a == 76 && b == 2 && e ==2) {
      document.getElementById("amount").value = "865800";
      document.getElementById("product2").innerText = "865,800円";
    } else if (a == 77 && b == 2 && e ==2) {
      document.getElementById("amount").value = "763360";
      document.getElementById("product2").innerText = "763,360円";
    } else if (a == 78 && b == 2 && e ==2) {
      document.getElementById("amount").value = "671140";
      document.getElementById("product2").innerText = "671,140円";
    } else if (a == 79 && b == 2 && e ==2) {
      document.getElementById("amount").value = "589980";
      document.getElementById("product2").innerText = "589,980円";
    } else if (a == 80 && b == 2 && e ==2) {
      document.getElementById("amount").value = "523560";
      document.getElementById("product2").innerText = "523,560円";
    } else if (a == 81 && b == 2 && e ==2) {
      document.getElementById("amount").value = "462960";
      document.getElementById("product2").innerText = "462,960円";
    } else if (a == 82 && b == 2 && e ==2) {
      document.getElementById("amount").value = "408160";
      document.getElementById("product2").innerText = "408,160円";
    } else if (a == 83 && b == 2 && e ==2) {
      document.getElementById("amount").value = "357780";
      document.getElementById("product2").innerText = "357,780円";
    } else if (a == 84 && b == 2 && e ==2) {
      document.getElementById("amount").value = "314460";
      document.getElementById("product2").innerText = "314,460円";
    } else if (a == 85 && b == 2 && e ==2) {
      document.getElementById("amount").value = "277000";
      document.getElementById("product2").innerText = "277,000円";
    } else if (a == 86 && b == 2 && e ==2) {
      document.getElementById("amount").value = "243600";
      document.getElementById("product2").innerText = "243,600円";
    } else if (a == 87 && b == 2 && e ==2) {
      document.getElementById("amount").value = "213900";
      document.getElementById("product2").innerText = "213,900円";
    } else if (a == 88 && b == 2 && e ==2) {
      document.getElementById("amount").value = "186920";
      document.getElementById("product2").innerText = "186,920円";
    } else if (a == 89 && b == 2 && e ==2) {
      document.getElementById("amount").value = "163800";
      document.getElementById("product2").innerText = "163,800円";
    } else if (a == 90 && b == 2 && e ==2) {
      document.getElementById("amount").value = "143680";
      document.getElementById("product2").innerText = "143,680円";
    } else if (a == 91 && b == 2 && e ==2) {
      document.getElementById("amount").value = "126020";
      document.getElementById("product2").innerText = "126,020円";
    } else if (a == 92 && b == 2 && e ==2) {
      document.getElementById("amount").value = "109960";
      document.getElementById("product2").innerText = "109,960円";
    } else if (a == 93 && b == 2 && e ==2) {
      document.getElementById("amount").value = "96060";
      document.getElementById("product2").innerText = "96,060円";
    } else if (a == 94 && b == 2 && e ==2) {
      document.getElementById("amount").value = "84420";
      document.getElementById("product2").innerText = "84,420円";
    } else if (a == 95 && b == 2 && e ==2) {
      document.getElementById("amount").value = "74440";
      document.getElementById("product2").innerText = "74,440円";
    } else if (a == 96 && b == 2 && e ==2) {
      document.getElementById("amount").value = "66960";
      document.getElementById("product2").innerText = "66,960円";
    } else if (a == 97 && b == 2 && e ==2) {
      document.getElementById("amount").value = "60600";
      document.getElementById("product2").innerText = "60,600円";
    } else if (a == 98 && b == 2 && e ==2) {
      document.getElementById("amount").value = "55120";
      document.getElementById("product2").innerText = "55,120円";
    } else if (a == 99 && b == 2 && e ==2) {
      document.getElementById("amount").value = "50360";
      document.getElementById("product2").innerText = "50,360円";
    } else if (a == 58 && b == 1 && e ==3) {
      document.getElementById("amount").value = "2941170";
      document.getElementById("product2").innerText = "2,941,170円";
    } else if (a == 59 && b == 1 && e ==3) {
      document.getElementById("amount").value = "2752290";
      document.getElementById("product2").innerText = "2,752,290円";
    } else if (a == 60 && b == 1 && e ==3) {
      document.getElementById("amount").value = "2542380";
      document.getElementById("product2").innerText = "2,542,380円";
    } else if (a == 61 && b == 1 && e ==3) {
      document.getElementById("amount").value = "2307690";
      document.getElementById("product2").innerText = "2,307,690円";
    } else if (a == 62 && b == 1 && e ==3) {
      document.getElementById("amount").value = "2097900";
      document.getElementById("product2").innerText = "2,097,900円";
    } else if (a == 63 && b == 1 && e ==3) {
      document.getElementById("amount").value = "1923090";
      document.getElementById("product2").innerText = "1,923,090円";
    } else if (a == 64 && b == 1 && e ==3) {
      document.getElementById("amount").value = "1775160";
      document.getElementById("product2").innerText = "1,775,160円";
    } else if (a == 65 && b == 1 && e ==3) {
      document.getElementById("amount").value = "1621620";
      document.getElementById("product2").innerText = "1,621,620円";
    } else if (a == 66 && b == 1 && e ==3) {
      document.getElementById("amount").value = "1485150";
      document.getElementById("product2").innerText = "1,485,150円";
    } else if (a == 67 && b == 1 && e ==3) {
      document.getElementById("amount").value = "1369860";
      document.getElementById("product2").innerText = "1,369,860円";
    } else if (a == 68 && b == 1 && e ==3) {
      document.getElementById("amount").value = "1265820";
      document.getElementById("product2").innerText = "1,265,820円";
    } else if (a == 69 && b == 1 && e ==3) {
      document.getElementById("amount").value = "1167330";
      document.getElementById("product2").innerText = "1,167,330円";
    } else if (a == 70 && b == 1 && e ==3) {
      document.getElementById("amount").value = "1071420";
      document.getElementById("product2").innerText = "1,071,420円";
    } else if (a == 71 && b == 1 && e ==3) {
      document.getElementById("amount").value = "980400";
      document.getElementById("product2").innerText = "980,400円";
    } else if (a == 72 && b == 1 && e ==3) {
      document.getElementById("amount").value = "900900";
      document.getElementById("product2").innerText = "900,900円";
    } else if (a == 73 && b == 1 && e ==3) {
      document.getElementById("amount").value = "831030";
      document.getElementById("product2").innerText = "831,030円";
    } else if (a == 74 && b == 1 && e ==3) {
      document.getElementById("amount").value = "767250";
      document.getElementById("product2").innerText = "767,250円";
    } else if (a == 75 && b == 1 && e ==3) {
      document.getElementById("amount").value = "697680";
      document.getElementById("product2").innerText = "697,680円";
    } else if (a == 76 && b == 1 && e ==3) {
      document.getElementById("amount").value = "628920";
      document.getElementById("product2").innerText = "628,920円";
    } else if (a == 77 && b == 1 && e ==3) {
      document.getElementById("amount").value = "561810";
      document.getElementById("product2").innerText = "561,810円";
    } else if (a == 78 && b == 1 && e ==3) {
      document.getElementById("amount").value = "498330";
      document.getElementById("product2").innerText = "498,330円";
    } else if (a == 79 && b == 1 && e ==3) {
      document.getElementById("amount").value = "441180";
      document.getElementById("product2").innerText = "441,180円";
    } else if (a == 80 && b == 1 && e ==3) {
      document.getElementById("amount").value = "395250";
      document.getElementById("product2").innerText = "395,250円";
    } else if (a == 81 && b == 1 && e ==3) {
      document.getElementById("amount").value = "352530";
      document.getElementById("product2").innerText = "352,530円";
    } else if (a == 82 && b == 1 && e ==3) {
      document.getElementById("amount").value = "314790";
      document.getElementById("product2").innerText = "314,790円";
    } else if (a == 83 && b == 1 && e ==3) {
      document.getElementById("amount").value = "280650";
      document.getElementById("product2").innerText = "280,650円";
    } else if (a == 84 && b == 1 && e ==3) {
      document.getElementById("amount").value = "249990";
      document.getElementById("product2").innerText = "249,990円";
    } else if (a == 85 && b == 1 && e ==3) {
      document.getElementById("amount").value = "223200";
      document.getElementById("product2").innerText = "223,200円";
    } else if (a == 86 && b == 1 && e ==3) {
      document.getElementById("amount").value = "200400";
      document.getElementById("product2").innerText = "200,400円";
    } else if (a == 87 && b == 1 && e ==3) {
      document.getElementById("amount").value = "180180";
      document.getElementById("product2").innerText = "180,180円";
    } else if (a == 88 && b == 1 && e ==3) {
      document.getElementById("amount").value = "162150";
      document.getElementById("product2").innerText = "162,150円";
    } else if (a == 89 && b == 1 && e ==3) {
      document.getElementById("amount").value = "145770";
      document.getElementById("product2").innerText = "145,770円";
    } else if (a == 90 && b == 1 && e ==3) {
      document.getElementById("amount").value = "130830";
      document.getElementById("product2").innerText = "130,830円";
    } else if (a == 91 && b == 1 && e ==3) {
      document.getElementById("amount").value = "117510";
      document.getElementById("product2").innerText = "117,510円";
    } else if (a == 92 && b == 1 && e ==3) {
      document.getElementById("amount").value = "105180";
      document.getElementById("product2").innerText = "105,180円";
    } else if (a == 93 && b == 1 && e ==3) {
      document.getElementById("amount").value = "94260";
      document.getElementById("product2").innerText = "94,260円";
    } else if (a == 94 && b == 1 && e ==3) {
      document.getElementById("amount").value = "85350";
      document.getElementById("product2").innerText = "85,350円";
    } else if (a == 95 && b == 1 && e ==3) {
      document.getElementById("amount").value = "78750";
      document.getElementById("product2").innerText = "78,750円";
    } else if (a == 96 && b == 1 && e ==3) {
      document.getElementById("amount").value = "72450";
      document.getElementById("product2").innerText = "72,450円";
    } else if (a == 97 && b == 1 && e ==3) {
      document.getElementById("amount").value = "66780";
      document.getElementById("product2").innerText = "66,780円";
    } else if (a == 98 && b == 1 && e ==3) {
      document.getElementById("amount").value = "61650";
      document.getElementById("product2").innerText = "61,650円";
    } else if (a == 99 && b == 1 && e ==3) {
      document.getElementById("amount").value = "56940";
      document.getElementById("product2").innerText = "56,940円";
    } else if (a == 67 && b == 2 && e ==3) {
      document.getElementById("amount").value = "2912610";
      document.getElementById("product2").innerText = "2,912,610円";
    } else if (a == 68 && b == 2 && e ==3) {
      document.getElementById("amount").value = "2702700";
      document.getElementById("product2").innerText = "2,702,700円";
    } else if (a == 69 && b == 2 && e ==3) {
      document.getElementById("amount").value = "2499990";
      document.getElementById("product2").innerText = "2,499,990円";
    } else if (a == 70 && b == 2 && e ==3) {
      document.getElementById("amount").value = "2290080";
      document.getElementById("product2").innerText = "2,290,080円";
    } else if (a == 71 && b == 2 && e ==3) {
      document.getElementById("amount").value = "2097900";
      document.getElementById("product2").innerText = "2,097,900円";
    } else if (a == 72 && b == 2 && e ==3) {
      document.getElementById("amount").value = "1910820";
      document.getElementById("product2").innerText = "1,910,820円";
    } else if (a == 73 && b == 2 && e ==3) {
      document.getElementById("amount").value = "1754400";
      document.getElementById("product2").innerText = "1,754,400円";
    } else if (a == 74 && b == 2 && e ==3) {
      document.getElementById("amount").value = "1604280";
      document.getElementById("product2").innerText = "1,604,280円";
    } else if (a == 75 && b == 2 && e ==3) {
      document.getElementById("amount").value = "1456320";
      document.getElementById("product2").innerText = "1,456,320円";
    } else if (a == 76 && b == 2 && e ==3) {
      document.getElementById("amount").value = "1298700";
      document.getElementById("product2").innerText = "1,298,700円";
    } else if (a == 77 && b == 2 && e ==3) {
      document.getElementById("amount").value = "1145040";
      document.getElementById("product2").innerText = "1,145,040円";
    } else if (a == 78 && b == 2 && e ==3) {
      document.getElementById("amount").value = "1006710";
      document.getElementById("product2").innerText = "1,006,710円";
    } else if (a == 79 && b == 2 && e ==3) {
      document.getElementById("amount").value = "884970";
      document.getElementById("product2").innerText = "884,970円";
    } else if (a == 80 && b == 2 && e ==3) {
      document.getElementById("amount").value = "785340";
      document.getElementById("product2").innerText = "785,340円";
    } else if (a == 81 && b == 2 && e ==3) {
      document.getElementById("amount").value = "694440";
      document.getElementById("product2").innerText = "694,440円";
    } else if (a == 82 && b == 2 && e ==3) {
      document.getElementById("amount").value = "612240";
      document.getElementById("product2").innerText = "612,240円";
    } else if (a == 83 && b == 2 && e ==3) {
      document.getElementById("amount").value = "536670";
      document.getElementById("product2").innerText = "536,670円";
    } else if (a == 84 && b == 2 && e ==3) {
      document.getElementById("amount").value = "471690";
      document.getElementById("product2").innerText = "471,690円";
    } else if (a == 85 && b == 2 && e ==3) {
      document.getElementById("amount").value = "415500";
      document.getElementById("product2").innerText = "415,500円";
    } else if (a == 86 && b == 2 && e ==3) {
      document.getElementById("amount").value = "365400";
      document.getElementById("product2").innerText = "365,400円";
    } else if (a == 87 && b == 2 && e ==3) {
      document.getElementById("amount").value = "320850";
      document.getElementById("product2").innerText = "320,850円";
    } else if (a == 88 && b == 2 && e ==3) {
      document.getElementById("amount").value = "280380";
      document.getElementById("product2").innerText = "280,380円";
    } else if (a == 89 && b == 2 && e ==3) {
      document.getElementById("amount").value = "245700";
      document.getElementById("product2").innerText = "245,700円";
    } else if (a == 90 && b == 2 && e ==3) {
      document.getElementById("amount").value = "215520";
      document.getElementById("product2").innerText = "215,520円";
    } else if (a == 91 && b == 2 && e ==3) {
      document.getElementById("amount").value = "189030";
      document.getElementById("product2").innerText = "189,030円";
    } else if (a == 92 && b == 2 && e ==3) {
      document.getElementById("amount").value = "164940";
      document.getElementById("product2").innerText = "164,940円";
    } else if (a == 93 && b == 2 && e ==3) {
      document.getElementById("amount").value = "144090";
      document.getElementById("product2").innerText = "144,090円";
    } else if (a == 94 && b == 2 && e ==3) {
      document.getElementById("amount").value = "126630";
      document.getElementById("product2").innerText = "126,630円";
    } else if (a == 95 && b == 2 && e ==3) {
      document.getElementById("amount").value = "111660";
      document.getElementById("product2").innerText = "111,660円";
    } else if (a == 96 && b == 2 && e ==3) {
      document.getElementById("amount").value = "100440";
      document.getElementById("product2").innerText = "100,440円";
    } else if (a == 97 && b == 2 && e ==3) {
      document.getElementById("amount").value = "90900";
      document.getElementById("product2").innerText = "90,900円";
    } else if (a == 98 && b == 2 && e ==3) {
      document.getElementById("amount").value = "82680";
      document.getElementById("product2").innerText = "82,680円";
    } else if (a == 99 && b == 2 && e ==3) {
      document.getElementById("amount").value = "75540";
      document.getElementById("product2").innerText = "75,540円";
    } else if (a == 64 && b == 1 && e ==4) {
      document.getElementById("amount").value = "2958600";
      document.getElementById("product2").innerText = "2,958,600円";
    } else if (a == 65 && b == 1 && e ==4) {
      document.getElementById("amount").value = "2702700";
      document.getElementById("product2").innerText = "2,702,700円";
    } else if (a == 66 && b == 1 && e ==4) {
      document.getElementById("amount").value = "2475250";
      document.getElementById("product2").innerText = "2,475,250円";
    } else if (a == 67 && b == 1 && e ==4) {
      document.getElementById("amount").value = "2283100";
      document.getElementById("product2").innerText = "2,283,100円";
    } else if (a == 68 && b == 1 && e ==4) {
      document.getElementById("amount").value = "2109700";
      document.getElementById("product2").innerText = "2,109,700円";
    } else if (a == 69 && b == 1 && e ==4) {
      document.getElementById("amount").value = "1945550";
      document.getElementById("product2").innerText = "1,945,550円";
    } else if (a == 70 && b == 1 && e ==4) {
      document.getElementById("amount").value = "1785700";
      document.getElementById("product2").innerText = "1,785,700円";
    } else if (a == 71 && b == 1 && e ==4) {
      document.getElementById("amount").value = "1634000";
      document.getElementById("product2").innerText = "1,634,000円";
    } else if (a == 72 && b == 1 && e ==4) {
      document.getElementById("amount").value = "1501500";
      document.getElementById("product2").innerText = "1,501,500円";
    } else if (a == 73 && b == 1 && e ==4) {
      document.getElementById("amount").value = "1385050";
      document.getElementById("product2").innerText = "1,385,050円";
    } else if (a == 74 && b == 1 && e ==4) {
      document.getElementById("amount").value = "1278750";
      document.getElementById("product2").innerText = "1,278,750円";
    } else if (a == 75 && b == 1 && e ==4) {
      document.getElementById("amount").value = "1162800";
      document.getElementById("product2").innerText = "1,162,800円";
    } else if (a == 76 && b == 1 && e ==4) {
      document.getElementById("amount").value = "1048200";
      document.getElementById("product2").innerText = "1,048,200円";
    } else if (a == 77 && b == 1 && e ==4) {
      document.getElementById("amount").value = "936350";
      document.getElementById("product2").innerText = "936,350円";
    } else if (a == 78 && b == 1 && e ==4) {
      document.getElementById("amount").value = "830550";
      document.getElementById("product2").innerText = "830,550円";
    } else if (a == 79 && b == 1 && e ==4) {
      document.getElementById("amount").value = "735300";
      document.getElementById("product2").innerText = "735,300円";
    } else if (a == 80 && b == 1 && e ==4) {
      document.getElementById("amount").value = "658750";
      document.getElementById("product2").innerText = "658,750円";
    } else if (a == 81 && b == 1 && e ==4) {
      document.getElementById("amount").value = "587550";
      document.getElementById("product2").innerText = "587,550円";
    } else if (a == 82 && b == 1 && e ==4) {
      document.getElementById("amount").value = "524650";
      document.getElementById("product2").innerText = "524,650円";
    } else if (a == 83 && b == 1 && e ==4) {
      document.getElementById("amount").value = "467750";
      document.getElementById("product2").innerText = "467,750円";
    } else if (a == 84 && b == 1 && e ==4) {
      document.getElementById("amount").value = "416650";
      document.getElementById("product2").innerText = "416,650円";
    } else if (a == 85 && b == 1 && e ==4) {
      document.getElementById("amount").value = "372000";
      document.getElementById("product2").innerText = "372,000円";
    } else if (a == 86 && b == 1 && e ==4) {
      document.getElementById("amount").value = "334000";
      document.getElementById("product2").innerText = "334,000円";
    } else if (a == 87 && b == 1 && e ==4) {
      document.getElementById("amount").value = "300300";
      document.getElementById("product2").innerText = "300,300円";
    } else if (a == 88 && b == 1 && e ==4) {
      document.getElementById("amount").value = "270250";
      document.getElementById("product2").innerText = "270,250円";
    } else if (a == 89 && b == 1 && e ==4) {
      document.getElementById("amount").value = "242950";
      document.getElementById("product2").innerText = "242,950円";
    } else if (a == 90 && b == 1 && e ==4) {
      document.getElementById("amount").value = "218050";
      document.getElementById("product2").innerText = "218,050円";
    } else if (a == 91 && b == 1 && e ==4) {
      document.getElementById("amount").value = "195850";
      document.getElementById("product2").innerText = "195,850円";
    } else if (a == 92 && b == 1 && e ==4) {
      document.getElementById("amount").value = "175300";
      document.getElementById("product2").innerText = "175,300円";
    } else if (a == 93 && b == 1 && e ==4) {
      document.getElementById("amount").value = "157100";
      document.getElementById("product2").innerText = "157,100円";
    } else if (a == 94 && b == 1 && e ==4) {
      document.getElementById("amount").value = "142250";
      document.getElementById("product2").innerText = "142,250円";
    } else if (a == 95 && b == 1 && e ==4) {
      document.getElementById("amount").value = "131250";
      document.getElementById("product2").innerText = "131,250円";
    } else if (a == 96 && b == 1 && e ==4) {
      document.getElementById("amount").value = "120750";
      document.getElementById("product2").innerText = "120,750円";
    } else if (a == 97 && b == 1 && e ==4) {
      document.getElementById("amount").value = "111300";
      document.getElementById("product2").innerText = "111,300円";
    } else if (a == 98 && b == 1 && e ==4) {
      document.getElementById("amount").value = "102750";
      document.getElementById("product2").innerText = "102,750円";
    } else if (a == 99 && b == 1 && e ==4) {
      document.getElementById("amount").value = "94900";
      document.getElementById("product2").innerText = "94,900円";
    } else if (a == 73 && b == 2 && e ==4) {
      document.getElementById("amount").value = "2924000";
      document.getElementById("product2").innerText = "2,924,000円";
    } else if (a == 74 && b == 2 && e ==4) {
      document.getElementById("amount").value = "2673800";
      document.getElementById("product2").innerText = "2,673,800円";
    } else if (a == 75 && b == 2 && e ==4) {
      document.getElementById("amount").value = "2427200";
      document.getElementById("product2").innerText = "2,427,200円";
    } else if (a == 76 && b == 2 && e ==4) {
      document.getElementById("amount").value = "2164500";
      document.getElementById("product2").innerText = "2,164,500円";
    } else if (a == 77 && b == 2 && e ==4) {
      document.getElementById("amount").value = "1908400";
      document.getElementById("product2").innerText = "1,908,400円";
    } else if (a == 78 && b == 2 && e ==4) {
      document.getElementById("amount").value = "1677850";
      document.getElementById("product2").innerText = "1,677,850円";
    } else if (a == 79 && b == 2 && e ==4) {
      document.getElementById("amount").value = "1474950";
      document.getElementById("product2").innerText = "1,474,950円";
    } else if (a == 80 && b == 2 && e ==4) {
      document.getElementById("amount").value = "1308900";
      document.getElementById("product2").innerText = "1,308,900円";
    } else if (a == 81 && b == 2 && e ==4) {
      document.getElementById("amount").value = "1157400";
      document.getElementById("product2").innerText = "1,157,400円";
    } else if (a == 82 && b == 2 && e ==4) {
      document.getElementById("amount").value = "1020400";
      document.getElementById("product2").innerText = "1,020,400円";
    } else if (a == 83 && b == 2 && e ==4) {
      document.getElementById("amount").value = "894450";
      document.getElementById("product2").innerText = "894,450円";
    } else if (a == 84 && b == 2 && e ==4) {
      document.getElementById("amount").value = "786150";
      document.getElementById("product2").innerText = "786,150円";
    } else if (a == 85 && b == 2 && e ==4) {
      document.getElementById("amount").value = "692500";
      document.getElementById("product2").innerText = "692,500円";
    } else if (a == 86 && b == 2 && e ==4) {
      document.getElementById("amount").value = "609000";
      document.getElementById("product2").innerText = "609,000円";
    } else if (a == 87 && b == 2 && e ==4) {
      document.getElementById("amount").value = "534750";
      document.getElementById("product2").innerText = "534,750円";
    } else if (a == 88 && b == 2 && e ==4) {
      document.getElementById("amount").value = "467300";
      document.getElementById("product2").innerText = "467,300円";
    } else if (a == 89 && b == 2 && e ==4) {
      document.getElementById("amount").value = "409500";
      document.getElementById("product2").innerText = "409,500円";
    } else if (a == 90 && b == 2 && e ==4) {
      document.getElementById("amount").value = "359200";
      document.getElementById("product2").innerText = "359,200円";
    } else if (a == 91 && b == 2 && e ==4) {
      document.getElementById("amount").value = "315050";
      document.getElementById("product2").innerText = "315,050円";
    } else if (a == 92 && b == 2 && e ==4) {
      document.getElementById("amount").value = "274900";
      document.getElementById("product2").innerText = "274,900円";
    } else if (a == 93 && b == 2 && e ==4) {
      document.getElementById("amount").value = "240150";
      document.getElementById("product2").innerText = "240,150円";
    } else if (a == 94 && b == 2 && e ==4) {
      document.getElementById("amount").value = "211050";
      document.getElementById("product2").innerText = "211,050円";
    } else if (a == 95 && b == 2 && e ==4) {
      document.getElementById("amount").value = "186100";
      document.getElementById("product2").innerText = "186,100円";
    } else if (a == 96 && b == 2 && e ==4) {
      document.getElementById("amount").value = "167400";
      document.getElementById("product2").innerText = "167,400円";
    } else if (a == 97 && b == 2 && e ==4) {
      document.getElementById("amount").value = "151500";
      document.getElementById("product2").innerText = "151,500円";
    } else if (a == 98 && b == 2 && e ==4) {
      document.getElementById("amount").value = "137800";
      document.getElementById("product2").innerText = "137,800円";
    } else if (a == 99 && b == 2 && e ==4) {
      document.getElementById("amount").value = "125900";
      document.getElementById("product2").innerText = "125,900円";
    } else if (a == 50 && b == 1 && e ==5) {
      document.getElementById("amount").value = "1468400";
      document.getElementById("product2").innerText = "1,468,400円";
    } else if (a == 51 && b == 1 && e ==5) {
      document.getElementById("amount").value = "1375500";
      document.getElementById("product2").innerText = "1,375,500円";
    } else if (a == 52 && b == 1 && e ==5) {
      document.getElementById("amount").value = "1282100";
      document.getElementById("product2").innerText = "1,282,100円";
    } else if (a == 53 && b == 1 && e ==5) {
      document.getElementById("amount").value = "1199000";
      document.getElementById("product2").innerText = "1,199,000円";
    } else if (a == 54 && b == 1 && e ==5) {
      document.getElementById("amount").value = "1114800";
      document.getElementById("product2").innerText = "1,114,800円";
    } else if (a == 55 && b == 1 && e ==5) {
      document.getElementById("amount").value = "1033100";
      document.getElementById("product2").innerText = "1,033,100円";
    } else if (a == 56 && b == 1 && e ==5) {
      document.getElementById("amount").value = "959700";
      document.getElementById("product2").innerText = "959,700円";
    } else if (a == 57 && b == 1 && e ==5) {
      document.getElementById("amount").value = "896900";
      document.getElementById("product2").innerText = "896,900円";
    } else if (a == 58 && b == 1 && e ==5) {
      document.getElementById("amount").value = "841000";
      document.getElementById("product2").innerText = "841,000円";
    } else if (a == 59 && b == 1 && e ==5) {
      document.getElementById("amount").value = "784300";
      document.getElementById("product2").innerText = "784,300円";
    } else if (a == 60 && b == 1 && e ==5) {
      document.getElementById("amount").value = "725700";
      document.getElementById("product2").innerText = "725,700円";
    } else if (a == 61 && b == 1 && e ==5) {
      document.getElementById("amount").value = "660500";
      document.getElementById("product2").innerText = "660,500円";
    } else if (a == 62 && b == 1 && e ==5) {
      document.getElementById("amount").value = "600600";
      document.getElementById("product2").innerText = "600,600円";
    } else if (a == 63 && b == 1 && e ==5) {
      document.getElementById("amount").value = "549800";
      document.getElementById("product2").innerText = "549,800円";
    } else if (a == 64 && b == 1 && e ==5) {
      document.getElementById("amount").value = "507100";
      document.getElementById("product2").innerText = "507,100円";
    } else if (a == 65 && b == 1 && e ==5) {
      document.getElementById("amount").value = "464300";
      document.getElementById("product2").innerText = "464,300円";
    } else if (a == 66 && b == 1 && e ==5) {
      document.getElementById("amount").value = "425900";
      document.getElementById("product2").innerText = "425,900円";
    } else if (a == 67 && b == 1 && e ==5) {
      document.getElementById("amount").value = "392800";
      document.getElementById("product2").innerText = "392,800円";
    } else if (a == 68 && b == 1 && e ==5) {
      document.getElementById("amount").value = "361900";
      document.getElementById("product2").innerText = "361,900円";
    } else if (a == 69 && b == 1 && e ==5) {
      document.getElementById("amount").value = "334100";
      document.getElementById("product2").innerText = "334,100円";
    } else if (a == 70 && b == 1 && e ==5) {
      document.getElementById("amount").value = "307400";
      document.getElementById("product2").innerText = "307,400円";
    } else if (a == 71 && b == 1 && e ==5) {
      document.getElementById("amount").value = "281800";
      document.getElementById("product2").innerText = "281,800円";
    } else if (a == 72 && b == 1 && e ==5) {
      document.getElementById("amount").value = "258600";
      document.getElementById("product2").innerText = "258,600円";
    } else if (a == 73 && b == 1 && e ==5) {
      document.getElementById("amount").value = "239300";
      document.getElementById("product2").innerText = "239,300円";
    } else if (a == 74 && b == 1 && e ==5) {
      document.getElementById("amount").value = "220800";
      document.getElementById("product2").innerText = "220,800円";
    } else if (a == 75 && b == 1 && e ==5) {
      document.getElementById("amount").value = "201400";
      document.getElementById("product2").innerText = "201,400円";
    } else if (a == 76 && b == 1 && e ==5) {
      document.getElementById("amount").value = "181800";
      document.getElementById("product2").innerText = "181,800円";
    } else if (a == 77 && b == 1 && e ==5) {
      document.getElementById("amount").value = "162700";
      document.getElementById("product2").innerText = "162,700円";
    } else if (a == 78 && b == 1 && e ==5) {
      document.getElementById("amount").value = "144600";
      document.getElementById("product2").innerText = "144,600円";
    } else if (a == 79 && b == 1 && e ==5) {
      document.getElementById("amount").value = "128400";
      document.getElementById("product2").innerText = "128,400円";
    } else if (a == 80 && b == 1 && e ==5) {
      document.getElementById("amount").value = "115300";
      document.getElementById("product2").innerText = "115,300円";
    } else if (a == 81 && b == 1 && e ==5) {
      document.getElementById("amount").value = "103300";
      document.getElementById("product2").innerText = "103,300円";
    } else if (a == 82 && b == 1 && e ==5) {
      document.getElementById("amount").value = "92500";
      document.getElementById("product2").innerText = "92,500円";
    } else if (a == 83 && b == 1 && e ==5) {
      document.getElementById("amount").value = "82900";
      document.getElementById("product2").innerText = "82,900円";
    } else if (a == 84 && b == 1 && e ==5) {
      document.getElementById("amount").value = "74200";
      document.getElementById("product2").innerText = "74,200円";
    } else if (a == 85 && b == 1 && e ==5) {
      document.getElementById("amount").value = "66600";
      document.getElementById("product2").innerText = "66,600円";
    } else if (a == 86 && b == 1 && e ==5) {
      document.getElementById("amount").value = "60200";
      document.getElementById("product2").innerText = "60,200円";
    } else if (a == 87 && b == 1 && e ==5) {
      document.getElementById("amount").value = "54500";
      document.getElementById("product2").innerText = "54,500円";
    } else if (a == 88 && b == 1 && e ==5) {
      document.getElementById("amount").value = "49400";
      document.getElementById("product2").innerText = "49,400円";
    } else if (a == 89 && b == 1 && e ==5) {
      document.getElementById("amount").value = "44800";
      document.getElementById("product2").innerText = "44,800円";
    } else if (a == 90 && b == 1 && e ==5) {
      document.getElementById("amount").value = "40600";
      document.getElementById("product2").innerText = "40,600円";
    } else if (a == 91 && b == 1 && e ==5) {
      document.getElementById("amount").value = "36800";
      document.getElementById("product2").innerText = "36,800円";
    } else if (a == 92 && b == 1 && e ==5) {
      document.getElementById("amount").value = "33400";
      document.getElementById("product2").innerText = "33,400円";
    } else if (a == 93 && b == 1 && e ==5) {
      document.getElementById("amount").value = "30300";
      document.getElementById("product2").innerText = "30,300円";
    } else if (a == 94 && b == 1 && e ==5) {
      document.getElementById("amount").value = "27800";
      document.getElementById("product2").innerText = "27,800円";
    } else if (a == 95 && b == 1 && e ==5) {
      document.getElementById("amount").value = "26000";
      document.getElementById("product2").innerText = "26,000円";
    } else if (a == 96 && b == 1 && e ==5) {
      document.getElementById("amount").value = "24200";
      document.getElementById("product2").innerText = "24,200円";
    } else if (a == 97 && b == 1 && e ==5) {
      document.getElementById("amount").value = "22600";
      document.getElementById("product2").innerText = "22,600円";
    } else if (a == 98 && b == 1 && e ==5) {
      document.getElementById("amount").value = "21200";
      document.getElementById("product2").innerText = "21,200円";
    } else if (a == 99 && b == 1 && e ==5) {
      document.getElementById("amount").value = "19900";
      document.getElementById("product2").innerText = "19,900円";
    } else if (a == 50 && b == 2 && e ==5) {
      document.getElementById("amount").value = "2132200";
      document.getElementById("product2").innerText = "2,132,200円";
    } else if (a == 51 && b == 2 && e ==5) {
      document.getElementById("amount").value = "2008000";
      document.getElementById("product2").innerText = "2,008,000円";
    } else if (a == 52 && b == 2 && e ==5) {
      document.getElementById("amount").value = "1893900";
      document.getElementById("product2").innerText = "1,893,900円";
    } else if (a == 53 && b == 2 && e ==5) {
      document.getElementById("amount").value = "1792100";
      document.getElementById("product2").innerText = "1,792,100円";
    } else if (a == 54 && b == 2 && e ==5) {
      document.getElementById("amount").value = "1706500";
      document.getElementById("product2").innerText = "1,706,500円";
    } else if (a == 55 && b == 2 && e ==5) {
      document.getElementById("amount").value = "1634000";
      document.getElementById("product2").innerText = "1,634,000円";
    } else if (a == 56 && b == 2 && e ==5) {
      document.getElementById("amount").value = "1577300";
      document.getElementById("product2").innerText = "1,577,300円";
    } else if (a == 57 && b == 2 && e ==5) {
      document.getElementById("amount").value = "1522100";
      document.getElementById("product2").innerText = "1,522,100円";
    } else if (a == 58 && b == 2 && e ==5) {
      document.getElementById("amount").value = "1466300";
      document.getElementById("product2").innerText = "1,466,300円";
    } else if (a == 59 && b == 2 && e ==5) {
      document.getElementById("amount").value = "1388900";
      document.getElementById("product2").innerText = "1,388,900円";
    } else if (a == 60 && b == 2 && e ==5) {
      document.getElementById("amount").value = "1307200";
      document.getElementById("product2").innerText = "1,307,200円";
    } else if (a == 61 && b == 2 && e ==5) {
      document.getElementById("amount").value = "1222500";
      document.getElementById("product2").innerText = "1,222,500円";
    } else if (a == 62 && b == 2 && e ==5) {
      document.getElementById("amount").value = "1149400";
      document.getElementById("product2").innerText = "1,149,400円";
    } else if (a == 63 && b == 2 && e ==5) {
      document.getElementById("amount").value = "1083400";
      document.getElementById("product2").innerText = "1,083,400円";
    } else if (a == 64 && b == 2 && e ==5) {
      document.getElementById("amount").value = "1020400";
      document.getElementById("product2").innerText = "1,020,400円";
    } else if (a == 65 && b == 2 && e ==5) {
      document.getElementById("amount").value = "953300";
      document.getElementById("product2").innerText = "953,300円";
    } else if (a == 66 && b == 2 && e ==5) {
      document.getElementById("amount").value = "887300";
      document.getElementById("product2").innerText = "887,300円";
    } else if (a == 67 && b == 2 && e ==5) {
      document.getElementById("amount").value = "827800";
      document.getElementById("product2").innerText = "827,800円";
    } else if (a == 68 && b == 2 && e ==5) {
      document.getElementById("amount").value = "769200";
      document.getElementById("product2").innerText = "769,200円";
    } else if (a == 69 && b == 2 && e ==5) {
      document.getElementById("amount").value = "711700";
      document.getElementById("product2").innerText = "711,700円";
    } else if (a == 70 && b == 2 && e ==5) {
      document.getElementById("amount").value = "654000";
      document.getElementById("product2").innerText = "654,000円";
    } else if (a == 71 && b == 2 && e ==5) {
      document.getElementById("amount").value = "598400";
      document.getElementById("product2").innerText = "598,400円";
    } else if (a == 72 && b == 2 && e ==5) {
      document.getElementById("amount").value = "546100";
      document.getElementById("product2").innerText = "546,100円";
    } else if (a == 73 && b == 2 && e ==5) {
      document.getElementById("amount").value = "501800";
      document.getElementById("product2").innerText = "501,800円";
    } else if (a == 74 && b == 2 && e ==5) {
      document.getElementById("amount").value = "459600";
      document.getElementById("product2").innerText = "459,600円";
    } else if (a == 75 && b == 2 && e ==5) {
      document.getElementById("amount").value = "415800";
      document.getElementById("product2").innerText = "415,800円";
    } else if (a == 76 && b == 2 && e ==5) {
      document.getElementById("amount").value = "371200";
      document.getElementById("product2").innerText = "371,200円";
    } else if (a == 77 && b == 2 && e ==5) {
      document.getElementById("amount").value = "328400";
      document.getElementById("product2").innerText = "328,400円";
    } else if (a == 78 && b == 2 && e ==5) {
      document.getElementById("amount").value = "289400";
      document.getElementById("product2").innerText = "289,400円";
    } else if (a == 79 && b == 2 && e ==5) {
      document.getElementById("amount").value = "254300";
      document.getElementById("product2").innerText = "254,300円";
    } else if (a == 80 && b == 2 && e ==5) {
      document.getElementById("amount").value = "226100";
      document.getElementById("product2").innerText = "226,100円";
    } else if (a == 81 && b == 2 && e ==5) {
      document.getElementById("amount").value = "200600";
      document.getElementById("product2").innerText = "200,600円";
    } else if (a == 82 && b == 2 && e ==5) {
      document.getElementById("amount").value = "176900";
      document.getElementById("product2").innerText = "176,900円";
    } else if (a == 83 && b == 2 && e ==5) {
      document.getElementById("amount").value = "155700";
      document.getElementById("product2").innerText = "155,700円";
    } else if (a == 84 && b == 2 && e ==5) {
      document.getElementById("amount").value = "137200";
      document.getElementById("product2").innerText = "137,200円";
    } else if (a == 85 && b == 2 && e ==5) {
      document.getElementById("amount").value = "121200";
      document.getElementById("product2").innerText = "121,200円";
    } else if (a == 86 && b == 2 && e ==5) {
      document.getElementById("amount").value = "107100";
      document.getElementById("product2").innerText = "107,100円";
    } else if (a == 87 && b == 2 && e ==5) {
      document.getElementById("amount").value = "94400";
      document.getElementById("product2").innerText = "94,400円";
    } else if (a == 88 && b == 2 && e ==5) {
      document.getElementById("amount").value = "83000";
      document.getElementById("product2").innerText = "83,000円";
    } else if (a == 89 && b == 2 && e ==5) {
      document.getElementById("amount").value = "73200";
      document.getElementById("product2").innerText = "73,200円";
    } else if (a == 90 && b == 2 && e ==5) {
      document.getElementById("amount").value = "64600";
      document.getElementById("product2").innerText = "64,600円";
    } else if (a == 91 && b == 2 && e ==5) {
      document.getElementById("amount").value = "57200";
      document.getElementById("product2").innerText = "57,200円";
    } else if (a == 92 && b == 2 && e ==5) {
      document.getElementById("amount").value = "50300";
      document.getElementById("product2").innerText = "50,300円";
    } else if (a == 93 && b == 2 && e ==5) {
      document.getElementById("amount").value = "44500";
      document.getElementById("product2").innerText = "44,500円";
    } else if (a == 94 && b == 2 && e ==5) {
      document.getElementById("amount").value = "39500";
      document.getElementById("product2").innerText = "39,500円";
    } else if (a == 95 && b == 2 && e ==5) {
      document.getElementById("amount").value = "35300";
      document.getElementById("product2").innerText = "35,300円";
    } else if (a == 96 && b == 2 && e ==5) {
      document.getElementById("amount").value = "32200";
      document.getElementById("product2").innerText = "32,200円";
    } else if (a == 97 && b == 2 && e ==5) {
      document.getElementById("amount").value = "29500";
      document.getElementById("product2").innerText = "29,500円";
    } else if (a == 98 && b == 2 && e ==5) {
      document.getElementById("amount").value = "27200";
      document.getElementById("product2").innerText = "27,200円";
    } else if (a == 99 && b == 2 && e ==5) {
      document.getElementById("amount").value = "25200";
      document.getElementById("product2").innerText = "25,200円";
    } else if (a == 50 && b == 1 && e ==6) {
      document.getElementById("amount").value = "2936800";
      document.getElementById("product2").innerText = "2,936,800円";
    } else if (a == 51 && b == 1 && e ==6) {
      document.getElementById("amount").value = "2751000";
      document.getElementById("product2").innerText = "2,751,000円";
    } else if (a == 52 && b == 1 && e ==6) {
      document.getElementById("amount").value = "2564200";
      document.getElementById("product2").innerText = "2,564,200円";
    } else if (a == 53 && b == 1 && e ==6) {
      document.getElementById("amount").value = "2398000";
      document.getElementById("product2").innerText = "2,398,000円";
    } else if (a == 54 && b == 1 && e ==6) {
      document.getElementById("amount").value = "2229600";
      document.getElementById("product2").innerText = "2,229,600円";
    } else if (a == 55 && b == 1 && e ==6) {
      document.getElementById("amount").value = "2066200";
      document.getElementById("product2").innerText = "2,066,200円";
    } else if (a == 56 && b == 1 && e ==6) {
      document.getElementById("amount").value = "1919400";
      document.getElementById("product2").innerText = "1,919,400円";
    } else if (a == 57 && b == 1 && e ==6) {
      document.getElementById("amount").value = "1793800";
      document.getElementById("product2").innerText = "1,793,800円";
    } else if (a == 58 && b == 1 && e ==6) {
      document.getElementById("amount").value = "1682000";
      document.getElementById("product2").innerText = "1,682,000円";
    } else if (a == 59 && b == 1 && e ==6) {
      document.getElementById("amount").value = "1568600";
      document.getElementById("product2").innerText = "1,568,600円";
    } else if (a == 60 && b == 1 && e ==6) {
      document.getElementById("amount").value = "1451400";
      document.getElementById("product2").innerText = "1,451,400円";
    } else if (a == 61 && b == 1 && e ==6) {
      document.getElementById("amount").value = "1321000";
      document.getElementById("product2").innerText = "1,321,000円";
    } else if (a == 62 && b == 1 && e ==6) {
      document.getElementById("amount").value = "1201200";
      document.getElementById("product2").innerText = "1,201,200円";
    } else if (a == 63 && b == 1 && e ==6) {
      document.getElementById("amount").value = "1099600";
      document.getElementById("product2").innerText = "1,099,600円";
    } else if (a == 64 && b == 1 && e ==6) {
      document.getElementById("amount").value = "1014200";
      document.getElementById("product2").innerText = "1,014,200円";
    } else if (a == 65 && b == 1 && e ==6) {
      document.getElementById("amount").value = "928600";
      document.getElementById("product2").innerText = "928,600円";
    } else if (a == 66 && b == 1 && e ==6) {
      document.getElementById("amount").value = "851800";
      document.getElementById("product2").innerText = "851,800円";
    } else if (a == 67 && b == 1 && e ==6) {
      document.getElementById("amount").value = "785600";
      document.getElementById("product2").innerText = "785,600円";
    } else if (a == 68 && b == 1 && e ==6) {
      document.getElementById("amount").value = "723800";
      document.getElementById("product2").innerText = "723,800円";
    } else if (a == 69 && b == 1 && e ==6) {
      document.getElementById("amount").value = "668200";
      document.getElementById("product2").innerText = "668,200円";
    } else if (a == 70 && b == 1 && e ==6) {
      document.getElementById("amount").value = "614800";
      document.getElementById("product2").innerText = "614,800円";
    } else if (a == 71 && b == 1 && e ==6) {
      document.getElementById("amount").value = "563600";
      document.getElementById("product2").innerText = "563,600円";
    } else if (a == 72 && b == 1 && e ==6) {
      document.getElementById("amount").value = "517200";
      document.getElementById("product2").innerText = "517,200円";
    } else if (a == 73 && b == 1 && e ==6) {
      document.getElementById("amount").value = "478600";
      document.getElementById("product2").innerText = "478,600円";
    } else if (a == 74 && b == 1 && e ==6) {
      document.getElementById("amount").value = "441600";
      document.getElementById("product2").innerText = "441,600円";
    } else if (a == 75 && b == 1 && e ==6) {
      document.getElementById("amount").value = "402800";
      document.getElementById("product2").innerText = "402,800円";
    } else if (a == 76 && b == 1 && e ==6) {
      document.getElementById("amount").value = "363600";
      document.getElementById("product2").innerText = "363,600円";
    } else if (a == 77 && b == 1 && e ==6) {
      document.getElementById("amount").value = "325400";
      document.getElementById("product2").innerText = "325,400円";
    } else if (a == 78 && b == 1 && e ==6) {
      document.getElementById("amount").value = "289200";
      document.getElementById("product2").innerText = "289,200円";
    } else if (a == 79 && b == 1 && e ==6) {
      document.getElementById("amount").value = "256800";
      document.getElementById("product2").innerText = "256,800円";
    } else if (a == 80 && b == 1 && e ==6) {
      document.getElementById("amount").value = "230600";
      document.getElementById("product2").innerText = "230,600円";
    } else if (a == 81 && b == 1 && e ==6) {
      document.getElementById("amount").value = "206600";
      document.getElementById("product2").innerText = "206,600円";
    } else if (a == 82 && b == 1 && e ==6) {
      document.getElementById("amount").value = "185000";
      document.getElementById("product2").innerText = "185,000円";
    } else if (a == 83 && b == 1 && e ==6) {
      document.getElementById("amount").value = "165800";
      document.getElementById("product2").innerText = "165,800円";
    } else if (a == 84 && b == 1 && e ==6) {
      document.getElementById("amount").value = "148400";
      document.getElementById("product2").innerText = "148,400円";
    } else if (a == 85 && b == 1 && e ==6) {
      document.getElementById("amount").value = "133200";
      document.getElementById("product2").innerText = "133,200円";
    } else if (a == 86 && b == 1 && e ==6) {
      document.getElementById("amount").value = "120400";
      document.getElementById("product2").innerText = "120,400円";
    } else if (a == 87 && b == 1 && e ==6) {
      document.getElementById("amount").value = "109000";
      document.getElementById("product2").innerText = "109,000円";
    } else if (a == 88 && b == 1 && e ==6) {
      document.getElementById("amount").value = "98800";
      document.getElementById("product2").innerText = "98,800円";
    } else if (a == 89 && b == 1 && e ==6) {
      document.getElementById("amount").value = "89600";
      document.getElementById("product2").innerText = "89,600円";
    } else if (a == 90 && b == 1 && e ==6) {
      document.getElementById("amount").value = "81200";
      document.getElementById("product2").innerText = "81,200円";
    } else if (a == 91 && b == 1 && e ==6) {
      document.getElementById("amount").value = "73600";
      document.getElementById("product2").innerText = "73,600円";
    } else if (a == 92 && b == 1 && e ==6) {
      document.getElementById("amount").value = "66800";
      document.getElementById("product2").innerText = "66,800円";
    } else if (a == 93 && b == 1 && e ==6) {
      document.getElementById("amount").value = "60600";
      document.getElementById("product2").innerText = "60,600円";
    } else if (a == 94 && b == 1 && e ==6) {
      document.getElementById("amount").value = "55600";
      document.getElementById("product2").innerText = "55,600円";
    } else if (a == 95 && b == 1 && e ==6) {
      document.getElementById("amount").value = "52000";
      document.getElementById("product2").innerText = "52,000円";
    } else if (a == 96 && b == 1 && e ==6) {
      document.getElementById("amount").value = "48400";
      document.getElementById("product2").innerText = "48,400円";
    } else if (a == 97 && b == 1 && e ==6) {
      document.getElementById("amount").value = "45200";
      document.getElementById("product2").innerText = "45,200円";
    } else if (a == 98 && b == 1 && e ==6) {
      document.getElementById("amount").value = "42400";
      document.getElementById("product2").innerText = "42,400円";
    } else if (a == 99 && b == 1 && e ==6) {
      document.getElementById("amount").value = "39800";
      document.getElementById("product2").innerText = "39,800円";
    } else if (a == 58 && b == 2 && e ==6) {
      document.getElementById("amount").value = "2932600";
      document.getElementById("product2").innerText = "2,932,600円";
    } else if (a == 59 && b == 2 && e ==6) {
      document.getElementById("amount").value = "2777800";
      document.getElementById("product2").innerText = "2,777,800円";
    } else if (a == 60 && b == 2 && e ==6) {
      document.getElementById("amount").value = "2614400";
      document.getElementById("product2").innerText = "2,614,400円";
    } else if (a == 61 && b == 2 && e ==6) {
      document.getElementById("amount").value = "2445000";
      document.getElementById("product2").innerText = "2,445,000円";
    } else if (a == 62 && b == 2 && e ==6) {
      document.getElementById("amount").value = "2298800";
      document.getElementById("product2").innerText = "2,298,800円";
    } else if (a == 63 && b == 2 && e ==6) {
      document.getElementById("amount").value = "2166800";
      document.getElementById("product2").innerText = "2,166,800円";
    } else if (a == 64 && b == 2 && e ==6) {
      document.getElementById("amount").value = "2040800";
      document.getElementById("product2").innerText = "2,040,800円";
    } else if (a == 65 && b == 2 && e ==6) {
      document.getElementById("amount").value = "1906600";
      document.getElementById("product2").innerText = "1,906,600円";
    } else if (a == 66 && b == 2 && e ==6) {
      document.getElementById("amount").value = "1774600";
      document.getElementById("product2").innerText = "1,774,600円";
    } else if (a == 67 && b == 2 && e ==6) {
      document.getElementById("amount").value = "1655600";
      document.getElementById("product2").innerText = "1,655,600円";
    } else if (a == 68 && b == 2 && e ==6) {
      document.getElementById("amount").value = "1538400";
      document.getElementById("product2").innerText = "1,538,400円";
    } else if (a == 69 && b == 2 && e ==6) {
      document.getElementById("amount").value = "1423400";
      document.getElementById("product2").innerText = "1,423,400円";
    } else if (a == 70 && b == 2 && e ==6) {
      document.getElementById("amount").value = "1308000";
      document.getElementById("product2").innerText = "1,308,000円";
    } else if (a == 71 && b == 2 && e ==6) {
      document.getElementById("amount").value = "1196800";
      document.getElementById("product2").innerText = "1,196,800円";
    } else if (a == 72 && b == 2 && e ==6) {
      document.getElementById("amount").value = "1092200";
      document.getElementById("product2").innerText = "1,092,200円";
    } else if (a == 73 && b == 2 && e ==6) {
      document.getElementById("amount").value = "1003600";
      document.getElementById("product2").innerText = "1,003,600円";
    } else if (a == 74 && b == 2 && e ==6) {
      document.getElementById("amount").value = "919200";
      document.getElementById("product2").innerText = "919,200円";
    } else if (a == 75 && b == 2 && e ==6) {
      document.getElementById("amount").value = "831600";
      document.getElementById("product2").innerText = "831,600円";
    } else if (a == 76 && b == 2 && e ==6) {
      document.getElementById("amount").value = "742400";
      document.getElementById("product2").innerText = "742,400円";
    } else if (a == 77 && b == 2 && e ==6) {
      document.getElementById("amount").value = "656800";
      document.getElementById("product2").innerText = "656,800円";
    } else if (a == 78 && b == 2 && e ==6) {
      document.getElementById("amount").value = "578800";
      document.getElementById("product2").innerText = "578,800円";
    } else if (a == 79 && b == 2 && e ==6) {
      document.getElementById("amount").value = "508600";
      document.getElementById("product2").innerText = "508,600円";
    } else if (a == 80 && b == 2 && e ==6) {
      document.getElementById("amount").value = "452200";
      document.getElementById("product2").innerText = "452,200円";
    } else if (a == 81 && b == 2 && e ==6) {
      document.getElementById("amount").value = "401200";
      document.getElementById("product2").innerText = "401,200円";
    } else if (a == 82 && b == 2 && e ==6) {
      document.getElementById("amount").value = "353800";
      document.getElementById("product2").innerText = "353,800円";
    } else if (a == 83 && b == 2 && e ==6) {
      document.getElementById("amount").value = "311400";
      document.getElementById("product2").innerText = "311,400円";
    } else if (a == 84 && b == 2 && e ==6) {
      document.getElementById("amount").value = "274400";
      document.getElementById("product2").innerText = "274,400円";
    } else if (a == 85 && b == 2 && e ==6) {
      document.getElementById("amount").value = "242400";
      document.getElementById("product2").innerText = "242,400円";
    } else if (a == 86 && b == 2 && e ==6) {
      document.getElementById("amount").value = "214200";
      document.getElementById("product2").innerText = "214,200円";
    } else if (a == 87 && b == 2 && e ==6) {
      document.getElementById("amount").value = "188800";
      document.getElementById("product2").innerText = "188,800円";
    } else if (a == 88 && b == 2 && e ==6) {
      document.getElementById("amount").value = "166000";
      document.getElementById("product2").innerText = "166,000円";
    } else if (a == 89 && b == 2 && e ==6) {
      document.getElementById("amount").value = "146400";
      document.getElementById("product2").innerText = "146,400円";
    } else if (a == 90 && b == 2 && e ==6) {
      document.getElementById("amount").value = "129200";
      document.getElementById("product2").innerText = "129,200円";
    } else if (a == 91 && b == 2 && e ==6) {
      document.getElementById("amount").value = "114400";
      document.getElementById("product2").innerText = "114,400円";
    } else if (a == 92 && b == 2 && e ==6) {
      document.getElementById("amount").value = "100600";
      document.getElementById("product2").innerText = "100,600円";
    } else if (a == 93 && b == 2 && e ==6) {
      document.getElementById("amount").value = "89000";
      document.getElementById("product2").innerText = "89,000円";
    } else if (a == 94 && b == 2 && e ==6) {
      document.getElementById("amount").value = "79000";
      document.getElementById("product2").innerText = "79,000円";
    } else if (a == 95 && b == 2 && e ==6) {
      document.getElementById("amount").value = "70600";
      document.getElementById("product2").innerText = "70,600円";
    } else if (a == 96 && b == 2 && e ==6) {
      document.getElementById("amount").value = "64400";
      document.getElementById("product2").innerText = "64,400円";
    } else if (a == 97 && b == 2 && e ==6) {
      document.getElementById("amount").value = "59000";
      document.getElementById("product2").innerText = "59,000円";
    } else if (a == 98 && b == 2 && e ==6) {
      document.getElementById("amount").value = "54400";
      document.getElementById("product2").innerText = "54,400円";
    } else if (a == 99 && b == 2 && e ==6) {
      document.getElementById("amount").value = "50400";
      document.getElementById("product2").innerText = "50,400円";
    } else if (a == 56 && b == 1 && e ==7) {
      document.getElementById("amount").value = "2879100";
      document.getElementById("product2").innerText = "2,879,100円";
    } else if (a == 57 && b == 1 && e ==7) {
      document.getElementById("amount").value = "2690700";
      document.getElementById("product2").innerText = "2,690,700円";
    } else if (a == 58 && b == 1 && e ==7) {
      document.getElementById("amount").value = "2523000";
      document.getElementById("product2").innerText = "2,523,000円";
    } else if (a == 59 && b == 1 && e ==7) {
      document.getElementById("amount").value = "2352900";
      document.getElementById("product2").innerText = "2,352,900円";
    } else if (a == 60 && b == 1 && e ==7) {
      document.getElementById("amount").value = "2177100";
      document.getElementById("product2").innerText = "2,177,100円";
    } else if (a == 61 && b == 1 && e ==7) {
      document.getElementById("amount").value = "1981500";
      document.getElementById("product2").innerText = "1,981,500円";
    } else if (a == 62 && b == 1 && e ==7) {
      document.getElementById("amount").value = "1801800";
      document.getElementById("product2").innerText = "1,801,800円";
    } else if (a == 63 && b == 1 && e ==7) {
      document.getElementById("amount").value = "1649400";
      document.getElementById("product2").innerText = "1,649,400円";
    } else if (a == 64 && b == 1 && e ==7) {
      document.getElementById("amount").value = "1521300";
      document.getElementById("product2").innerText = "1,521,300円";
    } else if (a == 65 && b == 1 && e ==7) {
      document.getElementById("amount").value = "1392900";
      document.getElementById("product2").innerText = "1,392,900円";
    } else if (a == 66 && b == 1 && e ==7) {
      document.getElementById("amount").value = "1277700";
      document.getElementById("product2").innerText = "1,277,700円";
    } else if (a == 67 && b == 1 && e ==7) {
      document.getElementById("amount").value = "1178400";
      document.getElementById("product2").innerText = "1,178,400円";
    } else if (a == 68 && b == 1 && e ==7) {
      document.getElementById("amount").value = "1085700";
      document.getElementById("product2").innerText = "1,085,700円";
    } else if (a == 69 && b == 1 && e ==7) {
      document.getElementById("amount").value = "1002300";
      document.getElementById("product2").innerText = "1,002,300円";
    } else if (a == 70 && b == 1 && e ==7) {
      document.getElementById("amount").value = "922200";
      document.getElementById("product2").innerText = "922,200円";
    } else if (a == 71 && b == 1 && e ==7) {
      document.getElementById("amount").value = "845400";
      document.getElementById("product2").innerText = "845,400円";
    } else if (a == 72 && b == 1 && e ==7) {
      document.getElementById("amount").value = "775800";
      document.getElementById("product2").innerText = "775,800円";
    } else if (a == 73 && b == 1 && e ==7) {
      document.getElementById("amount").value = "717900";
      document.getElementById("product2").innerText = "717,900円";
    } else if (a == 74 && b == 1 && e ==7) {
      document.getElementById("amount").value = "662400";
      document.getElementById("product2").innerText = "662,400円";
    } else if (a == 75 && b == 1 && e ==7) {
      document.getElementById("amount").value = "604200";
      document.getElementById("product2").innerText = "604,200円";
    } else if (a == 76 && b == 1 && e ==7) {
      document.getElementById("amount").value = "545400";
      document.getElementById("product2").innerText = "545,400円";
    } else if (a == 77 && b == 1 && e ==7) {
      document.getElementById("amount").value = "488100";
      document.getElementById("product2").innerText = "488,100円";
    } else if (a == 78 && b == 1 && e ==7) {
      document.getElementById("amount").value = "433800";
      document.getElementById("product2").innerText = "433,800円";
    } else if (a == 79 && b == 1 && e ==7) {
      document.getElementById("amount").value = "385200";
      document.getElementById("product2").innerText = "385,200円";
    } else if (a == 80 && b == 1 && e ==7) {
      document.getElementById("amount").value = "345900";
      document.getElementById("product2").innerText = "345,900円";
    } else if (a == 81 && b == 1 && e ==7) {
      document.getElementById("amount").value = "309900";
      document.getElementById("product2").innerText = "309,900円";
    } else if (a == 82 && b == 1 && e ==7) {
      document.getElementById("amount").value = "277500";
      document.getElementById("product2").innerText = "277,500円";
    } else if (a == 83 && b == 1 && e ==7) {
      document.getElementById("amount").value = "248700";
      document.getElementById("product2").innerText = "248,700円";
    } else if (a == 84 && b == 1 && e ==7) {
      document.getElementById("amount").value = "222600";
      document.getElementById("product2").innerText = "222,600円";
    } else if (a == 85 && b == 1 && e ==7) {
      document.getElementById("amount").value = "199800";
      document.getElementById("product2").innerText = "199,800円";
    } else if (a == 86 && b == 1 && e ==7) {
      document.getElementById("amount").value = "180600";
      document.getElementById("product2").innerText = "180,600円";
    } else if (a == 87 && b == 1 && e ==7) {
      document.getElementById("amount").value = "163500";
      document.getElementById("product2").innerText = "163,500円";
    } else if (a == 88 && b == 1 && e ==7) {
      document.getElementById("amount").value = "148200";
      document.getElementById("product2").innerText = "148,200円";
    } else if (a == 89 && b == 1 && e ==7) {
      document.getElementById("amount").value = "134400";
      document.getElementById("product2").innerText = "134,400円";
    } else if (a == 90 && b == 1 && e ==7) {
      document.getElementById("amount").value = "121800";
      document.getElementById("product2").innerText = "121,800円";
    } else if (a == 91 && b == 1 && e ==7) {
      document.getElementById("amount").value = "110400";
      document.getElementById("product2").innerText = "110,400円";
    } else if (a == 92 && b == 1 && e ==7) {
      document.getElementById("amount").value = "100200";
      document.getElementById("product2").innerText = "100,200円";
    } else if (a == 93 && b == 1 && e ==7) {
      document.getElementById("amount").value = "90900";
      document.getElementById("product2").innerText = "90,900円";
    } else if (a == 94 && b == 1 && e ==7) {
      document.getElementById("amount").value = "83400";
      document.getElementById("product2").innerText = "83,400円";
    } else if (a == 95 && b == 1 && e ==7) {
      document.getElementById("amount").value = "78000";
      document.getElementById("product2").innerText = "78,000円";
    } else if (a == 96 && b == 1 && e ==7) {
      document.getElementById("amount").value = "72600";
      document.getElementById("product2").innerText = "72,600円";
    } else if (a == 97 && b == 1 && e ==7) {
      document.getElementById("amount").value = "67800";
      document.getElementById("product2").innerText = "67,800円";
    } else if (a == 98 && b == 1 && e ==7) {
      document.getElementById("amount").value = "63600";
      document.getElementById("product2").innerText = "63,600円";
    } else if (a == 99 && b == 1 && e ==7) {
      document.getElementById("amount").value = "59700";
      document.getElementById("product2").innerText = "59,700円";
    } else if (a == 65 && b == 2 && e ==7) {
      document.getElementById("amount").value = "2859900";
      document.getElementById("product2").innerText = "2,859,900円";
    } else if (a == 66 && b == 2 && e ==7) {
      document.getElementById("amount").value = "2661900";
      document.getElementById("product2").innerText = "2,661,900円";
    } else if (a == 67 && b == 2 && e ==7) {
      document.getElementById("amount").value = "2483400";
      document.getElementById("product2").innerText = "2,483,400円";
    } else if (a == 68 && b == 2 && e ==7) {
      document.getElementById("amount").value = "2307600";
      document.getElementById("product2").innerText = "2,307,600円";
    } else if (a == 69 && b == 2 && e ==7) {
      document.getElementById("amount").value = "2135100";
      document.getElementById("product2").innerText = "2,135,100円";
    } else if (a == 70 && b == 2 && e ==7) {
      document.getElementById("amount").value = "1962000";
      document.getElementById("product2").innerText = "1,962,000円";
    } else if (a == 71 && b == 2 && e ==7) {
      document.getElementById("amount").value = "1795200";
      document.getElementById("product2").innerText = "1,795,200円";
    } else if (a == 72 && b == 2 && e ==7) {
      document.getElementById("amount").value = "1638300";
      document.getElementById("product2").innerText = "1,638,300円";
    } else if (a == 73 && b == 2 && e ==7) {
      document.getElementById("amount").value = "1505400";
      document.getElementById("product2").innerText = "1,505,400円";
    } else if (a == 74 && b == 2 && e ==7) {
      document.getElementById("amount").value = "1378800";
      document.getElementById("product2").innerText = "1,378,800円";
    } else if (a == 75 && b == 2 && e ==7) {
      document.getElementById("amount").value = "1247400";
      document.getElementById("product2").innerText = "1,247,400円";
    } else if (a == 76 && b == 2 && e ==7) {
      document.getElementById("amount").value = "1113600";
      document.getElementById("product2").innerText = "1,113,600円";
    } else if (a == 77 && b == 2 && e ==7) {
      document.getElementById("amount").value = "985200";
      document.getElementById("product2").innerText = "985,200円";
    } else if (a == 78 && b == 2 && e ==7) {
      document.getElementById("amount").value = "868200";
      document.getElementById("product2").innerText = "868,200円";
    } else if (a == 79 && b == 2 && e ==7) {
      document.getElementById("amount").value = "762900";
      document.getElementById("product2").innerText = "762,900円";
    } else if (a == 80 && b == 2 && e ==7) {
      document.getElementById("amount").value = "678300";
      document.getElementById("product2").innerText = "678,300円";
    } else if (a == 81 && b == 2 && e ==7) {
      document.getElementById("amount").value = "601800";
      document.getElementById("product2").innerText = "601,800円";
    } else if (a == 82 && b == 2 && e ==7) {
      document.getElementById("amount").value = "530700";
      document.getElementById("product2").innerText = "530,700円";
    } else if (a == 83 && b == 2 && e ==7) {
      document.getElementById("amount").value = "467100";
      document.getElementById("product2").innerText = "467,100円";
    } else if (a == 84 && b == 2 && e ==7) {
      document.getElementById("amount").value = "411600";
      document.getElementById("product2").innerText = "411,600円";
    } else if (a == 85 && b == 2 && e ==7) {
      document.getElementById("amount").value = "363600";
      document.getElementById("product2").innerText = "363,600円";
    } else if (a == 86 && b == 2 && e ==7) {
      document.getElementById("amount").value = "321300";
      document.getElementById("product2").innerText = "321,300円";
    } else if (a == 87 && b == 2 && e ==7) {
      document.getElementById("amount").value = "283200";
      document.getElementById("product2").innerText = "283,200円";
    } else if (a == 88 && b == 2 && e ==7) {
      document.getElementById("amount").value = "249000";
      document.getElementById("product2").innerText = "249,000円";
    } else if (a == 89 && b == 2 && e ==7) {
      document.getElementById("amount").value = "219600";
      document.getElementById("product2").innerText = "219,600円";
    } else if (a == 90 && b == 2 && e ==7) {
      document.getElementById("amount").value = "193800";
      document.getElementById("product2").innerText = "193,800円";
    } else if (a == 91 && b == 2 && e ==7) {
      document.getElementById("amount").value = "171600";
      document.getElementById("product2").innerText = "171,600円";
    } else if (a == 92 && b == 2 && e ==7) {
      document.getElementById("amount").value = "150900";
      document.getElementById("product2").innerText = "150,900円";
    } else if (a == 93 && b == 2 && e ==7) {
      document.getElementById("amount").value = "133500";
      document.getElementById("product2").innerText = "133,500円";
    } else if (a == 94 && b == 2 && e ==7) {
      document.getElementById("amount").value = "118500";
      document.getElementById("product2").innerText = "118,500円";
    } else if (a == 95 && b == 2 && e ==7) {
      document.getElementById("amount").value = "105900";
      document.getElementById("product2").innerText = "105,900円";
    } else if (a == 96 && b == 2 && e ==7) {
      document.getElementById("amount").value = "96600";
      document.getElementById("product2").innerText = "96,600円";
    } else if (a == 97 && b == 2 && e ==7) {
      document.getElementById("amount").value = "88500";
      document.getElementById("product2").innerText = "88,500円";
    } else if (a == 98 && b == 2 && e ==7) {
      document.getElementById("amount").value = "81600";
      document.getElementById("product2").innerText = "81,600円";
    } else if (a == 99 && b == 2 && e ==7) {
      document.getElementById("amount").value = "75600";
      document.getElementById("product2").innerText = "75,600円";
    } else if (a == 63 && b == 1 && e ==8) {
      document.getElementById("amount").value = "2749000";
      document.getElementById("product2").innerText = "2,749,000円";
    } else if (a == 64 && b == 1 && e ==8) {
      document.getElementById("amount").value = "2535500";
      document.getElementById("product2").innerText = "2,535,500円";
    } else if (a == 65 && b == 1 && e ==8) {
      document.getElementById("amount").value = "2321500";
      document.getElementById("product2").innerText = "2,321,500円";
    } else if (a == 66 && b == 1 && e ==8) {
      document.getElementById("amount").value = "2129500";
      document.getElementById("product2").innerText = "2,129,500円";
    } else if (a == 67 && b == 1 && e ==8) {
      document.getElementById("amount").value = "1964000";
      document.getElementById("product2").innerText = "1,964,000円";
    } else if (a == 68 && b == 1 && e ==8) {
      document.getElementById("amount").value = "1809500";
      document.getElementById("product2").innerText = "1,809,500円";
    } else if (a == 69 && b == 1 && e ==8) {
      document.getElementById("amount").value = "1670500";
      document.getElementById("product2").innerText = "1,670,500円";
    } else if (a == 70 && b == 1 && e ==8) {
      document.getElementById("amount").value = "1537000";
      document.getElementById("product2").innerText = "1,537,000円";
    } else if (a == 71 && b == 1 && e ==8) {
      document.getElementById("amount").value = "1409000";
      document.getElementById("product2").innerText = "1,409,000円";
    } else if (a == 72 && b == 1 && e ==8) {
      document.getElementById("amount").value = "1293000";
      document.getElementById("product2").innerText = "1,293,000円";
    } else if (a == 73 && b == 1 && e ==8) {
      document.getElementById("amount").value = "1196500";
      document.getElementById("product2").innerText = "1,196,500円";
    } else if (a == 74 && b == 1 && e ==8) {
      document.getElementById("amount").value = "1104000";
      document.getElementById("product2").innerText = "1,104,000円";
    } else if (a == 75 && b == 1 && e ==8) {
      document.getElementById("amount").value = "1007000";
      document.getElementById("product2").innerText = "1,007,000円";
    } else if (a == 76 && b == 1 && e ==8) {
      document.getElementById("amount").value = "909000";
      document.getElementById("product2").innerText = "909,000円";
    } else if (a == 77 && b == 1 && e ==8) {
      document.getElementById("amount").value = "813500";
      document.getElementById("product2").innerText = "813,500円";
    } else if (a == 78 && b == 1 && e ==8) {
      document.getElementById("amount").value = "723000";
      document.getElementById("product2").innerText = "723,000円";
    } else if (a == 79 && b == 1 && e ==8) {
      document.getElementById("amount").value = "642000";
      document.getElementById("product2").innerText = "642,000円";
    } else if (a == 80 && b == 1 && e ==8) {
      document.getElementById("amount").value = "576500";
      document.getElementById("product2").innerText = "576,500円";
    } else if (a == 81 && b == 1 && e ==8) {
      document.getElementById("amount").value = "516500";
      document.getElementById("product2").innerText = "516,500円";
    } else if (a == 82 && b == 1 && e ==8) {
      document.getElementById("amount").value = "462500";
      document.getElementById("product2").innerText = "462,500円";
    } else if (a == 83 && b == 1 && e ==8) {
      document.getElementById("amount").value = "414500";
      document.getElementById("product2").innerText = "414,500円";
    } else if (a == 84 && b == 1 && e ==8) {
      document.getElementById("amount").value = "371000";
      document.getElementById("product2").innerText = "371,000円";
    } else if (a == 85 && b == 1 && e ==8) {
      document.getElementById("amount").value = "333000";
      document.getElementById("product2").innerText = "333,000円";
    } else if (a == 86 && b == 1 && e ==8) {
      document.getElementById("amount").value = "301000";
      document.getElementById("product2").innerText = "301,000円";
    } else if (a == 87 && b == 1 && e ==8) {
      document.getElementById("amount").value = "272500";
      document.getElementById("product2").innerText = "272,500円";
    } else if (a == 88 && b == 1 && e ==8) {
      document.getElementById("amount").value = "247000";
      document.getElementById("product2").innerText = "247,000円";
    } else if (a == 89 && b == 1 && e ==8) {
      document.getElementById("amount").value = "224000";
      document.getElementById("product2").innerText = "224,000円";
    } else if (a == 90 && b == 1 && e ==8) {
      document.getElementById("amount").value = "203000";
      document.getElementById("product2").innerText = "203,000円";
    } else if (a == 91 && b == 1 && e ==8) {
      document.getElementById("amount").value = "184000";
      document.getElementById("product2").innerText = "184,000円";
    } else if (a == 92 && b == 1 && e ==8) {
      document.getElementById("amount").value = "167000";
      document.getElementById("product2").innerText = "167,000円";
    } else if (a == 93 && b == 1 && e ==8) {
      document.getElementById("amount").value = "151500";
      document.getElementById("product2").innerText = "151,500円";
    } else if (a == 94 && b == 1 && e ==8) {
      document.getElementById("amount").value = "139000";
      document.getElementById("product2").innerText = "139,000円";
    } else if (a == 95 && b == 1 && e ==8) {
      document.getElementById("amount").value = "130000";
      document.getElementById("product2").innerText = "130,000円";
    } else if (a == 96 && b == 1 && e ==8) {
      document.getElementById("amount").value = "121000";
      document.getElementById("product2").innerText = "121,000円";
    } else if (a == 97 && b == 1 && e ==8) {
      document.getElementById("amount").value = "113000";
      document.getElementById("product2").innerText = "113,000円";
    } else if (a == 98 && b == 1 && e ==8) {
      document.getElementById("amount").value = "106000";
      document.getElementById("product2").innerText = "106,000円";
    } else if (a == 99 && b == 1 && e ==8) {
      document.getElementById("amount").value = "99500";
      document.getElementById("product2").innerText = "99,500円";
    } else if (a == 71 && b == 2 && e ==8) {
      document.getElementById("amount").value = "2992000";
      document.getElementById("product2").innerText = "2,992,000円";
    } else if (a == 72 && b == 2 && e ==8) {
      document.getElementById("amount").value = "2730500";
      document.getElementById("product2").innerText = "2,730,500円";
    } else if (a == 73 && b == 2 && e ==8) {
      document.getElementById("amount").value = "2509000";
      document.getElementById("product2").innerText = "2,509,000円";
    } else if (a == 74 && b == 2 && e ==8) {
      document.getElementById("amount").value = "2298000";
      document.getElementById("product2").innerText = "2,298,000円";
    } else if (a == 75 && b == 2 && e ==8) {
      document.getElementById("amount").value = "2079000";
      document.getElementById("product2").innerText = "2,079,000円";
    } else if (a == 76 && b == 2 && e ==8) {
      document.getElementById("amount").value = "1856000";
      document.getElementById("product2").innerText = "1,856,000円";
    } else if (a == 77 && b == 2 && e ==8) {
      document.getElementById("amount").value = "1642000";
      document.getElementById("product2").innerText = "1,642,000円";
    } else if (a == 78 && b == 2 && e ==8) {
      document.getElementById("amount").value = "1447000";
      document.getElementById("product2").innerText = "1,447,000円";
    } else if (a == 79 && b == 2 && e ==8) {
      document.getElementById("amount").value = "1271500";
      document.getElementById("product2").innerText = "1,271,500円";
    } else if (a == 80 && b == 2 && e ==8) {
      document.getElementById("amount").value = "1130500";
      document.getElementById("product2").innerText = "1,130,500円";
    } else if (a == 81 && b == 2 && e ==8) {
      document.getElementById("amount").value = "1003000";
      document.getElementById("product2").innerText = "1,003,000円";
    } else if (a == 82 && b == 2 && e ==8) {
      document.getElementById("amount").value = "884500";
      document.getElementById("product2").innerText = "884,500円";
    } else if (a == 83 && b == 2 && e ==8) {
      document.getElementById("amount").value = "778500";
      document.getElementById("product2").innerText = "778,500円";
    } else if (a == 84 && b == 2 && e ==8) {
      document.getElementById("amount").value = "686000";
      document.getElementById("product2").innerText = "686,000円";
    } else if (a == 85 && b == 2 && e ==8) {
      document.getElementById("amount").value = "606000";
      document.getElementById("product2").innerText = "606,000円";
    } else if (a == 86 && b == 2 && e ==8) {
      document.getElementById("amount").value = "535500";
      document.getElementById("product2").innerText = "535,500円";
    } else if (a == 87 && b == 2 && e ==8) {
      document.getElementById("amount").value = "472000";
      document.getElementById("product2").innerText = "472,000円";
    } else if (a == 88 && b == 2 && e ==8) {
      document.getElementById("amount").value = "415000";
      document.getElementById("product2").innerText = "415,000円";
    } else if (a == 89 && b == 2 && e ==8) {
      document.getElementById("amount").value = "366000";
      document.getElementById("product2").innerText = "366,000円";
    } else if (a == 90 && b == 2 && e ==8) {
      document.getElementById("amount").value = "323000";
      document.getElementById("product2").innerText = "323,000円";
    } else if (a == 91 && b == 2 && e ==8) {
      document.getElementById("amount").value = "286000";
      document.getElementById("product2").innerText = "286,000円";
    } else if (a == 92 && b == 2 && e ==8) {
      document.getElementById("amount").value = "251500";
      document.getElementById("product2").innerText = "251,500円";
    } else if (a == 93 && b == 2 && e ==8) {
      document.getElementById("amount").value = "222500";
      document.getElementById("product2").innerText = "222,500円";
    } else if (a == 94 && b == 2 && e ==8) {
      document.getElementById("amount").value = "197500";
      document.getElementById("product2").innerText = "197,500円";
    } else if (a == 95 && b == 2 && e ==8) {
      document.getElementById("amount").value = "176500";
      document.getElementById("product2").innerText = "176,500円";
    } else if (a == 96 && b == 2 && e ==8) {
      document.getElementById("amount").value = "161000";
      document.getElementById("product2").innerText = "161,000円";
    } else if (a == 97 && b == 2 && e ==8) {
      document.getElementById("amount").value = "147500";
      document.getElementById("product2").innerText = "147,500円";
    } else if (a == 98 && b == 2 && e ==8) {
      document.getElementById("amount").value = "136000";
      document.getElementById("product2").innerText = "136,000円";
    } else if (a == 99 && b == 2 && e ==8) {
      document.getElementById("amount").value = "126000";
      document.getElementById("product2").innerText = "126,000円";

    } else {
      document.getElementById("amount").value = "引受不可";
      document.getElementById("product2").innerText = "引受不可";
    }
  }
