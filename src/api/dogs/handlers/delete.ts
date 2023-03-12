import prisma from "../../../../prisma/clients";
import DogController from "../interface";

const deleteDog: DogController["delete"] = async (req, res) => {
  const { id } = req.params;
  try {
    const dog = await prisma.dog.delete({
      where: {
        id,
      },
    });
    res.status(200).json({ message: `Dog "${dog.name}" deleted successfully` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default deleteDog;
