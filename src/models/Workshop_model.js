import {Schema, model} from "mongoose";

const WorkshopSchema = new Schema ({
   name: {
    type: String,
    required: true
   },
   address: {
    type: String,
    required: true
   },
   specialties: {
    type: [String],
    enum: ["MOTOR", "FREIOS", "SUSPENSÃO"],
    required: true
   },
   maintenances: [{
    type: Schema.Types.ObjectId,
    ref: "Maintenance",
    required: true
   }]
});

const Workshop = model("Workshop", WorkshopSchema);

export default Workshop;