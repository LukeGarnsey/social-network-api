const User = require('../models/User');

module.exports = {
  async getUsers(req, res){
    try{
      const users = await User.find();
      console.log(users);
      if(!users.length)
        return res.status(404).json({message:"No users found"});

      return res.status(200).json(users);
    }catch(err){
      return res.status(500).json(err);
    }
  },
  async getSingleUser(req, res){
    try{
      const user = await User.findById(req.params.id);
      if(!user)
        return res.status(404).json({message:"No users found"});

      return res.status(200).json(user);
    }catch(err){
      return res.status(500).json(err);
    }
  },
  async updateUser(req, res){
    try{
      
      const result = await User.updateOne({ _id: req.params.id}, req.body);
      if(!result)
        return res.status(404).json({message:"User not found/updated"});
      const user = await User.findById(req.params.id);
      return res.status(200).json(user);
    }catch(err){
      return res.status(500).json(err);
    }
  },
  async createUser(req, res){
    try{
      const user = await User.create(req.body);
      if(!user)
        return res.status(404).json({message:"User couldn't be created"});

      return res.status(200).json(user);
    }catch(err){
      return res.status(500).json(err);
    }
  },
  async deleteUser(req, res){
    try{
      const result = await User.deleteOne({_id:req.params.id});
      if(!result)
        return res.status(404).json({message:"No user deleted"});

      return res.status(200).json({result, message:"User deleted"});
    }catch(err){
      return res.status(500).json(err);
    }
  }
};