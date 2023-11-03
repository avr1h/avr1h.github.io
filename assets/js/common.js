$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
        $(this).parent().parent().find(".bibtex.hidden.open").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
        $(this).parent().parent().find(".abstract.hidden.open").toggleClass('open');
    });
    $('a').removeClass('waves-effect waves-light');
});
$(document).ready(function() {
    // Array of images
    var images = ["me0.png", "me1.png", "me2.png", "me3.png"];
    
    // Randomly select an image from the array
    var randomImage = images[Math.floor(Math.random() * images.length)];
    
    // Replace the placeholder image with the randomly selected image
    $("img[src='assets/img/me1.png']").attr("src", "assets/img/" + randomImage);
});