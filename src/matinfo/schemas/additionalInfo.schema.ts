import * as mongoose from 'mongoose';

export const AdditionalInfoSchema = new mongoose.Schema({
  label: { type: String, required: true },
  datatype: { type: String, required: true },
  mandatory: { type: String, required: true },
  dropValues: { type: [String], required: false },

});
