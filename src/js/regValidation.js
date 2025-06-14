

$(document).ready(function () {
    var count = 0;
    $('.servicesList tr td input').click(function () {
        if ($(this).is(':checked')) {
            if (count == 0) {
                $('.selectedServ').empty();
            }
            count++;
            $(".selectedServ").append("<label class=" + $(this).attr('id') + ">" + $(this).next().text() + ", &nbsp;</label>");

        }
        else {
            count--;
            var cls = $(this).attr('id');
            $('label.' + cls).remove();
            if (count == 0) {
                $('.selectedServ').text('--Select Services--');
            }
        }
    });

    $('input[type=email]').bind("blur", function () {
        var email = $(this).val();
        var atpos = email.indexOf("@");
        var dotpos = email.indexOf(".", atpos);
        if (email == "") {
            $(this).next().text("You can't leave this empty.").show();
         
            return false;
        }
        else if (atpos < 0 || dotpos < 0 || (dotpos - atpos) < 0 || (email.length) < 5 || dotpos == email.length - 1) {
            $(this).next().text("Please Enter Valid Email").show();
  
            return false;
        } else {
            $(this).next().empty().hide();

        }
    });

    $('input[type=emailmain]').bind("blur", function () {
        var email = $(this).val();
        var atpos = email.indexOf("@");
        var dotpos = email.indexOf(".", atpos);
        if (email == "") {
            $(this).next().text("You can't leave this empty.").show();
            $("#lblval").html("");
            $("#btnsubmit").attr('disabled', true);
            return false;
        }
        else if (atpos < 0 || dotpos < 0 || (dotpos - atpos) < 0 || (email.length) < 5 || dotpos == email.length - 1) {
            $(this).next().text("Please Enter Valid Email").show();
            $("#lblval").html("");
            $("#btnsubmit").attr('disabled', true);
            return false;
        } else {
            GetMailid(email);
            //alert(v);
           // $(this).next().text("Ok..Proceed").show();
            $(this).next().empty().hide();
   
        }
    });

    function GetMailid(emailid) {
            $.ajax({          
            type: "POST",
            url: "registration.aspx/GetCustomers",
                //data: '{emailid: ' + emailid + '}',
            data: "{'emailid':'" + emailid + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                //$(this).next().text(data.d).show();
              //  alert(data.d);            
                $("#lblval").html(data.d);
                $("#lblval").css("color", "Red");
            },
            failure: function (response) {
              //  alert(response.d);           
            },
            error: function (response) {
               //  alert(response.d);           
            }
            });
         
    }
    
    function OnSuccess() {
        alert("hello");
    }
    $("#txtCmpEmail").bind("blur", function () {
        if ($(this).val() != $("#txtEmail").val() || $(this).val() == "") {
            $(this).next().text("Please Enter the Same E-mail Id as above").show();
            $("#btnsubmit").attr('disabled', true);
        }
    });
    

    $("#ddlCompanyType").on('blur', function (e) {
        if ($(this).val() == "-1") {
            $(this).next().text("Please Select Company Type").show();
            //$("#btnsubmit").attr('disabled', true);
        } else {
            $(this).next().hide()
           // $("#btnsubmit").attr('disabled', false);
        }
    });
    $("#chkagree").change(function () {
        if ($(this).is(':checked')) {
            $("#btnsubmit").attr("disabled", false);
        }
        else {
            $("#btnsubmit").attr("disabled", true);
        }
    });
    $("#chkagree").trigger("change");
    
    $("#txtMobile").bind("keydown", function (e) {
        if (e.key !== "Tab") {
            if ((e.which > 45 && e.which < 58) || (e.which > 95 && e.which < 106) || e.which == 8 || e.which == 37 || e.which == 39) {
                return true;
            }
            else {
                return false;
            }
        }
        
    });
    
    $('input[type="text"], input[type="password"], #txtAddr').bind("blur", function () {
        if ($(this).val().trim() == "") {
            $(this).next().text("You can't leave this empty.").show();
        } else {
            $(this).next().empty().hide();
        }
    });

    $('button[type=submit]').click(function () {        
        $('input[type=email]').trigger('blur');
        $('input[type=emailmain]').trigger('blur');
        $('input[type="text"], input[type="password"]').trigger("blur");
    })
    
    $('button[type=submit]').click(function () {
        var flag = true;
        $('select').each(function () {
            if (!$(this).is(":disabled")) {
                if ($(this).val() == -1) {
                    $(this).next().show();
                    flag = false;
                }
            }
        });
       
        return flag;
    });

   

    $("form").submit(function () {
        var flag = true;
        $(".loginForm .form-group input").each(function () {
            if ($(this).val() === "" && $(this).attr("required")=="required") {
                $(this).focus();
                flag = false;
            }
            if ($(this).attr("name").match("Email")) {
                var email = $(this).val();
                var atpos = email.indexOf("@");
                var dotpos = email.indexOf(".", atpos);
                if (atpos < 0 || dotpos < 0 || (dotpos - atpos) < 0 || (email.length) < 5 || dotpos == email.length - 1) {
                    $(this).focus()
                    flag = false;
                }
                $(this).attr("name") == "txtEmail" && GetMailid($(this).val())
                if ($(this).attr("name") == "txtEmail" && $("#lblval").text().match("Already")) {
                    flag = false;
                    $(this).focus();
                }
            }
            if ($(this).attr("name").match("Mobile") && $(this).val().length < 10) {
                $(this).focus();
                $(this).next().text("Please Enter the Valid Mobile Number").show();
                flag = false;
            }
        })
        $(".loginForm .form-group select").each(function () {
            if ($(this).val() === "-1" && $(this).attr("required") == "required" && $(this).attr("disabled") != "disabled") {
                $(this).focus();
                $(this).attr("name").match("Country") ? $(this).next().text("Please Select a Country").show() : $(this).next().text("Please Select a State").show()
                flag = false;
            } 
        });
        return flag;
    })
    $('#ddlCountry').bind("change", function () {
        if ($(this).val() == -1) {
            $('#ddlState').attr("disabled", true)
            $('#ddlCity').attr("disabled", true)
            $(this).next().hide();
            $('#ddlState').next().hide();
            $('#ddlCity').next().hide();
        }
        else if ($(this).val() != "IN") {
            $('#ddlState').attr("disabled", true).hide();
            $('#ddlState').next().hide();
            //$('#ddlCity').attr("disabled", true)
            //$('#ddlState').next().hide();
            //$('#ddlCity').next().hide();
            //$(this).next().text("Currently we not provide the services outside india.").hide();
        }
        else {
            $('#ddlState').attr("disabled", false).show();
            $(this).next().hide();
        }
    });
    $('#ddlCountry').trigger('change');

    $('#ddlState').change(function () {
        if ($(this).val() == -1) {
            $('#ddlCity').attr("disabled", true)
            $(this).next().show();
            $('#ddlCity').next().hide();
        }
        else {
            $('#ddlCity').attr("disabled", false)
            $(this).next().hide();
        }
    });
    //$('#ddlState').trigger('change');

    $('#ddlCity').change(function () {
        if ($(this).val() == -1) {
            $(this).next().show();
        }
        else {
            $(this).next().hide();
        }
    });
    //$('#ddlCity').trigger('change');

});