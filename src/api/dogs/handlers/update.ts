import prisma from "../../../../prisma/clients";
import DogController from "../interface";

const updateDog: DogController["update"] = async (req, res) => {
  const { id } = req.params;
  const { name, type, race, description, hairType, origin, size } = req.body;

  try {
    const updatedDog = await prisma.dog.update({
      where: {
        id,
      },
      data: {
        name,
        type,
        race,
        description,
        hairType,
        origin,
        size,
      },
    });
    res.status(204).json(updatedDog);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default updateDog;
