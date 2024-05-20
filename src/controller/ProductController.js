const productSchema = require("../models/ProductModel");
const multer = require("multer");
const readExcell = require("../util/ReadExcell");

const createProduct = async (req, res) => {
  try {
    const createdProduct = await productSchema.create(req.body);
    res.status(201).json({
      status: "success",
      data: createdProduct,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).single("file");
const bulkCreateProduct = async (req, res) => {

    var data =[]
  const products = req.body; //[]

  try {

    upload(req,res,async (err)=>{

        if(err){
            res.status(500).json({
                status: "error",
                message: err.message,
            });
        }
        else{
            
            data = readExcell.readDataFromExcel(req.file.path);
            const createdProducts = await productSchema.insertMany(data);
            res.status(201).json({
              status: "success",
              data: createdProducts,
            });
            
        }

    })

    
  
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = {
  createProduct,
  bulkCreateProduct,
};
