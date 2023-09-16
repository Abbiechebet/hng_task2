import { Schema, model, Query} from "mongoose"

const personSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        optional: true
    },
});

personSchema.pre(/^find/, function (next){
    if (this instanceof Query) {
        this.where({ isDeleted: { $ne: true } }); 
      }  
      next()
    })

export default model('PersonModel', personSchema);

