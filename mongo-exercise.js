// import to mongodb atlas from local file
// mongoimport --uri "mongodb+srv://admin:1qa2ws3ed@cluster0.bfdos.mongodb.net/dbDefault?retryWrites=true&w=majority" --collection courses --drop --file assets/data/exercise-data.json --jsonArray

const mongoose = require('mongoose');
const connectionString = "mongodb+srv://admin:1qa2ws3ed@cluster0.bfdos.mongodb.net/dbDefault?retryWrites=true&w=majority";

mongoose.connect(connectionString,  {
	useNewUrlParser: true,
	useUnifiedTopology: true
	})
	.then( () => console.log('connected to exercise') )
	.catch( err => console.log(err) );

const courseSchema = mongoose.Schema({
	tags: [ String ],
	date: Date,
	name: String,
	author: String,
	isPublished: Boolean,
	price: Number
});

const Course = mongoose.model('Course', courseSchema);

async function getCourses() {
	const courses = await Course.find({ isPublished: true, tags: { $in: ['backend', 'frontend'] } })
		.sort({ price: -1 })
		.select({ name: 1, author: 1});
	console.log(courses);
}

getCourses();