$(document).ready(function() {   

    function PageLoad($target) {
        
        //Take the href attribute from the target object that this function was called with
        var url = $target.attr('href');
        
        //Load the url into the #DisplayDiv element
        $("#DisplayDiv").load(url, function( response, status, xhr ) {
            
            //If there is an error, usually from links being outside the domain, then open the link in the same window
            if ( status == "error" ) {
                location.href=url;
            }
        
        //Stop other code from running after the user clicks the link tag
        return false;
        });
    }
        
        
    
    //When a menu item is clicked, take the 'a' tag object and pass it to the PageLoad function
    $("#DisplayDiv").find("a").click(function() {
        var $target = $(this);
        PageLoad($target);
        return false;
    });
});
            