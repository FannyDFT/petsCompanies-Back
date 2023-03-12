import prisma from "../../../../prisma/clients";
import CatController from "../interface";

const getOneCat: CatController["getOne"] = async (req, res) => {
  try {
    const { id } = req.params;

    const cat = await prisma.cat.findUniqueOrThrow({
      where: {
        id,
      },
    });
    res.status(200).json(cat);
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: error });
  }
};

export default getOneCat;
