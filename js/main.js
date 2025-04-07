window.addEventListener("load", function(){
	let mobile=document.querySelector("#mobile");
	let tab=document.querySelector("#header .tab");
	let dim=document.querySelector(".dim");
	let closeBtn=document.querySelector(".icon .close");

	tab.addEventListener("click", function(e){
		e.preventDefault();

		document.body.classList.add("fixed");
		mobile.classList.add("active");
		dim.classList.add("active");
	});

	dim.addEventListener("click", function(){
		document.body.classList.remove("fixed");
		mobile.classList.remove("active");
		dim.classList.remove("active");
	});

	closeBtn.addEventListener("click", function(e){
		e.preventDefault();

		document.body.classList.remove("fixed");
		mobile.classList.remove("active");
		dim.classList.remove("active");
	});

	const mainSwiper=new Swiper("#main_slider .swiper-container", {
		navigation: {
			prevEl: "#main_slider .swiper-button-prev",
			nextEl: "#main_slider .swiper-button-next"
		},
		pagination: {
			el: "#main_slider .swiper-pagination",
			type: "fraction"
		}
	});

	const subSwiper=new Swiper("#sub_slider .swiper-container", {
		slidesPerView: 1.5,
		spaceBetween: 10,
		breakpoints: {
			640: {
				slidesPerView: 3.5,
				spaceBetween: 5
			}
		}
	});
});

let map;

function initMap(){
	let myLatLng={lat: 37.390141551118695, lng: 126.97151846772532};

	let map=new google.maps.Map(document.getElementById("map"), {
		center: myLatLng,
		zoom: 16,
		mapTypeControl: false,
		zoomControl: false,
		fullscreenControl: false,
		rotateControl: false
	});

	let marker=new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: "(주)오뚜기"
	});
}