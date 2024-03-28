import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import conectarDB from "./config/db.js";
import dotenv from 'dotenv';
// import mongoose from "mongoose";
import passport from "./passport/passport.jwt.js";
//import router_session from "./routes/sessions.js";

const app = express();


app.use(express.json());
app.use(passport.initialize())
app.use(cookieParser({secret:"secret_cookie",
    maxAge: 36000,httpOnly: true,secure: true
}));
app.use(session({
    secret:"secretCode",
    resave: true,
    saveUninitialized: true
}));

    app.use(session());
  

    
app.use(express.json());
dotenv.config();

conectarDB();

app.use("/");
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`servidor funcionando en el puerto ${PORT}`);
});
