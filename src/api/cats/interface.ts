import { ResponseError, IdParam, DeleteMessage } from "../../types/globalTypes";
import { ParsedUrlQuery } from "querystring";
import { Cat } from "@prisma/client";
import { RequestHandler } from "express";

type CatBodyPost = {
  name: string;
  type: string;
  race: string;
  description: string;
  hairType: string;
  origin: string;
  behaviour: string;
  imageURL: string;
};

interface CatController {
  getAll: RequestHandler<null, Cat[] | ResponseError, null, null>;
  getOne: RequestHandler<IdParam, Cat | ResponseError, null, null>;
  create: RequestHandler<null, Cat | ResponseError, CatBodyPost, null>;
  update: RequestHandler<IdParam, Cat | ResponseError, CatBodyPost, null>;
  delete: RequestHandler<IdParam, DeleteMessage | ResponseError, null, null>;
  uploadImage: RequestHandler<
    IdParam,
    Cat | ResponseError,
    null,
    ParsedUrlQuery
  >;
}

export default CatController;
