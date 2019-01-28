$(document).ready(function () {

    $(".checkmark").hide();
    

    $(".formField").on("change", function () {

        if ($("#firstName").val() !== "") {
            $("#numero1").hide();
            $("#letter1").addClass(".checkmark").show();
        }
        if ($("#lastName").val() !== "") {
            $("#numero2").hide();
            $("#letter2").addClass(".checkmark").show();
        }
        if ($("#email").val() !== "") {
            $("#numero3").hide();
            $("#letter3").addClass(".checkmark").show();
        }
        if ($("#firstName").val() == "") {
            $("#numero1").show();
            $("#letter1").removeClass(".checkmark").hide();
            
        }
        if ($("#lastName").val() == "") {
            $("#numero2").show();
            $("#letter2").removeClass(".checkmark").hide();
            
        }
        if ($("#email").val() == "") {
            $("#numero3").show();
            $("#letter3").removeClass(".checkmark").hide();

        }


    });
    $(".round").on("change", function () {
    
            if ($("#dayOne").prop("checked")) {
                $("#dayTwo").prop("disabled", "true");
                $(this).prop("disabled", false);
                $("#numero4").hide();
                $("#letter4").addClass(".checkmark").show();
            } else {
                $("#dayTwo").prop("disabled", false);
                $("#numero4").show();
                $("#letter4").removeClass(".checkmark").hide();
            }

            if ($("#dayTwo").prop("checked")) {
                $("#dayOne").prop("disabled", "true");
                $(this).prop("disabled", false);
                $("#numero4").hide();
                $("#letter4").addClass(".checkmark").show();
            } else {
                $("#dayOne").prop("disabled", false);
            }
        
    });
    
});