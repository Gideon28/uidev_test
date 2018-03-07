(function($){
    let $users = $('.user-card-avatar'),
        $overlay = $('.popup-overlay'),
        $popup = $('.popup-content'),
        $popupClose = $('.popup-close');

    $users.each(function(index) {
        $(this).on('click', (e) => {
            e.preventDefault();
            let cardId = $(this).data('id');
            let thisCard = document.getElementById(cardId);

            $overlay.fadeIn(300);
            $popup.html(thisCard.innerHTML);
        });
    });

    $popupClose.on('click', function(e) {
        $overlay.fadeOut(300);
    });
    $overlay.on('click', function(e) {
        $overlay.fadeOut(300);
    });

    let statuses = $('.user-card .user--status');
    for (let status of statuses) {
        let thisStatus = status.innerText;
        if (thisStatus.length > 150) {
            let trunc = thisStatus.substring(0,150) + '…';
            let shortDesc = document.createElement('p');
            shortDesc.innerText = trunc;
            shortDesc.classList.add('short-desc');
            status.after(shortDesc);
            status.classList.add('long-desc');
        }
    }
})(jQuery)