

import User from '../models/User.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'


export const userLogin =async(req,res)=>{
const {email,password} = req.body;
try {
 const isExist = await User.findOne({email:email});
 if(isExist){

 const passMatch = bcrypt.compareSync(password,isExist.password);
 if(!passMatch){
  return res.status(400).json({
    status:'error',
    message:'invalid credential'
  })
 }

 else{
  const token = jwt.sign({userId:isExist._id,isAdmin:isExist.isAdmin}, 'toky');
  return res.status(200).json({
token,
id:isExist._id,
email:isExist.email,
isAdmin:isExist.isAdmin,
username:isExist.username
  });

 }
 }
 else{
  return res.status(400).json({
    status:'error',
    message:'invalid user'
  });
 }
  
} catch (err) {
  return res.status(400).json(`${err}`);
}
}




export const userSignUp = async (req,res)=>{
const {username,password,email} = req.body;
try {
  const isExist = await User.findOne({email:email});

  if(isExist){

return res.status(400).json({
  status:'error',
  message :'user already exist'
})
  }
  else{
     const hashpass = bcrypt.hashSync(password, 10);
  await User.create({
    username,
    email,
    password:hashpass
  });
  return res.status(201).json({
    status:"success",
    message:'successfully signup'
  });
  }
} catch (err) {
  return res.status(400).json(
    `${err}`
  );
}
}