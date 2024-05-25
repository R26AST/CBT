
let timer1, timer2;
	  
function alert(waktu) {
	$('.toast').addClass("active");
    $('.progress').addClass("active");
    timer1 = setTimeout(() => {
        $('.toast').removeClass("active");
    }, waktu); //1s = 1000 milliseconds
    timer2 = setTimeout(() => {
		$('.progress').removeClass("active");
		$('#login-btn').prop('disabled',false);
    }, waktu + 300);	
}

function sukses() {
	$('.icon').addClass('fas fa-check');
	$('.icon').css('background-color', '#0ABF30');
	$('head').append('<style> .progress:before{background-color: #0ABF30;} .progress.active:before{animation: progress 1.5s linear forwards;} </style>');	
	$('.toast').css('border-left-color', '#0ABF30');
	$('#tipe-alert').html('Sukses');
	alert(1500);
}

function error() {
	$('.icon').addClass('fas fa-xmark');
	$('.icon').css('background-color', '#E24D4C');
	$('head').append('<style> .progress:before{background-color: #E24D4C;} .progress.active:before{animation: progress 2s linear forwards;} </style>');	
	$('.toast').css('border-left-color', '#E24D4C');
	$('#tipe-alert').html('Terjadi Galat!');
	alert(2000);
}

function info() {
	$('.icon').addClass('fas fa-info');
	$('.icon').css('background-color', '#3498DB');
	$('head').append('<style> .progress:before{background-color: #3498DB;} .progress.active:before{animation: progress 2s linear forwards;} </style>');	
	$('.toast').css('border-left-color', '#3498DB');
	$('#tipe-alert').html('Informasi!');
	alert(2000);	
}

$('.close').click(function () {
    $('.toast').removeClass("active");
        
    setTimeout(() => {
        $('.progress').removeClass("active");
		$('#login-btn').prop('disabled',false);
    }, 300);
    clearTimeout(timer1);
    clearTimeout(timer2);
});
