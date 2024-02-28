const {Schema, model} = require('mongoose');


const userSchema = new Schema({
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
},{ toJSON: {getters:true}});

userSchema.virtual('friendCount').get(function(){
  return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;