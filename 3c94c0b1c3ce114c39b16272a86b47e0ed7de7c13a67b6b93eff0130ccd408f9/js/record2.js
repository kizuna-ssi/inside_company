$(document).ready(function(){
    // フォームの要素が変更された時の処理
    $('.form1 input, .form1 select').change(function(){
        // フォームの各要素の値を取得
        var datePicker = $('#datepicker').val();
        
        var applicationDateMonth = $('#application_date_month').val();
        var applicationDateDay = $('#application_date_day').val();
        var category = $('#category-select-1').val();
        var subCategory = $('#sub-category-select-1').val();
        var contractorName = $('#contractor_name').val();
        var contractorFurigana = $('#contractor_furigana').val();
        var contractorGender = $('#contractor_gender').val();
        var contractorBirthYear = $('#contractor_birth_year').val();
        var contractorBirthMonth = $('#contractor_birth_month').val();
        var contractorBirthDay = $('#contractor_birth_day').val();
        var contractorPpostalCode = $('#contractor_postal_code').val();
        var contractorAddress = $('#contractor_address').val();
        var contractorTel = $('#contractor_tel').val();
        var contractorEmail = $('#contractor_email').val();
        var insuredName = $('#insured_name').val();
        var insuredFurigana = $('#insured_furigana').val();
        var insuredGender = $('#insured_gender').val();
        var insuredBirthYear = $('#insured_birth_year').val();
        var insuredBirthMonth = $('#insured_birth_month').val();
        var insuredBirthDay = $('#insured_birth_day').val();
        var insuredPpostalCode = $('#insured_postal_code').val();
        var insuredAddress = $('#insured_address').val();
        var insuredTel = $('#insured_tel').val();
        var insuredEmail = $('#insured_email').val();
        var insuredJob = $('#insured_job').val();
        var insuredJobetc = $('#insured_job_etc').val();
        var insuredWorkplace = $('#insured_workplace').val();
        var insuredRelationship = $('#insured_relationship').val();
        var insuredRelationshipetc = $('#insured_relationship_etc').val();
        var beneficiaryName = $('#beneficiary_name').val();
        var beneficiaryFurigana = $('#beneficiary_furigana').val();
        var beneficiaryRelationship = $('#beneficiary_relationship').val();
        var beneficiaryRelationshipetc = $('#beneficiary_relationship_etc').val();
        var recruitCode = $('#recruitcode').val();
        var agencyName = $('#agencyname').val();
        var recruitName = $('#recruitname').val();
      
        // 取得した値を各Labelにセット
        $('.datePickerLabel').text(datePicker);
        
        $('.application_date_monthLabel').text(applicationDateMonth);
        $('.application_date_dayLabel').text(applicationDateDay);
        $('.category_select_1Label').text(category);
        $('.sub_category_select_1Label').text(subCategory);
        $('.contractor_nameLabel').text(contractorName);
        $('.contractor_furiganaLabel').text(contractorFurigana);
        $('.contractor_genderLabel').text(contractorGender);
        $('.contractor_birth_yearLabel').text(contractorBirthYear);
        $('.contractor_birth_monthLabel').text(contractorBirthMonth);
        $('.contractor_birth_dayLabel').text(contractorBirthDay);
        $('.contractor_postal_codeLabel').text(contractorPpostalCode);
        $('.contractor_addressLabel').text(contractorAddress);
        $('.contractor_telLabel').text(contractorTel);
        $('.contractor_emailLabel').text(contractorEmail);
        $('.insured_nameLabel').text(insuredName);
        $('.insured_furiganaLabel').text(insuredFurigana);
        $('.insured_genderLabel').text(insuredGender);
        $('.insured_birth_yearLabel').text(insuredBirthYear);
        $('.insured_birth_monthLabel').text(insuredBirthMonth);
        $('.insured_birth_dayLabel').text(insuredBirthDay);
        $('.insured_postal_codeLabel').text(insuredPpostalCode);
        $('.insured_addressLabel').text(insuredAddress);
        $('.insured_telLabel').text(insuredTel);
        $('.insured_jobLabel').text(insuredJob);
        $('.insured_jobetcLabel').text(insuredJobetc);
        $('.insured_emailLabel').text(insuredEmail);
        $('.insured_workplaceLabel').text(insuredWorkplace);
        $('.insured_relationshipLabel').text(insuredRelationship);
        $('.insured_relationshipetcLabel').text(insuredRelationshipetc);
        $('.beneficiary_nameLabel').text(beneficiaryName);
        $('.beneficiary_furiganaLabel').text(beneficiaryFurigana);
        $('.beneficiary_relationshipLabel').text(beneficiaryRelationship);
        $('.beneficiary_relationshipetcLabel').text(beneficiaryRelationshipetc);
        $('.recruitcodeLabel').text(recruitCode);
        $('.agencynameLabel').text(agencyName);
        $('.recruitnameLabel').text(recruitName);
    });
});
