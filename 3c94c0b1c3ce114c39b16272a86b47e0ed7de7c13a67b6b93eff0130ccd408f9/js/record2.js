$(document).ready(function(){
    // フォームの要素が変更された時の処理
    $('.form1 input, .form1 select').change(function(){
        // フォームの各要素の値を取得
        var datePicker = $('#datepicker').val();
        var addressName = $('#addressname').val();
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
        
        
        // 取得した値を各Labelにセット
        $('.datePickerLabel').text(datePicker);
        $('.addressNameLabel').text(addressName);       
        $('.contractor_postal_codeLabel').text(contractorPostalCode);
        $('.contractor_addressLabel').text(contractorAddress);
        $('.contractor_buildingLabel').text(contractorBbuilding);
        $('.sending1Label').text(Sending1);
        $('.sending1Labe2').text(Sending2);
        $('.sending1Labe3').text(Sending3);
        $('.sending1Labe4').text(Sending4);
        $('.sending1Labe5').text(Sending5);
        $('.sending1Label_1').text(Sending1_1);
        $('.sending1Labe2_1').text(Sending2_1);
        $('.sending1Labe3_1').text(Sending3_1);
        $('.sending1Labe4_1').text(Sending4_1);
        $('.sending1Labe5_1').text(Sending5_1);
       
    });
});
