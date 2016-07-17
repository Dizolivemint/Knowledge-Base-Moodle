$(document).ready(function() {            
    function PageLoad($link) {
        var url = $link.attr('href');
        $("#DisplayDiv").load(url, function( response, status, xhr ) {
            if ( status == "error" ) {
                location.href=url;
            }
        return false;
    });
    
    
    $("#DisplayDiv").find("a").click(function() {
        var $target = $(this);
        PageLoad($target);
        return false;
    });
});