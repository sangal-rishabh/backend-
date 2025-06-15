// const user = require('../Modals/user');
// const bcrypt = require('bcryptjs');



// exports.signup = async(req, res)=>{
//     try{
//     const {channelName , userName , about , profilePic  ,password} = req.body;
//       const isExist = await user.findOne({userName});
//       console.log(isExist)
//       if (isExist){
//         res.status(400).json({error:"Username is already exist plese try with other user name "});
         
//       }else{
//         let updatedPass = await bcrypt.hash(password , 10);
//         const  user = new UserActivation({channelName , userName , about , profilePic  ,password : updatedPass});
//         await user.isActive();
//         res.status(201).json({message:'user register succesfully ' , success:"yes" , data:user});
//       }
//     }catch(error){

//     }
// }


const user = require('../Modals/user');
const User = require('../Modals/user');
const bcrypt = require('bcryptjs');
const jwt = require ('jsonwebtoken');

const cookieOption ={
  httpOnly:true,
  secure :false,  // true krni hn production me 
  sameSite:'Lax'
}

exports.signup = async (req, res) => {
  try {
    const { channelName, userName, about, profilePic, password } = req.body;

    const isExist = await User.findOne({ userName });
    console.log("User already exists:", isExist);

    if (isExist) {
      return res.status(400).json({
        error: "Username is already exist. Please try with another username."
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      channelName,
      userName,
      about,
      profilePic,
      password: hashedPassword
    });

    await newUser.save(); 

    res.status(201).json({
      message: "User registered successfully",
      success: "yes",
      data: newUser
    });

  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


exports.signIn = async (req, res)=>{

    try{
      
        const {userName, password} = req.body;
        const user = await User.findOne({userName});
        if(user && await bcrypt.compare(password,user.password) ){
             const token = jwt.sign({userId: user._id} , 'Its_My_Secret_Key' );
             res.cookie('token' , token , cookieOption );
             res.json({message:'Logged in successfully' , success:"true" , token,user});
        }else{
       res.status(400).json({error:'Invalid credintials'})
        }
    }catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ error: "Internal server error" });
  }

}


exports.logout = async(req, res)=>{
  res.clearCookie('token' , cookieOption).json({message:'Logout successfully '})
}

















