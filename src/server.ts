import mongoose from "mongoose";
import app from "./app";



const port:number = 3000;

// database connection
async function db() {
    try {
        await mongoose.connect("mongodb://localhost:27017/mongoose-pectic");
        console.log("😊 database connected 😊");
    } catch (error) {
        console.log(" database not connected");
        console.log(error);
    }
}
db();
 

app.listen(port, () => {
  console.log(`mongoose-pectic listening on port ${port}`);
});
