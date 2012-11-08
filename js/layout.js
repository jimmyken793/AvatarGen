// initialize the controls
$(function () {
    // set up the high level accordion
    var icons = {
        header: "ui-icon-circle-arrow-e",
        headerSelected: "ui-icon-circle-arrow-s"
    };

    $("#accordion").accordion({
        icons: icons,
        change: function (event, ui) {
            // save the canvas to the output img element if switching to
            // the step 2 tab
            if (ui.newHeader.context.id === "step-2") {
                saveCanvasToImage();
            }
        }
    });

    // set up colour picker
    var strokeColourPicker = $("#stroke-colour-picker");
    strokeColourPicker.ColorPicker({
        flat: true,
        color: '#000',
        onChange: function (hsb, hex, rgb) {
            var hexColour = "#" + hex;
            setColour(hexColour);
        },
        onSubmit: function (hsb, hex, rgb) {
            var hexColour = "#" + hex;
            setColour(hexColour);
        }
    });

    $("#delete-tool").click(function () {
        clearDrawing();
    });

    $("#pencil-tool").click(function () {
        setBrush("pencil");
        $(".tool-button").removeClass("selected");
        $(this).parent().addClass("selected");
    });

    $("#spray-tool").click(function () {
        setBrush("spray");
        $(".tool-button").removeClass("selected");
        $(this).parent().addClass("selected");
    });

    $("#paint-tool").click(function () {
        setBrush("paint");
        $(".tool-button").removeClass("selected");
        $(this).parent().addClass("selected");
    });

    $("#undo-tool").click(function () {
        undo();
    });

    $("#eraser-tool").click(function () {
        setBrush("eraser");
        $(".tool-button").removeClass("selected");
        $(this).parent().addClass("selected");
    });

    $("#colour-picker-tool").click(function () {
        setBrush("colour-picker");
        $(".tool-button").removeClass("selected");
        $(this).parent().addClass("selected");
    });
});