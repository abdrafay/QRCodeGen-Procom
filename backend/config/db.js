import mongoose from 'mongoose';

class Database {
    constructor() {
        this._connect();
    }
    
    _connect() {
        try {
            mongoose.connect(process.env.MONGO_URI)
            console.log('Database connection successful')
        } catch (error) {
            console.error('Database connection error')
        }
    }
    }
export default Database;