$(document).ready(function() {

    $("#vocoderForm").submit(function(e) {
        e.preventDefault();
        var stringVal = $("#vocoderInput").val();
        $.post("/max/vocoder", {theText: stringVal});
        $("#vocoderInput").val("");
    });

});