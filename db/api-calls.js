// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=8&tags=Burgers%2Csandwiches%2Cbreakfast%2Csalad%2Csoup%2Cdessert%2Cpasta%2Cpizza",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "57a1ca8572mshe9f2319a9585d1cp1c930ejsnf7e47715b8a0",
// 		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

var unirest = require("unirest");
var req = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch");
req.query({
	"cuisine": "burgers"
});
req.headers({
	"x-rapidapi-key": "57a1ca8572mshe9f2319a9585d1cp1c930ejsnf7e47715b8a0",
	"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
	"useQueryString": true
});
req.end(function (res) {
	if (res.error) throw new Error(res.error);
	console.log(res.body);
});

var unirest = require("unirest");
var req = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch");
req.query({
	"cuisine": "sandwiches"
});
req.headers({
	"x-rapidapi-key": "57a1ca8572mshe9f2319a9585d1cp1c930ejsnf7e47715b8a0",
	"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
	"useQueryString": true
});
req.end(function (res) {
	if (res.error) throw new Error(res.error);
	console.log(res.body);
});

var unirest = require("unirest");
var req = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch");
req.query({
	"cuisine": "breakfast"
});
req.headers({
	"x-rapidapi-key": "57a1ca8572mshe9f2319a9585d1cp1c930ejsnf7e47715b8a0",
	"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
	"useQueryString": true
});
req.end(function (res) {
	if (res.error) throw new Error(res.error);
	console.log(res.body);
});

var unirest = require("unirest");
var req = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch");
req.query({
	"cuisine": "salad"
});
req.headers({
	"x-rapidapi-key": "57a1ca8572mshe9f2319a9585d1cp1c930ejsnf7e47715b8a0",
	"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
	"useQueryString": true
});
req.end(function (res) {
	if (res.error) throw new Error(res.error);
	console.log(res.body);
});

var unirest = require("unirest");
var req = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch");
req.query({
	"cuisine": "soup"
});
req.headers({
	"x-rapidapi-key": "57a1ca8572mshe9f2319a9585d1cp1c930ejsnf7e47715b8a0",
	"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
	"useQueryString": true
});
req.end(function (res) {
	if (res.error) throw new Error(res.error);
	console.log(res.body);
});

var unirest = require("unirest");
var req = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch");
req.query({
	"cuisine": "dessert"
});
req.headers({
	"x-rapidapi-key": "57a1ca8572mshe9f2319a9585d1cp1c930ejsnf7e47715b8a0",
	"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
	"useQueryString": true
});
req.end(function (res) {
	if (res.error) throw new Error(res.error);
	console.log(res.body);
});

var unirest = require("unirest");
var req = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch");
req.query({
	"cuisine": "pasta"
});
req.headers({
	"x-rapidapi-key": "57a1ca8572mshe9f2319a9585d1cp1c930ejsnf7e47715b8a0",
	"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
	"useQueryString": true
});
req.end(function (res) {
	if (res.error) throw new Error(res.error);
	console.log(res.body);
});

var unirest = require("unirest");
var req = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch");
req.query({
	"cuisine": "pizza"
});
req.headers({
	"x-rapidapi-key": "57a1ca8572mshe9f2319a9585d1cp1c930ejsnf7e47715b8a0",
	"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
	"useQueryString": true
});
req.end(function (res) {
	if (res.error) throw new Error(res.error);
	console.log(res.body);
});