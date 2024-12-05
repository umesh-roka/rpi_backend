// import mongoose from 'mongoose'




// const userSchema = mongoose.Schema({
//   username:{
//     type:String,
//     required:true
//   },
//   email:{
//     type:String,
//     required:true
//   },
//   password:{
//     type:String,
//     required:true
//   },
//   username:{
//     type:String,
//     required:true
//   },
//   isAdmin:{
//     type:Boolean,
//     default:false
//   }
// },{timestamps:true});


// const User = mongoose.model('User',userSchema);

// export default User;







// // import mongoose from 'mongoose'

// // export const userSchema = new mongoose.Schema({
// // username:{
// //   type:String,
// //   required:true
// // },
// // email:{
// //   type:String,
// //   required:true
// // },
// // password:{
// // type:String,
// // required:true
// // },
// // isAdmin:{
// //   type:Boolean,
// //   default:false
// // }
// // },{timestamps:true});


// // const User = mongoose.model('User',userSchema);

// // export default User;




import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username:{
    type: String,
    required:true
  },
  password:{
    type:String,
    required:true},

    email:{
      type:String,
      required:true
    },
    isAdmin:{
      type:Boolean,
      default:false
    }

},{timestamps:true});


const User = mongoose.model('user', userSchema);

export default  User;
