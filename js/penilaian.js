var skor = 0;

let sepertiga = eval(1/3);
let duapertiga = eval(2/3);
let setengah = eval(1/2);
let seperempat = eval(1/4);

/*for(var i = 0; i <= soalPG.length; i++) {
	var num = KJ[soalPG[i]];
	if(localStorage.getItem('nomor'+soalPG[i]) === KJ[soalPG[i]]) {
		//skor++;
		console.log('benar');
	}
	//console.log(skor);
	//console.log(num);
	//console.log(localStorage.getItem('nomor'+soalPG[i]));
}*/

if(localStorage.getItem('nomor1') === 'C') { //1
	skor+=1;
	console.log('1 benar');
}

if(localStorage.getItem('nomor2') === 'C') { //2
	skor+=1;
	console.log('2 benar');
}

if(localStorage.getItem('nomor3') === 'D') { //3
	skor+=1;
	console.log('3 benar');
}

if(localStorage.getItem('nomor4') === 'D') { //4
	skor+=1;
	console.log('4 benar');
}

if(localStorage.getItem('nomor5') === 'B') { //5
	skor+=1;
	console.log('5 benar');
}

if(localStorage.getItem('nomor6') === 'C') { //6
	skor+=1;
	console.log('6 benar');
}

if(localStorage.getItem('nomor7') === 'C') {
	skor+=1;
	console.log('7 benar');
}

if(localStorage.getItem('nomor8') === 'D') { //8
	skor+=1;
	console.log('8 benar');
}

if(localStorage.getItem('nomor9') === 'D') { //9
	skor+=1;
	console.log('9 benar');
}

if(localStorage.getItem('nomor10') === 'B') { //10
	skor+=1;
	console.log('10 benar');
}

if(localStorage.getItem('nomor11') === 'D') { //11
	skor+=1;
	console.log('11 benar');
}

if(localStorage.getItem('nomor12') === 'A') { //12
	skor+=1;
	console.log('12 benar');
}

/* --- Nomor 13 PG Kompleks ---*/
if(localStorage.getItem('savy-pilihan_13_0') === '1') {
	skor += setengah;
	console.log('13 A benar');
}
if(localStorage.getItem('savy-pilihan_13_1') === '1') {
	skor += setengah;
	console.log('13 B benar');
}
if(localStorage.getItem('savy-pilihan_13_2') === '1') {
	skor -= sepertiga;
}
if(localStorage.getItem('savy-pilihan_13_3') === '1') {
	skor -= sepertiga;
}
if(localStorage.getItem('savy-pilihan_13_4') === '1') {
	skor -= sepertiga;
}
/* --- Nomor 13 PG Kompleks ---*/

/* --- Nomor 14 PG Kompleks ---*/
if(localStorage.getItem('savy-pilihan_14_0') === '1') {
	skor -= setengah;
}
if(localStorage.getItem('savy-pilihan_14_1') === '1') {
	skor -= setengah;
}
if(localStorage.getItem('savy-pilihan_14_2') === '1') {
	skor += sepertiga;
	console.log('14 C benar');
}
if(localStorage.getItem('savy-pilihan_14_3') === '1') {
	skor += sepertiga;
	console.log('14 D benar');
}
if(localStorage.getItem('savy-pilihan_14_4') === '1') {
	skor += sepertiga;
	console.log('14 E benar');
}
/* --- Nomor 14 PG Kompleks ---*/

if(localStorage.getItem('nomor15') === 'D') { //15
	skor+=1;
	console.log('15 benar');
}

if(localStorage.getItem('nomor16') === 'B') { //16
	skor+=1;
	console.log('16 benar');
}

if(localStorage.getItem('nomor17') === 'E') { //17
	skor+=1;
	console.log('17 benar');
}

