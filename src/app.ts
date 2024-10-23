import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()


export function corsOptions(clientPort: number) {
    const corsOptions = {
        origin: `http://localhost:${clientPort}`,
        credentials: true
    }

    return app.use(cors(corsOptions))
}

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}))

export default app