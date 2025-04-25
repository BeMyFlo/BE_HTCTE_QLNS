import {model, Schema} from "mongoose"

const PositionSchema = new Schema(
    {
        code: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },

        allowances: {
            type: [String],
            default: []
        }
    }
)

export const PositionModel = model("Position", PositionSchema);