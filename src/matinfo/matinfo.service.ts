import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { MaterialInfoDto } from './dto/matinfo.dto';
import { MaterialInfo } from './interfaces/matinfo.interface';

@Injectable()
export class MatInfoService {

  constructor(@Inject('MATERIAL_MODEL') private readonly materialInfoModel: Model<MaterialInfo>) {}

  async create(materialInfoDto: MaterialInfoDto): Promise<MaterialInfo> {
    const createdMaterialInfo = new this.materialInfoModel(materialInfoDto);
    return  createdMaterialInfo.save();
  }

  async findAll(): Promise<MaterialInfo[]> {
    return await this.materialInfoModel.find().exec();
  }



  async find(id: string): Promise<MaterialInfo[]> {
    return await this.materialInfoModel.findById(id).exec();
  }

  async update(id: string, materialInfoDto: MaterialInfoDto): Promise<MaterialInfo> {
    return await this.materialInfoModel.findByIdAndUpdate(id, materialInfoDto);
  }

  async delete(id: string): Promise<MaterialInfo> {
    return await this.materialInfoModel.findByIdAndRemove(id);
  }
}
