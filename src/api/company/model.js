import mongoose, { Schema } from 'mongoose'

const companySchema = new Schema({
  name: {
    type: String
  },
  address: {
    type: String
  },
  website: {
    type: String
  }
}, {
  timestamps: true
})

companySchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      address: this.address,
      website: this.website,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Company', companySchema)

export const schema = model.schema
export default model
