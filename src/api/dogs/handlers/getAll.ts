import prisma from "../../../../prisma/clients";
import DogController from "../interface";

const getAllDogs: DogController["getAll"] = async (req, res) => {
  try {
    const dogs = await prisma.dog.findMany();

    res.status(200).json(dogs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getAllDogs;
