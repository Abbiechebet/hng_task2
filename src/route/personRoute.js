import {Router} from "express"
import PersonController from "../controller/person.js"
import { tryCatchHandler} from "../utils/tryCatch.handler.js"

const router = Router()

router.post("/create", tryCatchHandler( PersonController.createPerson))

router.put("/update/:id", tryCatchHandler( PersonController.updateOnePerson))

router.get("/find/:id", tryCatchHandler( PersonController.findPerson))

router.delete("/delete/:id",  tryCatchHandler( PersonController.deletePerson))

export {router}