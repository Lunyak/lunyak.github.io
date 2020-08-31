


const slidePage = document.querySelector(".slidepage");
const firstNextBtn = document.querySelector(".nextBtn");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");

// const progressText = document.querySelectorAll(".step p");

const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
const bulletOne = document.querySelector(".bullet-one");
const bulletTwo = document.querySelector(".bullet-two");
let max = 4;
let current = 1;



firstNextBtn.addEventListener("click", function (){
	slidePage.style.marginLeft = "-25%";
	bullet[current - 1].classList.add("active");
	progressCheck[current - 1].classList.add("active");
	bulletOne.classList.remove("bullet-active");

	current += 1;
})
nextBtnSec.addEventListener("click", function (){
	slidePage.style.marginLeft = "-50%";
	bullet[current - 1].classList.add("active");
	progressCheck[current - 1].classList.add("active");
	bulletTwo.classList.remove("bullet-active");
	current += 1;
})

submitBtn.addEventListener("click", function (){
	current += 1;
	setTimeout(function (){
		location.reload();
	}, 1000)
})


$('.tipe-phone').focus(function(){
	$('.bullet-one').addClass('bullet-active');
	$(".label-phone").addClass('label-phone-active');
	$('.tipe-phone').attr("placeholder", "");
});

$('.tipe-mail').focus(function(){
	$('.bullet-two').addClass('bullet-active');
	$('.tipe-mail').attr("placeholder", "");
	$(".label-mail").addClass('label-mail-active');
});
$('.field btn-contacts').focus(function(){
	preventDefault();
});
$('.btn-contacts').click(function(){
	preventDefault();
});


$('.field btn-contacts').click(function () {
	preventDefault();
});

