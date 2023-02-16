// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

// If you would like to take a look at the inputs that are passed into these functions, please
// feel free to check out the data.js file.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function (fruits) {
  var results = [];

  _.each(fruits, function(fruit) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function (numbers) {
  counter = 0;
  _.each(numbers, function(number) {
    if (number % 5 === 0) {
      counter++;
    }
  });
  return counter;
};

// use _.each to build an array containing only tweets belonging to a specified user.
var getUserTweets = function(tweets, user) {
  var userTweets = [];
  _.each(tweets, function(tweet) {
    if (tweet.user === user) {
      userTweets.push(tweet);
    }
  });
  return userTweets;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function (fruits, targetFruit) {
  var filteredFruit = _.filter(fruits, function(fruit) {
    return fruit === targetFruit;
  });
  return filteredFruit;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function (fruits, letter) {
  var filteredFruits = _.filter(fruits, function(fruit) {
    return fruit.charAt(0) === letter;
  });
  return filteredFruits;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function (desserts) {
  var filteredCookies = _.filter(desserts, function(dessert) {
    if (dessert.type === 'cookie') {
      return dessert;
    }
  });
  return filteredCookies;
};

// rebuild the getUserTweets function from above with _.filter instead
var filterUserTweets = function(tweets, user) {
  var filteredTweets = _.filter(tweets, function(tweet) {
    if (tweet.user === user) {
      return tweet;
    }
  });
  return filteredTweets;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function (fruits) {
  var upper = _.map(fruits, function(fruit) {
    return fruit.toUpperCase();
  });
  return upper;
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function (desserts) {
  return _.map(desserts, function(dessert) {
    var hasFlour = dessert.ingredients.some(function(ingredient) {
      return ingredient.includes('flour');
    });
    dessert.glutenFree = !hasFlour;
    return dessert;
  });
};

// given an array of tweet objects, return a new array of strings
// containing only the message properties.
var allUserMessages = function(tweets) {
  var messages = _.map(tweets, function(tweet) {
    return tweet.message;
  });
  return messages;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function (groceries, coupon) {
  var couponPrice = _.map(groceries, function(item) {
    var price = parseFloat(item.price.replace('$', ''));
    var salePrice = price * (1 - coupon);
    item.salePrice = '$' + salePrice.toFixed(2);
    return item;
  });
  return couponPrice;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function (products) {
  var totalPrice = _.reduce(products, function(acc, items) {
    var price = parseFloat(items.price.replace('$', ''));
    return acc + price;
  }, 0);
  return totalPrice;
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function (desserts) {
  return _.reduce(desserts, function(acc, dessert) {
    if (acc[dessert.type] === undefined) {
      acc[dessert.type] = 1;
    } else {
      acc[dessert.type]++;
    }
    return acc;
  }, {});
};

// return an object with the proper count of all user messages
/*
 example output:
  var tweetCountPerUser = countMessagesPerUser(tweets);
  {
    "douglascalhoun": 5,
    "mracus": 6,
    "shawndrost": 5,
    "sharksforcheap": 3
  }
*/
var countMessagesPerUser = function(tweets) {
  return _.reduce(tweets, function(acc, tweet) {
    if (acc[tweet.user] === undefined) {
      acc[tweet.user] = 1;
    } else {
      acc[tweet.user]++;
    }
    return acc;
  }, {});
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function (movies) {
  return _.reduce(movies, function(acc, movie) {
    if (movie.releaseYear >= 1990 && movie.releaseYear <= 2000) {
      acc.push(movie.title);
    }
    return acc;
  }, []);
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
// use underscore _.reduce()
var movieNight = function (movies, timeLimit) {
  return _.reduce(movies, function(acc, movie) {
    if (movie.runtime < timeLimit) {
      return true;
    }
    return acc;
  }, false);
};
