import { Module } from '@nestjs/common';
import { InventaryResolver } from './Inventary.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { InventarySchema } from './inventary.schema';
import { InventaryService } from './Inventary.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Inventary', schema: InventarySchema }])],
  providers: [InventaryResolver, InventaryService],
})
export class InventaryModule {}