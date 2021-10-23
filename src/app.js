import {app,PORT} from './server.js'
import dotenv from 'dotenv'
// import './db.js'

dotenv.config()


app.listen(PORT,()=> console.log(`Server on port ${PORT}`))