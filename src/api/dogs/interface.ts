import { ResponseError, IdParam, DeleteMessage } from "../../types/globalTypes";
import { Dog } from "@prisma/client";
import { RequestHandler } from "express";

type DogBodyPost = {
  name: string;
  type: string;
  race: string;
  description: string;
  hairType: string;
  origin: string;
  size: string;
};

interface DogController {
  getAll: RequestHandler<null, Dog[] | ResponseError, null, null>;
  getOne: RequestHandler<IdParam, Dog | ResponseError, null, null>;
  create: RequestHandler<null, Dog | ResponseError, DogBodyPost, null>;
  update: RequestHandler<IdParam, Dog | ResponseError, DogBodyPost, null>;
  delete: RequestHandler<IdParam, DeleteMessage | ResponseError, null, null>;
}

export default DogController;
