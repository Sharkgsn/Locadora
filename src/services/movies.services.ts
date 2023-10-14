import { FindManyOptions } from "typeorm"
import { AppDataSource } from "../data-source"
import { Movie } from "../entities"
import { MovieCreate, MovieRead, MovieRepo, MovieUpdate, Pagination, PaginationParams } from "../interfaces"

const create = async (payLoad: MovieCreate): Promise<Movie> => {
    const repo: MovieRepo = AppDataSource.getRepository(Movie)
    const movie: Movie = repo.create(payLoad)

    await repo.save(movie)

    return movie
}

const read = async ({
    page,
    perPage,
    order,
    sort,
    prevPage,
    nextPage,
  }: PaginationParams): Promise<Pagination> => {
    const repo: MovieRepo = AppDataSource.getRepository(Movie);
  
    const findOptions: FindManyOptions<Movie> = {
      skip: page,
      take: perPage,
    };
  
    if (sort) {
      findOptions.order = {
        [sort]: order,
      };
    }
  
    const [movies, count]: [Movie[], number] = await repo.findAndCount(findOptions);
  
    return {
      prevPage: page <= 1 ? null : prevPage,
      nextPage: count - page <= perPage ? null : nextPage,
      count,
      data: movies,
    };
  };
  
const retrieve = async(): Promise<MovieRead> => {
    const repo: MovieRepo = AppDataSource.getRepository(Movie)
    
    return await repo.find()
}



const update = async (movie: Movie, payLoad: MovieUpdate): Promise<Movie> => {
    const repo: MovieRepo = AppDataSource.getRepository(Movie)
    const movieUpdate: Movie = repo.create({...movie, ...payLoad})
    await repo.save(movieUpdate)
    return movieUpdate
}

const erase = async (movie: Movie): Promise<void> => {
    const repo: MovieRepo = AppDataSource.getRepository(Movie)
    await repo.remove(movie)
}

export default {
    create,
    read,
    update,
    erase,
    retrieve
}