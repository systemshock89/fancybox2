$(function () {

    /* Динамическое подключение fancybox */
    if ($("a").is(".fancybox-thumb")) {
        $('head').append("<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css'/>"); /* Подключим стили */
        $('head').append("<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/helpers/jquery.fancybox-thumbs.css'/>");
        $.getScript('https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js', function () {/* Подключим скрипт */
            $.getScript('https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/helpers/jquery.fancybox-thumbs.js', function () {

                /* Подрубаем галерею */
                $(".fancybox-thumb").fancybox({
                    prevEffect: 'none',
                    nextEffect: 'none',
                    helpers: {
                        title: {
                            type: 'outside'
                        },
                        thumbs: {
                            width: 50,
                            height: 50
                        },
                        //overlay: {
                        //    locked: false
                        //}
                    }
                });

                /* Открываем автоматом по id через класс */
                var start_id = window.location.href.indexOf("#");
                if (start_id > 0) {
                    var id = window.location.href.substring(start_id + 1);
                    $('a.fancybox-thumb.id' + id).click();
                }

            });
        });
    }
    /* /Динамическое подключение fancybox */


}); // END READY