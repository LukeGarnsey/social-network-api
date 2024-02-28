const usernames = [
  'Aaran',
  'DreamyDream',
  'Air2Air2Bear',
  'NOT_Aaron',
  'Aaron-James',
  'Saltless',
  'Baryan',
  'Caryn',
  'Dayan',
  'Xazaan',
  'Pebaan',
  'lalabbas',
  '8821mystery',
  'crazy88',
  'terrekDerke',
  'something_special',
  'Abdisalam',
  'Creator3',
  'Dogstuff',
  'Cat_astronomy',
  'Potato_Sock',
  'call5_5',
  'Smith',
  'Jones',
  'Coollastname',
  'PLZ_enter_name',
  'National_candy',
  'Zechariah',
  'Yikes_Dad',
  'Zeeshan',
  'Zeid',
  'Zein',
  'Zen',
  'zzzzzzzz',
  'Xylopyhone',
  'kittyISH',
  'Zeph_from_space',
  'Carrots',
  'LionBurt',
  'Lollipops',
  'pickle_66',
  'Nine_tacos',
  'Zi',
  'Zidane',
  '5Crate5',
  'Zinedine',
  'Zion',
  'WAlkin_TAlkin',
  'Ziya',
  'Peanut_Butter',
  'Zohaib',
  'TroubleBoi',
  '2Hearts',
  'BlindFolded',
  'Zubayr',
  'Zuriel',
  'Xander',
  'Jared',
  'Grace',
  'Alex',
  'Mark',
  'Tamar',
  'Farish',
  'Sarah',
  'Nathaniel',
  'Parker',
];
const domains = [
  'gmail.com', 'yahoo.com', 'hotmail.com'
];
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getRandomName = () => `${getRandomArrItem(usernames)}`;
const getEmail = (username) => `${username}@${getRandomArrItem(domains)}`;
const getRandomNumbers = (returnCount, numberRange) => {
  const nums = [];
  const numRange = Array.from(Array(numberRange).keys());
  while(nums.length < returnCount)
  {
    const ran = Math.floor(Math.random() * numRange.length);
    nums.push(numRange[ran]);
    numRange.splice(ran, 1);
  }
  return nums;
}
const getRandomNameRange = (returnCount) =>{
  const names = usernames;
  let iter = 0;
  while(names.length > returnCount){
    names.splice(Math.floor(Math.random() * names.length), 1);
    iter++;
    if(iter > 100){
      console.log(names.length + " while loop bad");
      return;
    }
  }
  return names;
}

const thoughtText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation;';
const getThought = (username) =>{
  return {
    thoughtText:thoughtText,
    username:username,
  };
}

module.exports = {getRandomNameRange, getRandomName, getEmail, getRandomNumbers, getThought}