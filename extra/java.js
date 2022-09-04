var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function myMap() {
    var brasov = {
        lat: 45.625366433310944,
		lng: 25.65423947954559
    };
	var timisoara = {
        lat: 45.7778352,
		lng: 21.3021109
    };
	 var iasi = {
        lat: 47.174723777319024,
		lng: 27.50083356315901
    };
	var bucuresti = {
        lat: 44.531543299999996,
		lng: 26.1327106
    };
	 var cluj = {
        lat: 46.7828052,
		lng: 23.7105872
    };
	var craiova = {
        lat: 44.31422887731903,
		lng: 23.903652033082963
    };
    var map = new google.maps.Map(document.getElementById('googleMap'), {
        zoom: 6,
        center: brasov
    });
    var marker = new google.maps.Marker({
        position: brasov,
        map: map
    });
	var marker = new google.maps.Marker({
        position: timisoara,
        map: map
    });
	var marker = new google.maps.Marker({
        position: bucuresti,
        map: map
    });
	var marker = new google.maps.Marker({
        position: iasi,
        map: map
    });
	var marker = new google.maps.Marker({
        position: cluj,
        map: map
    });
	var marker = new google.maps.Marker({
        position: craiova,
        map: map
    });
}