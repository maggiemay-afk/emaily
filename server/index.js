const express = require('express');
const passportConfig = require('./services/passport'); 
//could also be: require('./services/passport'); since we aren't returning anything from passport to store
const authRoutes = require('./routes/authRoutes');

const app = express();

authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);