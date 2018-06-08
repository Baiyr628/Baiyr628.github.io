$(document).ready(function () {
    $(window).on('resize', function (){
        var width = $('body').width();

        if( width > 411){
            var img = $('.carousel-inner').find('img')
            for (var i =0 ;i < img .length ; i++){
                console.log(img[i])
                var n = i+1;
                // var src = "img/ " + n +".png";
                $(img[i]).attr('src','data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==');
            }
        }
    });

});