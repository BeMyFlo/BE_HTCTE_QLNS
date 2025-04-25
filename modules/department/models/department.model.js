import {model, Schema} from "mongoose"
import mongoosePaginate from 'mongoose-paginate-v2'

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
        },
        visible: {
            type: Boolean,
            default: true
        },
        deletedAt: {
            type: Date,
            default: null,
        }
    },
    {
        timestamps: true,
    }
)
DepartmentSchema.plugin(mongoosePaginate);

export const DepartmentModel = model("Department", DepartmentSchema);