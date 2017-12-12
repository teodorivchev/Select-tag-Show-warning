function inProductChangeInput() {

    $('body').on('change', '.attribute_select', function() {
        var tiMer = setInterval(function() {
            $(".attribute_select").each(function() {
                if ($('#quantity_wanted_p').css('display') == 'none') {
                    $('.product_attributes').append("<p class = 'warningText' style='color: red;'>Не е налично</p>")

                } else {
                    $('.warningText').remove();
                }

            })
        }, 1000);
        setTimeout(() => {
            clearInterval(tiMer);
            $(".warningText").each(function(i) {
                if (i > 0) {
                    $(this).remove();
                }
            });
        }, 1000);
    });
}
inProductChangeInput();