import DogController from "./interface";
import getAll from "./handlers/getAll";
import getOne from "./handlers/getOne";
import update from "./handlers/update";
import create from "./handlers/create";
import deleteDog from "./handlers/delete";
import uploadImage from "./handlers/uploadImage";

const controller: DogController = {
  getAll,
  getOne,
  update,
  create,
  delete: deleteDog,
  uploadImage,
};

export default controller;
