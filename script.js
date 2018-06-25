
// preloader
document.body.onload = function () {
    setTimeout(function () {
        var preloader = document.getElementById('page-preloader');
        if ( !preloader.classList.contains('done'))
        {
            preloader.classList.add('done');
        }
    },0);

};


//timer
var sec = 0;
var min =0;
var hour = 0;
setInterval(function () {
        sec++;
    document.querySelector('.sec').innerHTML =sec;
    if (sec==59){
        sec=0;
    }
},1000);
setInterval(function () {
    min++;
    document.querySelector('.minutes').innerHTML =min;
    if (min==59){
        min=0;
    }
},1000*60);
setInterval(function () {
    hour++;
    document.querySelector('.hours').innerHTML =hour;
},1000*60*60);



