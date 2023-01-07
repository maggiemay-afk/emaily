const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
//could also be: require('./models/user'); 
const user = require('./models/user');
//could also be: require('./services/passport'); since we aren't returning anything from passport to store
const passportConfig = require('./services/passport'); 
const authRoutes = require('./routes/authRoutes');



mongoose.connect(keys.mongoURI);

const app = express();
authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);