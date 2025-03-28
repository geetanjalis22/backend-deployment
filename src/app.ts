// src/app.ts
import express from 'express';
import articleRoutes from '../modules/article/routes/articleRoutes';

const app = express();

app.use(express.json());
app.use('/articles', articleRoutes);

export default app;