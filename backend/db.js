const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://go-food:Sinu8260@cluster0.cf8b3n4.mongodb.net/go-food?retryWrites=true&w=majority&appName=Cluster0'
const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) console.log("---", err)
        else {
            console.log('Connected!');
            const fetched_data = await mongoose.connection.db.collection("food-items");
            fetched_data.find({}).toArray(async function (err, data) {
              const foodCategory = await mongoose.connection.db.collection("food-category");
              foodCategory.find({}).toArray(function(err,catData){
                if (err) console.log(err);
                else {
                global.food_items = data;
                global.foodCategory = catData;
                }
              })
                // if (err) console.log(err);
                // else {
                //  global.food_items = data;
                 
                // }
            });
        }
    });
};
module.exports = mongoDB();