/* --- Nomor 18 PG Kompleks ---*/
if(localStorage.getItem('savy-pilihan_18_0') === '1') {
	skor += seperempat;
	console.log('18 A benar');
}
if(localStorage.getItem('savy-pilihan_18_1') === '1') {
	skor -= 1;
}
if(localStorage.getItem('savy-pilihan_18_2') === '1') {
	skor += seperempat;
	console.log('18 C benar');
}
if(localStorage.getItem('savy-pilihan_18_3') === '1') {
	skor += seperempat;
	console.log('18 D benar');
}
if(localStorage.getItem('savy-pilihan_18_4') === '1') {
	skor += seperempat;
	console.log('18 E benar');
}
/* --- Nomor 18 PG Kompleks ---*/

if(localStorage.getItem('nomor19') === 'E') { //19
	skor+=1;
	console.log('19 benar');
}

if(localStorage.getItem('nomor20') === 'C') { //20
	skor+=1;
	console.log('20 benar');
}

if(localStorage.getItem('nomor21') === 'A') { //21
	skor+=1;
	console.log('21 benar');
}

if(localStorage.getItem('nomor22') === 'A') { //22
	skor+=1;
	console.log('22 benar');
}

if(localStorage.getItem('nomor23') === 'E') { //23
	skor+=1;
	console.log('23 benar');
}

if(localStorage.getItem('nomor24') === 'B') { //24
	skor+=1;
	console.log('24 benar');
}

/* --- Nomor 25 PG Kompleks ---*/
if(localStorage.getItem('savy-pilihan_25_0') === '1') {
	skor -= setengah;
}
if(localStorage.getItem('savy-pilihan_25_1') === '1') {
	skor += sepertiga;
	console.log('25 B benar');
}
if(localStorage.getItem('savy-pilihan_25_2') === '1') {
	skor += sepertiga;
	console.log('25 C benar');
}
if(localStorage.getItem('savy-pilihan_25_3') === '1') {
	skor += sepertiga;
	console.log('25 D benar');
}
if(localStorage.getItem('savy-pilihan_25_4') === '1') {
	skor -= setengah;
}
/* --- Nomor 25 PG Kompleks ---*/

/* --- Nomor 26 PG Kompleks ---*/
if(localStorage.getItem('savy-pilihan_26_0') === '1') {
	skor += sepertiga;
	console.log('26 A benar');
}
if(localStorage.getItem('savy-pilihan_26_1') === '1') {
	skor -= setengah;
}
if(localStorage.getItem('savy-pilihan_26_2') === '1') {
	skor -= setengah;
}
if(localStorage.getItem('savy-pilihan_26_3') === '1') {
	skor += sepertiga;
	console.log('26 D benar');
}
if(localStorage.getItem('savy-pilihan_26_4') === '1') {
	skor += sepertiga;
	console.log('26 E benar');
}
/* --- Nomor 26 PG Kompleks ---*/

/* --- Nomor 27 PG Kompleks ---*/
if(localStorage.getItem('savy-pilihan_27_0') === '1') {
	skor += sepertiga;
	console.log('27 A benar');
}
if(localStorage.getItem('savy-pilihan_27_1') === '1') {
	skor += sepertiga;
	console.log('27 B benar');
}
if(localStorage.getItem('savy-pilihan_27_2') === '1') {
	skor += sepertiga;
	console.log('27 C benar');
}
if(localStorage.getItem('savy-pilihan_27_3') === '1') {
	skor -= setengah;
	
}
if(localStorage.getItem('savy-pilihan_27_4') === '1') {
	skor -= setengah;
}
/* --- Nomor 27 PG Kompleks ---*/

if(localStorage.getItem('nomor28') === 'E') { //28
	skor+=1;
	console.log('28 benar');
}

if(localStorage.getItem('nomor29') === 'A') { //29
	skor+=1;
	console.log('29 benar');
}

/* --- Nomor 30 PG Kompleks ---*/
if(localStorage.getItem('savy-pilihan_30_0') === '1') {
	skor += sepertiga;
	console.log('30 A benar');
}
if(localStorage.getItem('savy-pilihan_30_1') === '1') {
	skor -= setengah;
}
if(localStorage.getItem('savy-pilihan_30_2') === '1') {
	skor -= setengah;
}
if(localStorage.getItem('savy-pilihan_30_3') === '1') {
	skor += sepertiga;
	console.log('30 D benar');
}
if(localStorage.getItem('savy-pilihan_30_4') === '1') {
	skor += sepertiga;
	console.log('30 E benar');
}
/* --- Nomor 30 PG Kompleks ---*/

