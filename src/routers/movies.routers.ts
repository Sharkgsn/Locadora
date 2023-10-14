import { Router } from "express"
import middlewares from "../middlewares"
import moviesControllers from "../controllers/movies.controllers"
import { movieCreateSchema, movieUpdateSchema} from "../schemas"

export const moviesRouter: Router = Router()

moviesRouter.post('', 
    middlewares.validateBody(movieCreateSchema), 
    middlewares.verifyNameExists, 
    moviesControllers.create
    )

moviesRouter.get('',
    middlewares.pagination,
    moviesControllers.read
    )

moviesRouter.use('/:id', 
    middlewares.validateId
    )

moviesRouter.patch('/:id',  
    middlewares.verifyNameExists,
    middlewares.validateBody(movieUpdateSchema), 
    moviesControllers.update
    )
    
moviesRouter.delete('/:id', 
    moviesControllers.erase
    )

