import path from 'path'

const support = ['.jpg','.png','jpeg','.docx'];


export const fileCheck = (req,res,next)=>{
const file = req.files?.notice_file;

try {
  if(file){
  const val = path.extname(file.name).toLowerCase();
  if(!support.includes(val)){
return res.status(400).json({
  status:'error',
  message:'provide valid image'
})
  }
  else{
    const uploadFile = `./uploads/${file.name}`
    file.mv = (uploadFile)

    req.filepath = `/uploads/${file.name}`
    next();
  }
}
else{
  return res.status(400).json({
    status:'error',
    message:'provide valid image'
  })
}
} catch (err) {
  return res.status(400).json({
    status:'error',
    message:`${err}`
  })
}



}