// const video = require('../Modals/video');


// exports.uploadVideo = async (req , res) =>{
//     try{
//       const {title , description, videoLink, videoType,thumbnail} = req.body;

//        const videoupload = new video({user:req.user._id, description,videoLink,videoType,thumbnail});
//        await videoupload.save();

//        res.Status(201).json({sucess:"true",videoupload});
//     }catch(error){
   
//          res.Status(500).json({error:"server error"});
//     }
// }


// const video = require('../Modals/video');


// exports.uploadVideo = async (req, res) => {
//   try {
//     const { title, description, videoLink, videoType, thumbnail } = req.body;

//     const videoupload = new video({
//       user: req.user._id,
//       description,
//       videoLink,
//       videoType,
//       thumbnail
//     });

//     await videoupload.save();

    
//     res.status(201).json({ success: "true", videoupload });

//   } catch (error) {
//     console.error("Upload error:", error.message);

    
//     res.status(500).json({ error: "Server error" });
//   }
// };




// exports.getAllVideo = async(req , res) =>{
//   try{
//       const videos = await video.find().populate('user','channelName profilePic userName createdAt' );
//       res.status(201).json({sucess:"true", "videos":videos});
//   }
//   catch(error){
//   res.status(500).json({ error: "Server error" });
//   }

// }

// exports.getvedioById = async (req , res) =>{
//   try{
    
// let {id} = req.params;
     
//   const video =await video.findById(id);
// res.status(201).json({sucess:"true", "videos":videos});



//   }  catch(error){
//   res.status(500).json({ error: "Server error" });
//   }
// }



// exports.getvedioById = async (req , res) =>{
//   try{
//     let {id} = req.params;

//     const singleVideo = await video.findById(id).populate('user','channelName profilePic userName createdAt' );;  
//     res.status(201).json({ sucess: "true", videos: singleVideo });  

//   } catch(error){
//     res.status(500).json({ error: "Server error" });
//   }
// }


// exports.getAllvideoByUserID = async (req, res) =>{


//   try{
//       let {userId} = req.params;
//       const video = await video.find({user:userId});
//        res.status(201).json({ sucess: "true", videos: Video });  
//   }catch(error){
//     res.status(500).json({ error: "Server error" });
//   }
// }


// const video = require('../Modals/video');  // ✅ Removed duplicate import

// exports.uploadVideo = async (req, res) => {
//   try {
//     const { title, description, videoLink, videoType, thumbnail } = req.body;

//     const videoupload = new video({
//       user: req.user._id,
//       title,                     
//       description,
//       videoLink,
//       videoType,
//       thumbnail
//     });

//     await videoupload.save();

//     res.status(201).json({ sucess: "true", videoupload });  // ✅ fixed `.Status` to `.status`

//   } catch (error) {
//     console.error("Upload error:", error.message);
//     res.status(500).json({ error: "Server error" });        // ✅ fixed `.Status` to `.status`
//   }
// };


// exports.getAllVideo = async (req, res) => {
//   try {
//     const videos = await video.find().populate('user', 'channelName profilePic userName createdAt');
//     res.status(201).json({ sucess: "true", "videos": videos });  // ✅ fixed `.Status` to `.status`
//   }
//   catch (error) {
//     res.status(500).json({ error: "Server error" });
//   }
// }


// exports.getvedioById = async (req, res) => {
//   try {
//     let { id } = req.params;

//     const singleVideo = await video.findById(id).populate('user', 'channelName profilePic userName createdAt');
//     res.status(201).json({ sucess: "true", videos: singleVideo });  // ✅ fixed `.Status` to `.status`
//   } catch (error) {
//     res.status(500).json({ error: "Server error" });
//   }
// }


// exports.getAllvideoByUserID = async (req, res) => {
//   try {
//     let { userId } = req.params;
//     const videoList = await video.find({ user: userId }).populate('user', 'channelName profilePic userName createdAt about ');  // ✅ Avoid conflict by using another variable (still `video` model used)
//     res.status(201).json({ sucess: "true", videos: videoList });  // ✅ fixed variable name `Video` to `videoList` (no model name changed)
//   } catch (error) {
//     res.status(500).json({ error: "Server error" });
//   }
// }


const video = require('../Modals/video');

exports.uploadVideo = async (req, res) => {
  try {
    const { title, description, videoLink, videoType, thumbnail } = req.body;

    const videoupload = new video({
      user: req.user._id,
      title,
      description,
      videoLink,
      videoType,
      thumbnail
    });

    await videoupload.save();

    res.status(201).json({ success: "true", videoupload });

  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getAllVideo = async (req, res) => {
  try {
    const videos = await video.find().populate('user', 'channelName profilePic userName createdAt');
    res.status(200).json({ success: "true", videos });
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getvedioById = async (req, res) => {
  try {
    let { id } = req.params;
    const singleVideo = await video.findById(id).populate('user', 'channelName profilePic userName createdAt');
    res.status(200).json({ success: "true", videos: singleVideo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getAllvideoByUserID = async (req, res) => {
  try {
    let { userId } = req.params;
    const videoList = await video.find({ user: userId }).populate('user', 'channelName profilePic userName createdAt about');
    res.status(200).json({ success: "true", videos: videoList });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};


