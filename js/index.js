$(document).ready(function () {

    function change() {
        var width = $('body').width();
        var img = $('.carousel-inner').find('img');

        if( width < 411){
            for (var i =0 ;i < img .length ; i++){
                var n = i+1;
                var src = "img/"+n+".png";
                $(img[i]).attr('src',src);
            }
        }else {
            for (var o =0 ;o < img .length ; o++){
                $(img[o]).attr('src','data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==');
            }
        }
    }
    change();
    $(window).on('resize', function (){
        change()
    });

});