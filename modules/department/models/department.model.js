import {model, Schema} from "mongoose"

const DepartmentSchema = new Schema(
    {
        code: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            default: ''
        }
    }
)

export const DepartmentModel = model("Department", DepartmentSchema);