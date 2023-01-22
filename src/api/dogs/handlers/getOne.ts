import prisma from "../../../../prisma/clients";
import DogController from "../interface";

const getOneDog: DogController["getOne"] = async (req, res) => {
  try {
    const { id } = req.params;

    const dog = await prisma.dog.findUniqueOrThrow({
      where: {
        id,
      },
    });
    res.status(200).json(dog);
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: error });
  }
};

export default getOneDog;
