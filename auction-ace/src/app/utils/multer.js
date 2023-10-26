import multer from 'multer';

const storage = multer.diskStorage({
    destination: function(req,res,cb){
        cb(null, "public/productImages")
    },
    filename: function(req, file, cb){
        cb(null, new Date().toISOString()+"_"+file.originalname)
    }
})

const fileFilter = (req,file,cb)=>{
    if(file.mimetype==='image/jpeg' || file.mimetype==='image/jpg' || file.mimetype==='image/png'){
        cb(null, true)
    } else(
        {'error':'Unsupported file format.'}.
        false
    )
}

const upload = multer({
    storage,
    limits: {fieldSize: 1024 * 1024 },
    fileFilter
})

export default upload;