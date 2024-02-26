const { Schema, Types} = require('mongoose');

const reactionSchema = new Schema({
  reactionId:{
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody:{
    type: String,
    required: true,
    maxlength: 280,
  },
  username:{
    type: String,
    required: true,
  },
  createdAt:{
    type: Date,
    default: Date.now(),
  }
});
reactionSchema.virtual('formattedDate').get(function(){
  return `${this.createdAt.toLocaleDateString('en-US')} at ${this.createdAt.toLocaleTimeString('en-US', {hour: 'numeric', minute:'2-digit'})}`;
});

module.exports = reactionSchema;