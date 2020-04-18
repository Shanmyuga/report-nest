import { Document } from 'mongoose';
import { AdditionalInfoDto } from '../dto/additionalInfo.dto';

export interface  MaterialInfo extends  Document{
  readonly seqMaterialInfoId: number;
  readonly materialCatType: string;
  readonly materialCatDept: string;
  readonly materialCatId: number;
  readonly numberOfSpecs: number;
  readonly updatedAt: Date;
  readonly insertedBy: string;
  readonly updatedBy: string;
  readonly additionalInfo: [AdditionalInfoDto];
}
