const connection = require('../config/connection');
const { User, Thought} = require('../models');
const {getRandomNameRange, getRandomName, getEmail, getRandomNumbers, getThought} = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () =>{

  let userCheck = await connection.db.listCollections({name:'users'}).toArray();
  if(userCheck.length)
    await connection.dropCollection('users');

  let thoughtCheck = await connection.db.listCollections({name:'thoughts'}).toArray();
  if(thoughtCheck.length)
    await connection.dropCollection('thoughts');

  const users = [];
  const thoughts = [];
  const usernames = getRandomNameRange(10);
  for(let i = 0; i<usernames.length; i++){
    users.push({
      username:usernames[i],
      email: getEmail(usernames[i]),
    });
    const numRang = getRandomNumbers(3, usernames.length);
    console.log(...numRang + " " + usernames[i]);
    //numRang.forEach(el => console.log(el));
  }
  for(let i = 0;i<16; i++){
    thoughts.push(getThought(usernames[Math.floor(Math.random() * usernames.length)]));
  }

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  console.log('db seeded🌱');
  process.exit(0);
});