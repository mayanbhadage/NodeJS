// Faker package


var faker = require('faker');

function generate(count) {
    for (var i = 0 ; i < count; i++)
    {
        var product = faker.commerce.product();
        var price = faker.commerce.price();

        console.log(product + " " + price)
    }

}

generate(10);