<button type="button" colorclass="outline-primary" class="w-fix-lg mx-auto" id="releases-all">Show all versions</button>

<style>
#section-releases table thead,
#section-releases table tbody td:before {
    display: none;
}

#section-releases table td {
    white-space: nowrap;
}
</style>

<script type="text/javascript">
(function() {
    $('#section-releases table tbody tr').each(function(i, that) {
        if(i > 5)
            $(that).addClass('off');
    });

    $('#releases-all').on('click', function () {
        $('#section-releases table tbody tr').removeClass('off');
        $(this).addClass('off');
    });
})();
</script>