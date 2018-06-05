const assert = require("assert");
const User = require("../src/user");

describe("Updating a user", () => {
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
  });

  function assertName(obj, done) {
    obj
    .then(() => User.find({}))
    .then(users => {
      assert(users.length === 1);
      assert(users[0].firstName === 'Alex')
      done();
    });
  }

  it('instance update; set and save', (done) => {
    joe.set('firstName', 'Alex');
    assertName(joe.save(), done)
     
  });

  it('instance update', (done) => {
    assertName(joe.update({firstName: 'Alex'}), done);
  });

  it("class method update", done => {
    assertName(User.update(({ firstName: 'John' }, {firstName:'Alex'}))  , done);
  });

  it("class method findOneAndUpdate", done => {
    assertName(User.findOneAndUpdate(({ firstName: 'John' }, {firstName:'Alex'}))  , done)
  });

  it("class method findIdAndUpdate", done => {
    assertName(
        User.findByIdAndUpdate(joe._id, {firstName:'Alex'})
         , done)
  });
});
