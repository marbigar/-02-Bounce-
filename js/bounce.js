(function($){
    $.fn.bounce = function (options){
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();
        var time = 3000;

        var $this = $(this);

        startAnimation();

        setInterval(function(){
            startAnimation();
        }, time);

        function startAnimation() {
            $this.animate({
                left: getRandomInt(0, windowWidth),
                top: getRandomInt(0, windowHeight)
            }, time);
        }

        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++ ) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        $this.click(function(event) {
            var left = event.clientX;
            var top = event.clientY;

            for ( i = 0; i < 5; i++ ) {
                $this.clone().appendTo('body').bounce().css('background', getRandomColor());
            }
        });

        return this;
    }
})(jQuery);