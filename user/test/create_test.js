const assert = require('assert');
const User = require('../src/user')

// describe the test name.
describe('creating records', () => {
	// it block
	it('saves a user', (done) => {
		// assert is expecting a boolean
		const doe = new User ({
			firstName: 'john',
			lastName: 'doe'
		})
		doe.save()
		.then(() => {
			assert(!doe.isNew)
			done();
		})
		// assert(User.find({firstName:'john'}))
	});
})	