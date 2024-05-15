const multer = require('multer');

const storage = multer.diskStorage({
    destination:"./uploads/",
    filename: function(req, file, cb){
        console.log(file.originalname);
        cb(null,file.originalname);
    }
})


const upload = multer({
    storage: storage,
    limits:{fileSize: 1000000},
    fileFilter: function(req, file, cb){

        if(file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg"){
            cb(null,true)
        }
        else{
            
            cb(null,false)
        }


    }
}).single('file');

const uploadFile = (req, res) => {

        try{

            upload(req, res, (err) => {
                if(err){
                    res.status(500).json({
                        message:err
                    })
                }
                else{
                    res.status(200).json({
                        message:"File uploaded successfully",
                        file:req.file
                    })
                }
            })    


        }catch(err){
            res.status(500).json({message:err.message});
        }

}
module.exports = {
    uploadFile
}