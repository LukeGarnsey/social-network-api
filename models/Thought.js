const mongoose = require('mongoose');
const Reaction = require('./Reaction');
const thoughtSchema = new mongoose.Schema({
  thoughtText: {type:String, required:true, minLength: 1, maxLength: 280},
  createdAt: {type:Date, default: Date.now,},
  username: {type:String, required:true},
  reactions: [Reaction],
},{ toJSON: {getters:true}});
thoughtSchema.virtual('formattedDate').get(function(){
  return `${this.createdAt.toLocaleDateString('en-US')} at ${this.createdAt.toLocaleTimeString('en-US', {hour: 'numeric', minute:'2-digit'})}`;
});
thoughtSchema.virtual('reactionCount').get(function(){return this.reactions.length})

const Thought = mongoose.Model('Thought', thoughtSchema);

module.exports = Thought;