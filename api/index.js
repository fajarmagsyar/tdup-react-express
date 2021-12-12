import express from "express";
import db from "./config/database.js";
import tdupRoute from "./routes/index.js";
import cors from "cors";

//pake express
const app = express();
//untuk terima data body json dalam proses post and patch
app.use(express.json());
//cross origin resource sharing untuk memungkinkan komunikasi API dengan frontend
app.use(cors());

try{
    db.authenticate();
    console.log('Database Connected..');
} catch(error){
    console.error('Database connection error:', error);
}


app.use('/tdup', tdupRoute);


app.listen(3001, () => console.log('server nyala 3001'));