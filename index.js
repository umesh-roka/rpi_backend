import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routes/userRoutes.js'
import noticeRouter from './routes/noticeRouter.js'
import fileUpload from 'express-fileupload'
import cors from 'cors'

const port = 5000;
const app = express();

app.use(cors({}));
app.use(express.json());


mongoose.connect('mongodb+srv://umagar799:magar123@cluster0.hyyfg78.mongodb.net/RPI').then((val)=>{
  app.listen(port,()=>{
    console.log('connected server is running ');
  });
  
});


app.get('/',(req,res)=>{
  return res.status(200).json({
    status:'success',
    message:'welcome to rpi backend'
  })
})


app.use(fileUpload({
  limits:{fileSize:4*1024*1024},
}))

app.use('/uploads',express.static('uploads'));

app.use('/api/notice',noticeRouter);

app.use('/api/users',userRouter);