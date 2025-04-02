import express from 'express'
import healthCheckRouter from './routes/healthcheck.router.js'
import authRouter from './routes/auth.router.js'

const app = express();

//routes
app.use('/api/v1/healthcheck', healthCheckRouter)
app.use('/api/v1', authRouter)

export default app;
