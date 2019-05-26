const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/admin');
const shoes = require('../../shoe-data-generator/shoeData.json');

let carouselSchema = mongoose.Schema({
    productName: String,
    sku: String,
    category: String,
    colors: [String],
    price: Number,
    images: [String]
});

let Carousel = mongoose.model('Carousel', carouselSchema);

let save = (data) => {
    //console.log('inside of save: ', data[0])
    Carousel.insertMany(data, (err) => {
        if (err) {
            console.log('insertion error: ', err)
        }
        console.log('attempting to update')
        Carousel.update(data, { upsert: true })

    });
}

//save(shoes);

let findAll = (obj, callback) => {
    Carousel.find(obj, (err, shoes) => {
        if (err) {
            console.log('error in db retrieving repos: ', err);
        }
        callback(null, shoes);
    })
}

module.exports = { save, findAll };