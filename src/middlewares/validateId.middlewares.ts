import { NextFunction, Request, Response } from "express";
import { MovieRepo} from "../interfaces";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../errors";

const validateId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  
  const repo: MovieRepo = AppDataSource.getRepository(Movie);
  const id: number = Number(req.params.id)

  const movieExists: Movie | null = await repo.findOne({ where: { id } })

  if (!movieExists) {
    throw new AppError("Movie not found", 404)
    }

  res.locals = { ...res.locals, movie: movieExists }

  return next()
}

export default validateId