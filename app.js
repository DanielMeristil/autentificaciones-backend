import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import mongoose from "mongoose";
import passport from "./passport/passport.jwt";


const app = express();


app.use(express.json());
app.use(passport.initialize())
app.use(cookieParser({
    secret:"secret_cookie",
    maxAge: 36000,
    httpOnly: true,
    secure: true
}));
app.use(session({
    secret:"secretCode",
    resave: true,
    saveUninitialized: true
}));

    app.use(session());
    mongoose.connect("mongodb+srv://mdshadyacro:MDO.Daniel37@cluster0.sf2yu9j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    //mongoose.connect("mongodb://admin:root@localhost:27017/login");

    app.listen(8080,()=>{
        console.log("servidor funcionando en el puerto 8080");
    });
    
/*    const conectarDB = async () => {
        try {
    const db = await 

mongoose.connect("mongodb+srv://mdshadyacro:MDO.Daniel37@cluster0.sf2yu9j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",

    );
        {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    );

    const url = `${db.connection.host}: ${db.connection.port}`;
    console.log(`MongoDB conectado en:${url}`)

    } catch(error){
    console.log(`error: ${error.message}`);
    process.exit(1);
    }
};

export default conectarDB;
*/
