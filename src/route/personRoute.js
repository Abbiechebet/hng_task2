import {Router} from "express"
import PersonController from "../controller/person.js"
import { tryCatchHandler} from "../utils/tryCatch.handler.js"

const router = Router()

router.post("/", tryCatchHandler( PersonController.createPerson))

router.put("/:user_id", tryCatchHandler( PersonController.updateOnePerson))

router.get("/:user_id", tryCatchHandler( PersonController.findPerson))

router.delete("/:user_id",  tryCatchHandler( PersonController.deletePerson))

export {router}