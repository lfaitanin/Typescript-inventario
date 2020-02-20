import {Resolver, Query, Mutation, Args} from '@nestjs/graphql';
import { InventaryService } from './inventary.service';
import { CreateInventaryDto } from './dto/create-inventary.dto';
import { InventaryInput } from '../inputs/inventary.input'
@Resolver()
export class InventaryResolver {
  constructor(
    private readonly inventariesService: InventaryService,
  ) {}

  @Query(() => String)
  async hello() {
    return 'Hello world';
  }

 @Query(() => [CreateInventaryDto])
  async inventary() {
    return this.inventariesService.findAll();
  }

  @Mutation(() => CreateInventaryDto)
  async create(@Args('input') input: InventaryInput ) {
    return this.inventariesService.create(input);
  }
}