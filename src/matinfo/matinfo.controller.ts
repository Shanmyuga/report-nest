import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { MaterialInfoDto } from './dto/matinfo.dto';
import { MatInfoService } from './matinfo.service';
import { MaterialInfo } from './interfaces/matinfo.interface';

@Controller('matInfo')
export class MatInfoController {
  constructor(private readonly matInfoService: MatInfoService) {}

  @Post()
  async create(@Body() materialInfoDto: MaterialInfoDto) {
    return this.matInfoService.create(materialInfoDto);
  }

  @Get()
  async findAll(): Promise<MaterialInfo[]> {
    return this.matInfoService.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return this.matInfoService.find(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() materialInfoDto: MaterialInfoDto) {
    return this.matInfoService.update(id, materialInfoDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.matInfoService.delete(id);
  }
}
