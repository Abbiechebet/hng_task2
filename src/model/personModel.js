import { Schema, model, Query} from "mongoose"

const personSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
});

personSchema.pre(/^find/, function (next){
    if (this instanceof Query) {
        this.where({ isDeleted: { $ne: true } }); 
      }  
      next()
    })

export default model('PersonModel', personSchema);

