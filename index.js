mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: Number,
    favoriteFoods: [String]
 });
 const Person = mongoose.model("Person", personSchema);

 
 const person = new Person({ name: "John", age: 30, favoriteFoods: ["Pizza", "Pasta"] });
person.save((err, data) => { if (err) console.error(err); });

Person.create([{ name: 'Alice', age: 25, favoriteFoods: ['Burger'] }, { name: 'Bob', age: 28, favoriteFoods: ['Steak'] }]);

Person.find({ name: "John" }, (err, data) => { if (err) console.error(err); });


Person.findOne({ favoriteFoods: "Pizza" }, (err, data) => { if (err) console.error(err); });

Person.findById(personId, (err, data) => { if (err) console.error(err); });

Person.findById(personId, (err, person) => {
    if (err) console.error(err);
    person.favoriteFoods.push("Hamburger");
    person.save((err, data) => { if (err) console.error(err); });
 });

 
 Person.findOneAndUpdate({ name: personName }, { age: 20 }, { new: true }, (err, data) => { if (err) console.error(err); });

 Person.findByIdAndRemove(personId, (err, data) => { if (err) console.error(err); });


 Person.find({ favoriteFoods: "burritos" })
 .sort({ name: 1 })
 .limit(2)
 .select("-age")
 .exec((err, data) => { if (err) console.error(err); });

 