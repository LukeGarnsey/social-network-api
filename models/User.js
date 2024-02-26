const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type:String, required:true, unique:true, trim: true}, 
  email: {
    type:String, 
    required:true, 
    unique:true,
    validate: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please fill a valid email address'],
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'thought',
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'friend',
    },
  ],
});

const User = mongoose.model('User', userSchema);

module.exports = User;