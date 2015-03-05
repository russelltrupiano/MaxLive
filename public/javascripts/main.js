$(document).ready(function() {

    $("#vocoderForm").submit(function(e) {
        e.preventDefault();
        var stringVal = $("#vocoderInput").val();
        $.post("/max/vocoder", {theText: stringVal});
        $("#vocoderInput").val("");
    });

    var currentOctave = 0;
    var defaultOctave = 0;

    var noteBases = {
        'f': 53,
        'fs': 54,
        'g': 55,
        'gs': 56,
        'a': 57,
        'as': 58,
        'b': 59,
        'c': 60,
        'cs': 61,
        'd': 62,
        'ds': 63,
        'e': 64,
    };

    $(".pianoKey").click(function() {
        var note = $(this).attr("id");
        // 12 notes per octave
        var midiNote = noteBases[note] + currentOctave * 12;
        $.post("/max/midi", {theText: midiNote});
    });

});