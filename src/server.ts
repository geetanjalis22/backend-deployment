import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import { injectRoutes } from './modules/injectRouters';

dotenv.config(); // Load environment variables

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGO_URI;

if (!MONGODB_URI) {
    console.error('❌ MONGO_URI is not defined in .env');
    process.exit(1);
} else {
    console.log(`🔍 Using MongoDB URI: ${MONGODB_URI}`);
}

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('✅ Connected to MongoDB');
        const serverApp = express();
        serverApp.use(express.json());
        injectRoutes(serverApp);
        serverApp.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('❌ MongoDB connection error:', error);
        process.exit(1);
    });
