$(document).ready(function () {
    $(document).on('click', ".lines-button", function () {
        $('#overlay').show();
        $('.lines-button').addClass('close');
    });
    $(document).on('click', ".lines-button.close", function () {
        $('#overlay').hide();
        $('.lines-button').removeClass('close');
    });
});