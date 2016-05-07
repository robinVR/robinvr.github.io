var divHeight = $('.first').height();
console.log(divHeight);

    $('.seccond').css("height", divHeight);
    $('.third').css("height", divHeight);

     $(".first-reveal").addClass('js-reveal');


var blocksPieces = $("#block-1, #block-2, #block-3, #block-4, #block-5, #block-6, #block-7, #block-8");

// Store a jquery reference to our paths.
var paths = $('#Page-1 path');
var thingie =$('#Page-1 Path-144');
// For each path, set the stroke-dasharray and stroke-dashoffset
// equal to the path's total length, hence rendering it invisible on load.
paths.each(function(i, e) {
e.style.strokeDasharray = e.style.strokeDashoffset = e.getTotalLength();
});


TweenMax.to ("#the-text", 2, {
autoAlpha:1});

// Add each separate line animation to the timeline, animating the
// stroke-dashoffset to 0. Use the duration, delay and easing to
// achieve the perfect animation.
TweenMax.to ("#Page-1", 1, {
autoAlpha:1});

TweenMax.staggerTo("path", 1, { strokeDashoffset: 0, delay: 1},0.02);
TweenMax.staggerTo (blocksPieces , 1, {
autoAlpha:1, delay: 4}, 0.2);
// TweenMax.staggerTo ("#block-1, #block-2, #block-3, #block-4, #block-5, #block-6, #block-7, #block-8" , 4, {fill:"#4BC5C2", delay:4},0.1);



// 1. select the svg
// 2. attach a waypoint
// 3. put greenscok animation in the function

var waypoint = new Waypoint({
element: document.getElementById('Page-2'),
    handler: function(direction) {

        console.log('action');
        console.log(direction);


       if (direction === 'down'){

         $(".seccond-reveal").addClass('js-reveal');

            var tl = new TimelineLite;

            tl.from("#seccond", 1, {drawSVG:0, ease:Power1.easeInOut})
            tl.from("#Page-2 path", 1, {drawSVG:0, ease:Power1.easeInOut})
            TweenLite.set("#Page-2 path", {visibility:"visible"});
       // tl.paused(true);

            // tl.from("#Page-2 rect", 2, {drawSVG:0, ease:Power1.easeInOut})

           this.destroy()


        }
}, offset: 900

    // tl.pause();

})


// tablet svg illustration render


var waypoint = new Waypoint({
element: document.getElementById('Page-3'),
    handler: function(direction) {

        console.log('action');
        console.log(direction);


       if (direction === 'down'){

        $(".third-reveal").addClass('js-reveal');

            var tl = new TimelineLite;

            var piecesBlockleft = $("#piece-1, #piece-2, #piece-3, #piece-4");
            var piecesBlockright = $("#piece-8, #piece-7, #piece-6, #piece-5");
            var middlediamonds = $("#di01, #di02, #di03");

            TweenMax.staggerTo ("#ipad-tablet" , 0.2, { opacity:1, delay: 0.1}, 0.3);
            tl.from("#Page-3 rect", 2, {drawSVG:0, ease:Power1.easeInOut})
            TweenMax.staggerTo (piecesBlockleft , 0.3, { opacity:1, delay: 2}, 0.2);
            TweenMax.staggerTo (piecesBlockright , 0.3, { opacity:1, delay: 2}, 0.2);
            TweenMax.staggerTo (middlediamonds , 0.5, { opacity:1, delay: 2.2}, 0.5);

            TweenLite.set("#Page-3 rect", {visibility:"visible"});
       // tl.paused(true);

            // tl.from("#Page-2 rect", 2, {drawSVG:0, ease:Power1.easeInOut})

        return false;

        }
        this.destroy()
}, offset: 600

    // tl.pause();

})









