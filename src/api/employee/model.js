import mongoose, { Schema } from 'mongoose'

// const addressSchema = new Schema({
//   AddressType: {
//     type: String
//   },
//   AddressLine1: {
//     type: String
//   }
// })

// new comment added

const employeeSchema = new Schema({
  FirstName: {
    type: String
  },
  LastName: {
    type: String
  },
  MiddleName: {
    type: String
  },
  Sufix: {
    type: String
  },
  DisplayName: {
    type: String
  },
  FormalName: {
    type: String
  },
  Title: {
    type: String
  },
  BirthName: {
    type: String
  },
  Initials: {
    type: String
  },
  Prefix: {
    type: String
  },
  Gender: {
    type: String
  },
  MaritalStatus: {
    type: String
  },
  MaritalStatusSince: {
    type: String
  },
  SecondNationality: {
    type: String
  },
  ThirdNationality: {
    type: String
  },
  NativePreferredLanguage: {
    type: String
  },
  ChallengeStatus: {
    type: String
  },
  CertificateStartDate: {
    type: String
  },
  CertificateEndDate: {
    type: String
  },
  Addresses: [{ AddressType: String, AddressLine1: String }]
}, {
  timestamps: true
})

employeeSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      FirstName: this.FirstName,
      LastName: this.LastName,
      MiddleName: this.MiddleName,
      Sufix: this.Sufix,
      DisplayName: this.DisplayName,
      FormalName: this.FormalName,
      Title: this.Title,
      BirthName: this.BirthName,
      Initials: this.Initials,
      Prefix: this.Prefix,
      Gender: this.Gender,
      MaritalStatus: this.MaritalStatus,
      MaritalStatusSince: this.MaritalStatusSince,
      SecondNationality: this.SecondNationality,
      ThirdNationality: this.ThirdNationality,
      NativePreferredLanguage: this.NativePreferredLanguage,
      ChallengeStatus: this.ChallengeStatus,
      CertificateStartDate: this.CertificateStartDate,
      CertificateEndDate: this.CertificateEndDate,
      Addresses: this.Addresses,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Employee', employeeSchema)

export const schema = model.schema
export default model
