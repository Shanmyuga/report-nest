import { AdditionalInfoDto } from './additionalInfo.dto';

export class MaterialInfoDto {
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