if(localStorage.getItem('nomor31') === 'B') { //31
	skor+=1;
	console.log('31 benar');
}

if(localStorage.getItem('nomor32') === 'C') { //32
	skor+=1;
	console.log('32 benar');
}

if(localStorage.getItem('nomor33') === 'E') { //33
	skor+=1;
	console.log('33 benar');
}

/* --- Nomor 34 PG Kompleks ---*/
if(localStorage.getItem('savy-pilihan_34_0') === '1') {
	skor += sepertiga;
	console.log('34 A benar');
}
if(localStorage.getItem('savy-pilihan_34_1') === '1') {
	skor += sepertiga;
	console.log('34 B benar');
}
if(localStorage.getItem('savy-pilihan_34_2') === '1') {
	skor -= setengah;
}
if(localStorage.getItem('savy-pilihan_34_3') === '1') {
	skor -= setengah;
}
if(localStorage.getItem('savy-pilihan_34_4') === '1') {
	skor += sepertiga;
	console.log('34 E benar');
}
/* --- Nomor 34 PG Kompleks ---*/

if(localStorage.getItem('nomor35') === 'B') { //35
	skor+=1;
	console.log('35 benar');
}

if(localStorage.getItem('nomor36') === 'A') { //36
	skor+=1;
	console.log('36 benar');
}

if(localStorage.getItem('nomor37') === 'D') { //37
	skor+=1;
	console.log('37 benar');
}

/* --- Nomor 38 PG Kompleks ---*/
if(localStorage.getItem('savy-pilihan_38_0') === '1') {
	skor -= sepertiga;
}
if(localStorage.getItem('savy-pilihan_38_1') === '1') {
	skor -= sepertiga;
}
if(localStorage.getItem('savy-pilihan_38_2') === '1') {
	skor -= sepertiga;
}
if(localStorage.getItem('savy-pilihan_38_3') === '1') {
	skor += setengah;
	console.log('38 D benar');
}
if(localStorage.getItem('savy-pilihan_38_4') === '1') {
	skor += setengah;
	console.log('38 E benar');
}
/* --- Nomor 38 PG Kompleks ---*/

if(localStorage.getItem('nomor39') === 'A') { //39
	skor+=1;
	console.log('39 benar');
}

/* --- Nomor 40 PG Kompleks ---*/
if(localStorage.getItem('savy-pilihan_40_0') === '1') {
	skor += setengah;
	console.log('40 A benar');
}
if(localStorage.getItem('savy-pilihan_40_1') === '1') {
	skor -= sepertiga;
}
if(localStorage.getItem('savy-pilihan_40_2') === '1') {
	skor -= sepertiga;
}
if(localStorage.getItem('savy-pilihan_40_3') === '1') {
	skor += setengah;
	console.log('40 D benar');
}
if(localStorage.getItem('savy-pilihan_40_4') === '1') {
	skor -= sepertiga;
}
/* --- Nomor 40 PG Kompleks ---*/

skor = skor.toFixed(2);
console.log(skor);
localStorage.setItem('skor', skor);

let nilai = (skor / 40) * 100;
console.log(nilai);
localStorage.setItem('nilai', nilai);

kirimNilai();

function kirimNilai() {
      var nama_peserta = localStorage.getItem('nama_peserta');
      var username_peserta = localStorage.getItem('user');
      var skor_peserta = skor;
      var nilai_peserta = nilai;

      $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfVuQ0z6yepr3Mt0Ru1jhxxXId3jht5r7hn-7tIODlKj0t2aw/formResponse",
        data: {
          "entry.1393511114": nama_peserta,
          "entry.292382335": username_peserta,
          "entry.855392105": skor_peserta,
          "entry.8162521": nilai_peserta
        },
        type: "POST",
        dataType: "xml",
        success: function () {
        },
        error: function () {
        }
      });
      return false;
}