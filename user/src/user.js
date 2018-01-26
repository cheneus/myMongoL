const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
	firstName: String,
	lastName: String,
});

// model calls user using UserSchema
const User = mongoose.model('user', UserSchema);

module.exports = User;