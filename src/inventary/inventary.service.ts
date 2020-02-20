import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Inventary } from './interfaces/inventary.interface';
import { CreateInventaryDto } from './dto/create-inventary.dto';
import { InventaryInput } from 'src/inputs/inventary.input';

@Injectable()
export class InventaryService {
  constructor(@InjectModel('Inventary') private readonly inventaryModel: Model<Inventary>) {}

  async create(createInventaryDto: InventaryInput): Promise<Inventary> {
    const createdCat = new this.inventaryModel(createInventaryDto);
    return await createdCat.save();
  }

  async findAll(): Promise<Inventary[]> {
    return await this.inventaryModel.find().exec();
  }
}
