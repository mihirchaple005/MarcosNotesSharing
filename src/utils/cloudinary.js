import { v2 as cloudinary } from "cloudinary";

import fs from "fs";
import { AutoEncryptionLoggerLevel } from "mongodb";

cloudinary.config({

});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        const response = cloudinary.uploader.upload(localFilePath , {
            resource_type : "auto"
        })
    } catch (error) {
        fs.unlinkSync(localFilePath);
        return null;
    }
}

export { uploadOnCloudinary };