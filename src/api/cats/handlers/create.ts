import prisma from "../../../../prisma/clients";
import CatController from "../interface";

const createCat: CatController["create"] = async (req, res) => {
  const {
    name,
    type,
    race,
    description,
    hairType,
    origin,
    behaviour,
    imageURL,
  } = req.body;

  try {
    const newCat = await prisma.cat.create({
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
    res.status(200).json(newCat);
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: error });
  }
};

export default createCat;
