import {createPersonValidator, updatePersonValidator} from "../validators/joiValidators.js"
import PersonModel from "../model/personModel.js"
import { BadUserRequestError, NotFoundError } from "../customError/error.js"
import { mongoIdValidator } from "../validators/mongoIdValidator.js"

export default class PersonController {
  static async createPerson(req, res,){
      const {error } = createPersonValidator.validate(req.body)
      if(error) throw error
      const person = await PersonModel.create({...req.body })
      res.status(201).json({
      message: "person created successfully",
      status: "Success",
      data:{
        person: person
      }
    })
  }

  static async updateOnePerson(req, res){
    const { id } = req.params
    const { error } = mongoIdValidator.validate(req.params)
    if( error ) throw new BadUserRequestError("Please pass in a valid mongoId")

    const updateValidatorResponse = await updatePersonValidator.validate(req.body)
    const updatePersonError = updateValidatorResponse.error
    if(updatePersonError) throw updatePersonError

    const person = await PersonModel.findById(id)
    if(!person) throw new NotFoundError(`The person with this id: ${id}, does not exist`)

    const updatedPerson = await PersonModel.findByIdAndUpdate(id, req.body, {new: true})
    return res.status(200).json({
      message: "Person updated successfully",
      status: "Success",
      data:{
        person: updatedPerson
      }
    })
  }



  static async findPerson(req, res) {
    const { id } = req.params
    const { error } = mongoIdValidator.validate(req.params)
    if( error ) throw new BadUserRequestError("Please pass in a valid mongoId")

    const person = await PersonModel.findById(id)
    if(!person) throw new NotFoundError(`The person with this id: ${id}, does not exist`)

    return res.status(200).json({
      message: "Person found successfully",
      status: "Success",
      data: {
        person: person
      }
    })
  }


  static async deletePerson(req, res) {
    const { id } = req.params
    const { error } = mongoIdValidator.validate(req.params)
    if( error ) throw new BadUserRequestError("Please pass in a valid mongoId")

    const person = await PersonModel.findById(id)
    if(!person) throw new NotFoundError(`The person with this id: ${id}, does not exist`)

    await person.findByIdAndUpdate(id, {
      isDeleted: true
    })
    // await PersonModel.findOneAndDelete()

    return res.status(200).json({
      message: "Person deleted successfully",
      status: "Success",
    })
  }
}