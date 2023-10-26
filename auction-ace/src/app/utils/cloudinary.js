import cloudinary from 'cloudinary';

cloudinary.config({ 
    cloud_name: 'drv5m7snk', 
    api_key: '375535683849763', 
    api_secret: 'bBERTT2zFbCI-5a8Kaarun3XuOQ',
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

