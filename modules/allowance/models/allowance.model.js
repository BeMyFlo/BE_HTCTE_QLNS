import {model, Schema} from "mongoose"
import mongoosePaginate from 'mongoose-paginate-v2'

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
AllowanceSchema.plugin(mongoosePaginate);

export const AllowanceModel = model("Allowance", AllowanceSchema);