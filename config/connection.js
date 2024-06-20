const mongoose = require('mongoose');
// mongooose connects locally to OUR DB instance
//  What does this Mean: 
//     mongoDB -> Localhost (adddress of our database) --> MongoDB Connection PORT --> Our DB Name
mongoose.connect('mongodb://127.0.0.1:27017/friendSend')
//mongoose.connect('mongodb://localhost:27017/test')
  .then(() => console.log('Connected!'))
  .catch(error => console.log("Error: ", error))

module.exports = mongoose.connection;