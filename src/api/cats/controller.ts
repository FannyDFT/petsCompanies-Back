import CatController from "./interface";
import getAll from "./handlers/getAll";
import getOne from "./handlers/getOne";
import update from "./handlers/update";
import create from "./handlers/create";
import deleteCat from "./handlers/delete";
import uploadImage from "./handlers/uploadImage";

const controller: CatController = {
  getAll,
  getOne,
  update,
  create,
  delete: deleteCat,
  uploadImage,
};

export default controller;
