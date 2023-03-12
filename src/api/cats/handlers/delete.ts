import prisma from "../../../../prisma/clients";
import CatController from "../interface";

const deleteCat: CatController["delete"] = async (req, res) => {
  const { id } = req.params;
  try {
    const cat = await prisma.cat.delete({
      where: {
        id,
      },
    });
    res.status(200).json({ message: `Cat "${cat.name}" deleted successfully` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default deleteCat;
