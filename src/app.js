import express from 'express'
import healthCheckRouter from './routes/healthcheck.router.js'

const app = express();

//routes
app.use('/api/v1/healthcheck', healthCheckRouter)


export default app;
