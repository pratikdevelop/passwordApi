const mongoose = require('mongoose');
const mongoURI = process.env.MONGOURL;
console.log(
  mongoURI
);

(async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
})();
