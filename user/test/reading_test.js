const assert = require('assert');
const User = require('../src/user')

describe('Reading users out of database', () => {
  let doe
  	// this.timeout(5000);

  beforeEach((done) => {
    doe = new User({
      firstName: 'John',
      lastName: 'Doe'
    });
    doe.save()
      .then(() => done())
    // .catch(err => console.log(err))
  });

  // it('finds all users with the last name of doe', (done) => {
  // 	User.find({lastName: 'Doe'})
  // 	.then((users) => {
  // 		console.log(users);
  // 		done();
  // 	})
  // 	// .catch(err => {
  // 	// 	console.log(err)
  // 	// })
  // })


  it('finds user using _id', (done) => {
    User.find({ firstName: 'John' })
      .then((users) => {
        console.log(`Found user[0]; ${users[0]._id}`);
        assert(users[0]._id.toString() === doe._id.toString());
        done();
      })
     .catch(done)
     // .catch((err) => {
     // 	console.log(err)
     // 	done()
     // })
  })
})

