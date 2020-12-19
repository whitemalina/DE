$('.menu').addClass('original2').clone().insertAfter('.menu').addClass('cloned2').css('position', 'fixed').css('top', '0').css('margin-top', '0').css('z-index', '500').removeClass('original2').hide();

scrollIntervalID = setInterval(stickIt, 10);


function stickIt() {

    var orgElementPos = $('.original2').offset();
    orgElementTop = orgElementPos.top;

    if ($(window).scrollTop() >= (orgElementTop)) {
        // scrolled past the original position; now only show the cloned, sticky element.

        // Cloned element should always have same left position and width as original element.     
        orgElement = $('.original2');
        coordsOrgElement = orgElement.offset();
        leftOrgElement = coordsOrgElement.left;
        widthOrgElement = orgElement.css('width');
        $('.cloned2').css('left', leftOrgElement + 'px').css('top', 0).css('width', widthOrgElement).show();
        $('.original2').css('visibility', 'hidden');
    } else {
        // not scrolled past the menu; only show the original menu.
        $('.cloned2').hide();
        $('.original2').css('visibility', 'visible');
        $('.original2').css('visibility', 'hidden');
    }
}