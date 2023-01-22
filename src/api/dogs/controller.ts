import DogController from "./interface";
import getAll from "./handlers/getAll";
import getOne from "./handlers/getOne";
import update from "./handlers/update";
import create from "./handlers/create";
import deleteDog from "./handlers/delete";

const controller: DogController = {
  getAll,
  getOne,
  update,
  create,
  delete: deleteDog,
};

export default controller;
