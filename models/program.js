const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const programSchema = new Schema({
	id : String,
	type : String,
	typeId : String,
	length : String,
	lengthId : String,
	date : String,
	enrolled : Number,
	confirmed : Number,
	capacity : Number,
	manualClose : Boolean,
	waitlist : [{ firstName: String, lastName: String, email: String }],
	order : Number
})

const Program = mongoose.model('programs_v1', programSchema);

module.exports = Program;
