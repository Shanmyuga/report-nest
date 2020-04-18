import * as mongoose from 'mongoose';
import { AdditionalInfoSchema } from './additionalInfo.schema';

export const MatinfoSchema = new mongoose.Schema({
  seqMaterialInfoId: { type: Number },
  materialCatType: { type: String, required: true },
  materialCatDept: { type: String, required: true },
  materialCatId: { type: Number, required: true },
  numberOfSpecs: { type: Number, required: true},
  additionalInfo : {type: [AdditionalInfoSchema],required:true},
  updatedAt: { type: Date, default: Date.now },
  insertedBy :  { type: String, required: false },
  updatedBy:  { type: String, required: false },
});
