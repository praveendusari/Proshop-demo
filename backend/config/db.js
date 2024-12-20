import mongoose from 'mongoose';

const connectDB = async () => {
    try{
        const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

        console.log(process.env.MONGO_URI);
        await mongoose.connect(process.env.MONGO_URI,clientOptions).catch(err => console.log(err.reason));
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log('MongoDB connected');
    }catch(err){
        console.error(`Error in DB connection: ${err.message}`);
        //process.exit(1);
    }
}

export default connectDB;