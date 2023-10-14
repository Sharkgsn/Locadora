import handleError from "./handleError.middlewares";
import validateBody from "./validateBody.middlewares";
import validateId from "./validateId.middlewares";
import verifyNameExists from "./verifyIfNameExists.middlewares";
import pagination from "./pagination.middlewares"

export default { handleError, validateBody, validateId, verifyNameExists, pagination }