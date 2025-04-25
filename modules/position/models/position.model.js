import {model, Schema} from "mongoose"
import mongoosePaginate from 'mongoose-paginate-v2'

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
        timestamps: true
    }
)
PositionSchema.plugin(mongoosePaginate);

export const PositionModel = model("Position", PositionSchema);