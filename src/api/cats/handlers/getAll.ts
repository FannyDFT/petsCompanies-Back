import prisma from "../../../../prisma/clients";
import CatController from "../interface";

const getAllCat: CatController["getAll"] = async (req, res) => {
  try {
    const cats = await prisma.cat.findMany();

    res.status(200).json(cats);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getAllCat;
