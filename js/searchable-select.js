///
/// it need to use jquery contain function for case-senstive
/// or use for case-sensitive
///
$('select').on("keydown", function (event) {
    if (event.key && event.key.length === 1) {
        event.preventDefault();

        var lastTime = $(this).data('timeStamp') * 1;
        var search = $(this).data('search') || '';
        var timerID = $(this).data('timerID');

        if (timerID) {
            window.clearTimeout(timerID);
        }

        let obj = this;

        if (lastTime && event.timeStamp - lastTime > 600) {
            search = event.key;
        }
        else {
            search += event.key;
        }

        timerID = window.setTimeout(function () {
            var $obj = $(obj);
            var $selectedItem = $obj.find('option:containsIN("' + search + '"):first');

            if ($selectedItem.length > 0) {
                $obj.find('option:selected').prop('selected', false);
                $selectedItem.prop('selected', true);

                //very important
                $obj[0].selectedIndex = $selectedItem.index();

                var scrollTop = ($selectedItem.index() / $obj.find('option').length) * parseInt($obj[0].scrollHeight);
                $obj.scrollTop(scrollTop);

                $obj.select().change();
            }
        }, 600);

        $(this).data('timerID', timerID);
        $(this).data('timeStamp', event.timeStamp);
        $(this).data('search', search);
    }
});
