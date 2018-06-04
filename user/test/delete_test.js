const assert = require("assert");
const User = require("../src/user");

describe("Deleting a user", () => {
  let joe;
  // this.timeout(5000);

  beforeEach(done => {
    joe = new User({
      firstName: "John",
      lastName: "Joe"
    });
    joe
      .save()
      .then(() => done())
      .catch(err => console.log(err));
  });

  it("model instance remove", done => {
    joe
      .remove()
      .then(() => User.findOne({ lastName: "Joe" }))
      .then(user => {
        assert(user === null);
        done();
      });
  });

  it("class method remove", done => {
    User.remove({ lastName: "Joe" })
      .then(() => User.findOne({ lastName: "Joe" }))
      .then(user => {
        assert(user === null);
        done();
      });
  });

  it("class method findOneAndRemove", done => {
    User.findOneAndRemove({ lastName: "Joe" })
      .then(() => User.findOne({ lastName: "Joe" }))
      .then(user => {
        assert(user === null);
        done();
      });
  });

  it("class method findIdAndRemove", done => {
    User.findByIdAndRemove(joe._id)
      .then(() => User.findOne({ _id: joe._id }))
      .then(user => {
        assert(user === null);
        done();
      });
  });
});
