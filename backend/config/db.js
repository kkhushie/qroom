require('dotenv').config();
const mongoose=require('mongoose');
let connectDB=async()=>{
    try{
        const conn= await mongoose.connect(process.env.MONGO_URI);
        console.log('db connected')

    }
    catch(e){
        console.log(e);
        
    }
}

module.exports=connectDB