const mongoose=require('mongoose')
const QroomSchema=new mongoose.Schema({
    host: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      code: {
        type: String,
        unique: true,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
      }],
      active: {
        type: Boolean,
        default: true
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
})

module.exports=mongoose.model('Qroom',QroomSchema)