import { z } from "zod";
import { movieCreateSchema } from "../schemas";
import { DeepPartial, Repository } from "typeorm";
import { Movie } from "../entities";

type MovieCreate = z.infer<typeof movieCreateSchema>
type MovieRead = Array<Movie>
type MovieUpdate = DeepPartial<MovieCreate>

type MovieRepo = Repository<Movie>

export {
    MovieCreate,
    MovieRead,
    MovieUpdate,
    MovieRepo
}