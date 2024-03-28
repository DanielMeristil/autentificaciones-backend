import mongoose from "mongoose";

const conectarDB = async () => {
    try {
          const db = await mongoose.connect("mdshadyacro:MDO.Daniel37cluster0.sf2yu9j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", 
          {
          //  useNewUrlParser: true,
          //  useUnifiedTopology: true,
          
          });
          const url = `${db.connection.host}:${db.connection.port}`;
          console.log(`MongoDB conectado en: ${url}`);
    } catch(error){
        console.log(`error: ${error.message}`);
        process.exit(1)
    }
};

export default conectarDB;