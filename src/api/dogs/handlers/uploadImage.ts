/* eslint-disable no-console */
import { UploadApiResponse } from "cloudinary";
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import asyncFormParse from "../../../../utils/asyncFormParse";
import cloudinaryUpload from "../../../../utils/cloudinaryUploads";
import prisma from "../../../../prisma/clients";
import DogController from "../interface";

const uploadImage: DogController["uploadImage"] = async (req, res) => {
  const { id } = req.params;
  console.log("ici", id);
  console.log(req.headers);
  try {
    const { files, fields } = await asyncFormParse(req);
    console.log(files, fields);
    const cloudinaryResponse = await cloudinaryUpload(files.image[0].path);
    if (!cloudinaryResponse) {
      throw new Error("upload error");
    }
    const dog = await prisma.dog.update({
      where: { id },
      data: { imageURL: cloudinaryResponse!.url },
    });
    res.status(200).send(dog);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default uploadImage;
