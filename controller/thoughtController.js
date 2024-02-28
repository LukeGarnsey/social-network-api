const { User } = require('../models');
const Thought = require('../models/Thought');

module.exports = {
  async getThoughts(req, res){
    try{
      const thoughts = await Thought.find();
      if(!thoughts.length)
        return res.status(404).json({message:"No thoughts found"});

      return res.status(200).json(thoughts);
    }catch(err){
      return res.status(500).json(err);
    }
  },
  async getSingleThought(req, res){
    try{
      const thought = await Thought.findById(req.params.id);
      if(!thought)
        return res.status(404).json({message:"No thoughts found"});

      return res.status(200).json(thought);
    }catch(err){
      return res.status(500).json(err);
    }
  },
  async updateThought(req, res){
    try{
      
      const result = await Thought.updateOne({ _id: req.params.id}, req.body);
      if(!result)
        return res.status(404).json({message:"Thoughts not found/updated"});
      const thought = await Thought.findById(req.params.id);
      return res.status(200).json(thought);
    }catch(err){
      return res.status(500).json(err);
    }
  },
  async createThought(req, res){
    try{
      const thought = await Thought.create(req.body);
      const user = await User.findOne({username:thought.username});
      if(user){
        user.thoughts.push(thought._id);
        user.save();
      }
      if(!thought)
        return res.status(404).json({message:"Thought couldn't be created"});

      return res.status(200).json(thought);
    }catch(err){
      return res.status(500).json(err);
    }
  },
  async deleteThought(req, res){
    try{
      const result = await Thought.deleteOne({_id:req.params.id});
      if(!result)
        return res.status(404).json({message:"No thought deleted"});

      return res.status(200).json({result, message:"Thought deleted"});
    }catch(err){
      return res.status(500).json(err);
    }
  },
}