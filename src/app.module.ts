import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {GraphQLModule } from '@nestjs/graphql'
import {MongooseModule } from '@nestjs/mongoose'
import { InventaryModule } from './inventary/inventary.module';

@Module({
  imports: [ 
    InventaryModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    MongooseModule.forRoot(process.env.URI_MONGO),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
