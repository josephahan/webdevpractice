const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true, useUnifiedTopology: true});

//In the schema we define how we want data in a particular collection to be structured
//This lays out the foundation for every new fruit document that will be added to the database
const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "Please check data entry, no name specified"]
    },
    //here is an example of validation being added. We create an object using {}, within {} we can add type and different validation.
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

//After the schema, a mongoose model needs to be creeated. All methods such as insert and find will be done through the model which sort of represents the document.
//the model will take two parameters.
//first parameter is the singular name of the collection(mongoose automatically makes this plural)
//second parameter will take the schema. This schema structure is what the collection will follow
const Fruit = mongoose.model("Fruit", fruitSchema);

//this is how a document is defined within a collection
const fruit = new Fruit ({
    name: "Apple",
    rating: 7,
    review: "Pretty solid."
});

//this is to save the collection within a Fruits document inside FruitsDB

//fruit.save();
//above commented out after running program once to prevent constantly saving more every time i run the app.

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    //below code helps establish relationships and embed documents within each other.
    favoriteFruit: fruitSchema //# this tell mongoose we are embedding fruitSchema (a fruit document) inside a property called favoriteFruit inside the person document.
});

const Person = mongoose.model("Person", personSchema);

const person = new Person ({
    name: "Gok",
    age: 24
    //# favoriteFruit: kiwi <- this would be added to embed a kiwi document within Person document
});

//person.save();

const kiwi = new Fruit ({
    name: "Kiwi",
    rating: 8,
    review: "Delicious."
});

const lemon = new Fruit ({
    name: "Lemon",
    rating: 5,
    review: "Too sour."
});

//we can tap into model and insert many items using the following method

/*
Fruit.insertMany([kiwi, lemon], function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("success")
    }
})
*/

//the find function accepts callbacks. The first call back will be the error, the second is whatever it finds back represented as 'fruits'.
//therefore log the error if there is one otherwise log what it finds i.e fruits
Fruit.find(function(err, fruits){
    if(err){
        console.log(err);
    }
    else{
        //good practice to close connection to database once we have used it with our app.
        mongoose.connection.close();

        //loops through and only prints the name.
        fruits.forEach(function(fruit){
            console.log(fruit.name);
        });
    }
});

//other methods such as updateOne() and deleteOne() have been covered. mongoose documentation should be used for further details.