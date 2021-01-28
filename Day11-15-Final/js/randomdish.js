const get_meal_btn = document.getElementById('get_meal');
const meal_container = document.getElementById('meal');

get_meal_btn.addEventListener('click', () => {
	fetch('https://www.themealdb.com/api/json/v1/1/random.php')
		.then(res => res.json())
		.then(res => {
		createMeal(res.meals[0]);
	});
});

const createMeal = (meal) => {
	const ingredients = [];
	// Get all ingredients from the object. Up to 20
	for(let i=1; i<=20; i++) {
		if(meal[`strIngredient${i}`]) {
			ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
		} else {
			// Stop if no more ingredients
			break;
		}
	}
	
	const newInnerHTML = `
		<div class="random-meal-container" >
			<div class="random-meal-main" style = "display: flex;" >
			    <div>	
			       <img src="${meal.strMealThumb}" alt="Meal Image">
			    </div>
				<div class="recipes">
				<br>
				     ${meal.strCategory ? `<p><strong><i>Category:</i></strong> ${meal.strCategory}</p>` : ''}
				     ${meal.strArea ? `<p><i class="fa fa-map-o" aria-hidden="true"></i> <strong><i>Area:</i></strong> ${meal.strArea}</p>` : ''}
				     ${meal.strTags ? `<p><i class="fa fa-tags" aria-hidden="true"></i> <strong><i>Tags:</i></strong> ${meal.strTags.split(',').join(', ')}</p>` : ''}
				  <h4><i class="fa fa-road" aria-hidden="true"></i> <i>Ingredients:</i></h4>
				   <ul>
					${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                   </ul>
				</div>
			   <div class="recipes-instructions">
				 <h4><i class="fa fa-delicious" aria-hidden="true"> </i>${meal.strMeal}</h4>
				 <p>${meal.strInstructions}</p>
			    </div>
			</div>
		</div>	
		${meal.strYoutube ? `
		<div class="random-meal-container">
			<h4 style = "text-indent: 20px;"><i class="fa fa-youtube-play" aria-hidden="true"></i> <i>Video Recipe.</i></h4>
			 <div class="videoWrapper">
				<iframe width="420" height="315"
				src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
				</iframe>
			 </div>
		</div>` : ''}

	`;
	
	meal_container.innerHTML = newInnerHTML;
}
