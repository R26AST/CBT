// seleksi elemen video
var video = document.querySelector("#video-webcam");

document.getElementById("tombol-lanjutkan").disabled = true;
video.style.display = "none";

// minta izin user
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

// jika user memberikan izin
if (navigator.getUserMedia) {
// jalankan fungsi handleVideo, dan videoError jika izin ditolak
	navigator.getUserMedia({ video: true }, handleVideo, videoError);
	
}

// fungsi ini akan dieksekusi jika  izin telah diberikan
function handleVideo(stream) {
    //video.style.display = "block";
    video.srcObject = stream;
	//document.getElementById("izin-webcam").style.display = "none";
	document.getElementById("tombol-lanjutkan").disabled = false;
}

// fungsi ini akan dieksekusi kalau user menolak izin
function videoError(e) {
    alert("Izinkan menggunakan webcam!");
	//document.getElementById("izin-webcam").style.display = "block";
	//document.getElementById("lanjutkan").hidden = "true";
	//document.getElementById("tombol-lanjutkan").disabled = true;
}

