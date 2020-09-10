const mongoose = require('mongoose');
// const userSchema = require('./userSchema.js')
// const User = mongoose.model('user', userSchema, 'user')
const connectionString = 'mongodb+srv://admin:1qa2ws3ed@cluster0.bfdos.mongodb.net/dbDefault?retryWrites=true&w=majority'

mongoose.connect(connectionString)
	.then(() => console.log('connected'))
	.catch(err => console.error('could not connect', err));

const deviceSchema = new mongoose.Schema({
	primaryKey: { leadingKey: Number, secondaryKey: Number },
	name: String,
	type: String
});

const Device = mongoose.model('Device', deviceSchema);
//
// async function createDevice() {
// 	const sensor1 = new Device({
// 		primaryKey: { leadingKey: 1, secondaryKey: 2 },
// 		name: 'Sensor1',
// 		type: 'Sensor'
// 	});
//
// 	const result = await sensor1.save();
// 	console.log(result);
// }
//
// createDevice();


async function getDevices() {
	const devices = await Device.find();
		// .sort({ name: 1 })
		// .select({ name: 1, type: 1});
	console.log(devices);
}

getDevices();
//
// async function createUser(username) {
// 	return new User({
// 		username,
// 		created: Date.now()
// 	}).save()
// }
//
// async function findUser(username) {
// 	return await User.findOne({ username })
// }
//
// ;(async () => {
// 	const connector = mongoose.connect(connectionString)
// 	const username = process.argv[2].split('=')[1]
//
// 	let user = await connector.then(async () => {
// 		return findUser(username)
// 	})
//
// 	if (!user) {
// 		user = await createUser(username)
// 	}
//
// 	console.log(user)
// 	process.exit(0)
// })()
//
