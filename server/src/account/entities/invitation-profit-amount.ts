import { ObjectId } from 'mongodb'

export class InvitationProfitAmount {
  _id?: ObjectId
  settingName: string
  amount: number
  createdAt: Date
  updatedAt: Date
  active: boolean
}
