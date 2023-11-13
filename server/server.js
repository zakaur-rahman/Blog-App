import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

//components
import Connection from './database/db.js';
import Router from './routes/route.js';
import user from './model/user.js';


dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

if(process.env.NODE_ENV ==='production'){
    //set static folder
  app.use(express.static("client/build"));
}

const PORT = process.env.PORT || 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const URI = process.env.MONGO_URI || `mongodb+srv://${username}:${password}@blog-app.d43xgoa.mongodb.net/BLOG?retryWrites=true&w=majority`;

Connection(URI);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));