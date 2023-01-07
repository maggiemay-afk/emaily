const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const { Schema } = mongoose;  -- this is destructuring, same as doing const Schema = mongoose.Schema;
//we'll be doing more destructuring throughout the tutorial


/*create schema for our new collection
  schema describes what every individual record will look like - properties
  we can always add more properties, i.e., name: String
*/
const userSchema = new Schema({
  googleId: String
});

/* tells mongoose to create a new collection called users
  on start up, if the collection already exists, it wont delete and remake the collection
  mongoose will see that they match up and continue on
*/
mongoose.model('users', userSchema); 
