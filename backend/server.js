require("dotenv").config();
const express=require('express')
const app=express();
const cors = require('cors')
const cookieParser = require('cookie-parser')

//routes import
const authRoutes=require('./routes/auth.routes')
const qroomRoutes=require('./routes/qroom.routes')

app.use(express.json());
app.use(cookieParser())
app.use(cors())

//db connection
const connectDB = require('./config/db')
try {
    connectDB()
}
catch (err) {
    console.log("Error Connecting DATABASE!..", err);
}

//all routes
app.use("/api/auth",authRoutes)
app.use('/api/qroom', qroomRoutes);


app.listen(process.env.PORT,()=>{
    console.log("server is running 3000")
})