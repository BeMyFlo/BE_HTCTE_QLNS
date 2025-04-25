import {model, Schema} from "mongoose"

const AllowanceSchema = new Schema(
    {
        code: {
          type: String,
          required: true
        },
        name: {
            type: String,
            required: true
        },
        value: {
            type: Number,
            required: true
        }
    }
)

export const AllowanceModel = model("Allowance", AllowanceSchema);