$(document).ready(function() {
    const page = $(window.location.pathname.split('/')).get(-1);
    console.log(page);
    switch(page) {
        case "home.html":
            $("#homeLink").addClass('active');
            break;
            
        case "fashion.html":
            $("#fashionLink").addClass('active');
            break;
            
        case "beauty.html":
            $("#beautyLink").addClass('active');
            break;
            
        case "etiquette.html":
            $("#etiquetteLink").addClass('active');
            break;
            
        case "about.html":
            $("#aboutLink").addClass('active');
            break;
            
    }
    
    $('#closeButton').on('click', function (event) {
        closeMenu();
        event.preventDefault();
    });

    $('.pageLink').on('click', function () {
        closeMenu();
    });

    $('#mobileButton').on('click', function (e) {
        $('#mobileSideNav').show();
        $('#mobileButton').hide();
        e.preventDefault();
        $( "#mobileSideNav" ).animate({
            left: "+=500"
        }, 400, 'linear', function() {
            // Animation complete.
        });
    });
});

function closeMenu() {
    $( "#mobileSideNav" ).animate({
        left: "-=500"
    }, 400, 'linear', function() {
        // Animation complete.
        $('#mobileSideNav').hide();
        $('#mobileButton').show();
    });
}