import prisma from "../../../../prisma/clients";
import CatController from "../interface";

const updateCat: CatController["update"] = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    type,
    race,
    description,
    hairType,
    origin,
    imageURL,
    behaviour,
  } = req.body;

  try {
    const updatedCat = await prisma.cat.update({
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
        behaviour,
        imageURL,
      },
    });
    res.status(204).json(updatedCat);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default updateCat;
