import mongoose from "mongoose";

export const connectDB = async () => { 
    try {
        const {connection} = await mongoose.connect(process.env.MONGO_URI)
        const url = `${connection.host}:${connection.port}`;

        console.log("mongodb connected to", url);
    } catch (error) {
        console.log(error.message);
        process.exit(1); // Exit the process with failure
    }
}