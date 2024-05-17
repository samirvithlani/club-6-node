const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name:"enter your cloud name here",
    api_key:"enter your api key here",
    api_secret:"enter your api secret key here"
})

const uploadImage = async(file)=>{


    const res = await cloudinary.uploader.upload(file.path);
    //console.log(res);
    return res;


}
module.exports = {uploadImage}