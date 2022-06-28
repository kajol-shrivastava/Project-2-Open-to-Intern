const { is } = require("express/lib/request");
const internModel=require("../models/internModel")
const collegeModel=require("../models/internModel")
const {
    isValidRequest,
    isValidName,
    isValid,
    isValidLink,
    isValidMail,
    isValidMobile
  } = require("../validator/validator");


// const createIntern=async function(req,res){
//     try{
//         if (!isValidRequest(req.body))
//         return res
//           .status(400)
//           .send({ status: false, message: "Please enter a valid input" });

//           const {name,email,mobile,collegeName}=req.body
//           const intern={}

//           if(name){
//               if(!isValidName(name))
//               return res
//           .status(400)
//           .send({ status: false, message: "Please enter a valid name" });
//           else 
//           intern.name=name
//           }
//           else{
//           return res
//           .status(400)
//           .send({ status: false, message: " name is required" });}

//           if(email){
//               if(!isValidMail(email))
//               return res
//           .status(400)
//           .send({ status: false, message: "Please enter a valid email" });
//           }
//           else {
//           return res
//           .status(400)
//           .send({ status: false, message: " email is required" });}

//           if(mobile){
//               if(!isValidMobile)
//               return res
//           .status(400)
//           .send({ status: false, message: "Please enter a valid mobile number" });
//           }
//           else {
//           return res
//           .status(400)
//           .send({ status: false, message: " mobile number is required" });}

//           const student=await internModel.findOne({$or:[{email:email},{mobile:mobile}]})

//           if(student){
//             return res
//             .status(400)
//             .send({ status: false, message: " email Id and mobile already in use" });
//           }

//           if(collegeName){
//               is(!isValidName(collegeName))
//               return res
//           .status(400)
//           .send({ status: false, message: "Please enter a valid collegename" });
//           }

//           else{
//           return res
//             .status(400)
//             .send({ status: false, message: " collegename is required" });}

//           const college=await collegeModel.findOne({$or:[{name:collegeName,fullName:collegeName}]})

//           if(!college){
//             return res
//             .status(400)
//             .send({ status: false, message: " invalid college name" });
//           }

//           intern.email=email
//           intern.mobile=mobile
//           intern.collegeId=college._id

//           const newIntern=await internModel.create(intern)
//           res.status(201).send({status:true,data:newIntern})
          
  

//     }
//  catch (err) {
//      console.log(err)
//     res.status(500).send({ status: false, msg: err.message });
//   } 
// }

// module.exports={createIntern}