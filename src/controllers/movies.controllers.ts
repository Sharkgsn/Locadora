import { Request, Response } from "express"
import { Movie } from "../entities"
import { Pagination } from "../interfaces"
import moviesServices from "../services/movies.services"

const create = async (req: Request, res: Response): Promise<Response> => {
    const movie: Movie = await moviesServices.create(req.body)

    return res.status(201).json(movie)
}

const read = async (req: Request, res: Response): Promise<Response> => {
    const pagination: Pagination = await moviesServices.read(res.locals.pagination)

    return res.status(200).json(pagination)
}

const retrieve = async (req: Request, res: Response): Promise<Response> => {

    return res.status(200).json(res.locals.movie)
}


const update = async (req: Request, res: Response): Promise<Response> => {
    const movie: Movie = await moviesServices.update(res.locals.movie, req.body)

    return res.status(200).json(movie)
}

const erase = async (req: Request, res: Response): Promise<Response> => {
    await moviesServices.erase(res.locals.movie)

    return res.status(204).json()
}

export default {
    create,
    read,
    update,
    erase,
    retrieve,
}