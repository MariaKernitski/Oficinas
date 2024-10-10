import { Schema, model } from "mongoose";

const VehicleSchema = new Schema({
  plate: {
    type: String,
    required: true,
    unique: true,
    maxLength: 7,
    minLength: 7,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  maintenances: [{
    type: [Schema.Types.ObjectId],
    ref: "Maintenance",
    required: true,
  }],
});

const Vehicle = model("Vehicle", VehicleSchema);

export default Vehicle;