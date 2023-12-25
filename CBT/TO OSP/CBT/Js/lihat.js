let kerjakan = document.getElementById("kerjakan");
let pedoman = document.getElementById("pedoman");
let petunjuk = document.getElementById("petunjuk");
let CBT = document.getElementById("CBT");
var modal = document.getElementById("myModal");

function lihat() {
    kerjakan.style.display = "block";
    CBT.style.display = "block";
    petunjuk.hidden = "true";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.addEventListener("keydown", function (e) {
	//Menutup modal dengan keyword Esc
	if (e.key === "Escape" && modal.style.display != "none") {
		modal.style.display = "none";
	}
  
	//Tombol untuk pertanyaan sebelum dan selanjutnya
	else if(e.key === "ArrowRight") {
		setelah();
	}
	else if(e.key === "ArrowLeft") {
		sebelum();
	}
	
	//Tombol untuk menghapus jawaban
	else if(e.key === "Delete" || e.key === "Backspace") {
		hapus();
	}
});
