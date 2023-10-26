import cloudinary from 'cloudinary';

cloudinary.config({ 
    cloud_name: process.env.CLOUNDINARY_CLOUD_NAME,
    api_key: process.env.CLOUNDINARY_API_KEY,
    api_secret: process.env.CLOUNDINARY_API_SECRET,
    secure: true
  });

const uploads = (file, folder)=>{
    return new Promise((resolve, reject)=>{
        const uploadImage = cloudinary.uploader.upload(
            file, 
            {
                resource_type: "auto",
                folder: folder
            }
        )
        return uploadImage.secure_url
    })
}

export {uploads, cloudinary}

