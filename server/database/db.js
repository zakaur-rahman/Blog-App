import mongoose from 'mongoose';

const Connection = async (URI) => {
    
    try {
        await mongoose.connect(URI ,{ useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;

