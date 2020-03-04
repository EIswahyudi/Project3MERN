const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', UserSchema);

UserSchema.plugin(passportLocalMongoose);

app.use(passport.initialize());
app.use(passport.session());

module.exports = User;