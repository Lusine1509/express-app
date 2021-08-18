import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import compression from 'compression';
import blogsRoutes from './routes/blogs';
import fs from 'fs';
import path from 'path';

dotenv.config();

export const PORT = 4567;

export const getApp = (): Express => {
    const app = express();

    app.disable('x-powered-by');

    app.use(express.json());
    app.use(compression());


    app.get('/readfile', (req, res) => {
        fs.createReadStream(path.join(__dirname,'..','text.txt')).pipe(res);
    })

    app.use('/posts', blogsRoutes)

    app.get('/', (req, res) => {
        res.send('Hello')
    })
    return app;
}