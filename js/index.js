
function toggleNav() {
    $("nav").toggleClass("togglednav");
    $(".navlink").toggleClass("animated");
    $(".navlink").toggleClass("slideInLeft");
}

function toggleTeamNav() {
    toggleNav();
    $("body").toggleClass("toggledteam");
    $(".teamletter").toggleClass("animated");
    $(".teamletter").toggleClass("slideInLeft");
}

currentYear = document.getElementById('currentYear');
var date = new Date();
var year = date.getFullYear();
currentYear.innerHTML = year;

function imageLoop() {
    var basepath = '../static/images/gallery/';
    var gallery = ['battle_of_the_bay/','competitions/'];
    var battle_of_the_bay = ['1', '2', '3'];
    var competitions = ['4', '5', '6', '7'];
    var totallist = [battle_of_the_bay, competitions];
    totallist.forEach(function(event) {
        event.forEach(function(image) {
            $(".column:nth-child(1)").append('<img class="galleryimage" src="' + basepath + gallery[totallist.indexOf(event)] + image + '.jpg">');
            $(".column:nth-child(2)").prepend('<img class="galleryimage" src="' + basepath + gallery[totallist.indexOf(event)] + image + '.jpg">');
            $(".column:nth-child(3)").append('<img class="galleryimage" src="' + basepath + gallery[totallist.indexOf(event)] + image + '.jpg">');
            $(".column:nth-child(4)").prepend('<img class="galleryimage" src="' + basepath + gallery[totallist.indexOf(event)] + image + '.jpg">');
        });
    });
    // for (var i = 0; i < totallist.length; i++) {
    //     for (var n = 0; n < totallist[i].length; n++) {
    //         $(".gallery").append('<img class="galleryimage" src="' + basepath + gallery[i] + totallist[i][n] + '.jpg">');
    //     }
    // }
}

imageLoop();
