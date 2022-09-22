let bgimage = document.getElementsByClassName("bekgron")[0];
let dlimage = document.getElementsByClassName("duit2")[0];
let dlimage2 = document.getElementsByClassName("duit3")[0];
let	bobimage = document.getElementsByClassName("bob")[0];
let dlimage1 = document.getElementsByClassName("duit1")[0];
let line = document.getElementsByClassName("line")[0];
let bgbob = document.getElementsByClassName("ijo")[0];
let listrik = document.getElementsByClassName("pln")[0];
let bobteks = document.querySelector("#landing h1");

window.addEventListener('scroll', function() {
	let value = window.scrollY;

	bobimage.style.top = value * 0.3 + 'px';
	bobimage.style.right = value * 0.3 + 'px';
	bgimage.style.top = value * 0.3 + 'px';
	dlimage1.style.top = value * 0.3 + 'px';
	dlimage.style.top = value * 0.4 + 'px';
	dlimage2.style.top = value * 0.4 + 'px';
	dlimage2.style.right = value * 0.2 + 'px';
	line.style.left = value * 0.3 + 'px';
	bgbob.style.right = value * 0.4 + 'px';
	listrik.style.right = value * 0.2 + 'px';
	listrik.style.top = value * 0.3 + 'px';
	bobteks.style.right = value * 0.3 + 'px';
})


let bel = document.getElementsByClassName("belakang")[0];
let ung = document.getElementsByClassName("uang")[0];
let ung1 = document.getElementsByClassName("uang1")[0];
let bip = document.getElementsByClassName("hijau")[0];
let bob = document.getElementsByClassName("bobb")[0];
let tir = document.getElementsByClassName("pedas")[0];
let ung2 = document.getElementsByClassName("uang2")[0];
let gar = document.getElementsByClassName("garis")[0];

window.addEventListener('scroll', function() {
	let value = window.scrollY;

	bel.style.top = value * 0.3 + 'px';
	ung.style.right = value * 0.2 + 'px';
	ung.style.top = value * 0.2 + 'px';
	ung1.style.top = value * 0.4 + 'px';
	bip.style.right = value * 0.4 + 'px';
	bob.style.right = value * 0.3 + 'px';
	tir.style.right = value * 0.3 + 'px';
	ung2.style.top = value * 0.5 + 'px';
	ung2.style.right = value * 0.1 + 'px';
	gar.style.left = value * 0.3 + 'px';
})