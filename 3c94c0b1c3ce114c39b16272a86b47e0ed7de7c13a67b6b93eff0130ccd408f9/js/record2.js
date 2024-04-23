$(document).ready(function(){
    // フォームの要素が変更された時の処理
    $('.form1 input, .form1 select').change(function(){
        // フォームの各要素の値を取得
        var datePicker = $('#datepicker').val();
        var addressName = $('#addressname').val();
        var Honor = $('#honor').val();
        var contractorPostalCode = $('#contractor_postal_code').val();
        var contractorAddress = $('#contractor_address').val();
        var contractorBuilding = $('#contractor_building').val();
        var Sending1 = $('#sending1').val();
        var Sending2 = $('#sending2').val();
        var Sending3 = $('#sending3').val();
        var Sending4 = $('#sending4').val();
        var Sending5 = $('#sending5').val();
        var Sending1_1 = $('#sending1_1').val();
        var Sending2_1 = $('#sending2_1').val();
        var Sending3_1 = $('#sending3_1').val();
        var Sending4_1 = $('#sending4_1').val();
        var Sending5_1 = $('#sending5_1').val();

         // yyyy年MM月dd日の形式に変換
        var dateObj = new Date(datePickerValue);
        var formattedDate = dateObj.getFullYear() + '年' 
            + (dateObj.getMonth() + 1).toString().padStart(2, '0') + '月' + dateObj.getDate().toString().padStart(2, '0') + '日';
        
        // 取得した値を各Labelにセット
        $('.datePickerLabel').text(formattedDate);
        $('.addressNameLabel').text(addressName);
        $('.honorLabel').text(Honor);
        $('.contractor_postal_codeLabel').text(contractorPostalCode);
        $('.contractor_addressLabel').text(contractorAddress);
        $('.contractor_buildingLabel').text(contractorBuilding);
        $('.sending1Label').text(Sending1);
        $('.sending2Label').text(Sending2);
        $('.sending3Label').text(Sending3);
        $('.sending4Label').text(Sending4);
        $('.sending5Label').text(Sending5);
        $('.sending1_1Label').text(Sending1_1);
        $('.sending2_1Label').text(Sending2_1);
        $('.sending3_1Label').text(Sending3_1);
        $('.sending4_1Label').text(Sending4_1);
        $('.sending5_1Label').text(Sending5_1);
       
    });
});
