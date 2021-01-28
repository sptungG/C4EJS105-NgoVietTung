
/*======================== SLIDES ========================*/
// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
// function myFunction() {
//     document.getElementById("myDropUp").classList.toggle("show");
//   }
  
//   // Close the dropdown if the user clicks outside of it
//   window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropup-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }
// let z = document.getElementById('imgs');
// let url = [
//     'https://theme.hstatic.net/1000257596/1000329871/14/block_home_category2.jpg?v=82',
//     'https://theme.hstatic.net/1000257596/1000329871/14/block_home_category1.jpg?v=82'
// ]

// let count=0;
//         setInterval(() => {
//             count++;
//            if(count % 3 == 0){
//             z.style.backgroundImage = "url(https://theme.hstatic.net/1000257596/1000329871/14/slideshow_3.jpg?v=82)"
//            }
//            else if(count % 3 == 1){
//             z.style.backgroundImage = "url(https://theme.hstatic.net/1000257596/1000329871/14/slideshow_2.jpg?v=82)"
//            }
//            else{
//             z.style.backgroundImage = "url(https://theme.hstatic.net/1000257596/1000329871/14/slideshow_1.jpg?v=82)"
//            }
            
//         }, 5000);
/*======================== TOP button ========================*/
var mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// 

function fetchDogImage() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(response => response.json())
      .then(data => {
        dogImage.innerHTML = `<img src="${data.message}"/>`;
    }) 
  }


/*======================== SLIDES ========================*/
// const get_meal_btn = document.getElementById('get_meal');
// const meal_container = document.getElementById('meal');
// async function getData() {
//     let fetchPromise = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
//     return fetchPromise.json();
// }
// getData()
// 		.then(res => res.json())
// 		.then(res => {
// 		createMeal(res.meals[0]);
// 	});

// const createMeal = (meal) => {
// 	const ingredients = [];
// 	// Get all ingredients from the object. Up to 20
// 	for(let i=1; i<=20; i++) {
// 		if(meal[`strIngredient${i}`]) {
// 			ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
// 		} else {
// 			// Stop if no more ingredients
// 			break;
// 		}
// 	}
	
// 	const newInnerHTML = `
// 		<div class="row">
// 			<div class="columns five">
// 				<img src="${meal.strMealThumb}" alt="Meal Image">
// 				${meal.strCategory ? `<p><strong>Category:</strong> ${meal.strCategory}</p>` : ''}
// 				${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ''}
// 				${meal.strTags ? `<p><strong>Tags:</strong> ${meal.strTags.split(',').join(', ')}</p>` : ''}
// 				<h5>Ingredients:</h5>
// 				<ul>
// 					${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
// 				</ul>
// 			</div>
// 			<div class="columns seven">
// 				<h4>${meal.strMeal}</h4>
// 				<p>${meal.strInstructions}</p>
// 			</div>
// 		</div>
// 		${meal.strYoutube ? `
// 		<div class="row">
// 			<h5>Video Recipe</h5>
// 			<div class="videoWrapper">
// 				<iframe width="420" height="315"
// 				src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
// 				</iframe>
// 			</div>
// 		</div>` : ''}
// 	`;
	
// 	meal_container.innerHTML = newInnerHTML;
// }