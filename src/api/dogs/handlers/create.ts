import prisma from "../../../../prisma/clients";
import DogController from "../interface";

const createDog: DogController["create"] = async (req, res) => {
  const { name, type, race, description, hairType, origin, size, imageURL } =
    req.body;

  try {
    const newDog = await prisma.dog.create({
      data: {
        name,
        type,
        race,
        description,
        hairType,
        origin,
        size,
        imageURL,
      },
    });
    res.status(200).json(newDog);
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: error });
  }
};

export default createDog;
