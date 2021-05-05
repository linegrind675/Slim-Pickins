const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=8&tags=Burgers%2Csandwiches%2Cbreakfast%2Csalad%2Csoup%2Cdessert%2Cpasta%2Cpizza",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "57a1ca8572mshe9f2319a9585d1cp1c930ejsnf7e47715b8a0",
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});