import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.CLOUDINARY_CLOUD_NAME);
console.log(process.env.CLOUDINARY_API_KEY);
console.log(process.env.CLOUDINARY_API_SECRET);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      console.error("No file path provided");
      return null;
    }

    console.log(`Uploading file at path: ${localFilePath}`);

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
      folder: "books",
    });

    console.log("file is uploaded on cloudinary", response.url);
    return response;
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error.message);
    fs.unlinkSync(localFilePath);
    return null;
  }
};

export { uploadOnCloudinary };
