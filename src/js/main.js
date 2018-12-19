var trackClass;
$(".social").hover(function(e) {
        var randomClass = getRandomClass();
        trackClass = randomClass;
        $(e.target).addClass(randomClass);
}, function(e) {
	$(e.target).removeClass(trackClass);
});
function getRandomClass() {
    //Store available css classes
    var classes = new Array("g-green", "g-red", "g-yellow", "g-blue");

    //Get a random number from 0 to 4
    var randomNumber = Math.floor(Math.random()*4);

    return classes[randomNumber];
}