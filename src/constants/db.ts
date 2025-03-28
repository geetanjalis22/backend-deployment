import dotenv from 'dotenv';
dotenv.config();

export const DB_HOST: string = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017';