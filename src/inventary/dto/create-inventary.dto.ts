import { ObjectType, Field, Int, ID } from "type-graphql";

@ObjectType()
export class CreateInventaryDto {
@Field(() => ID)
readonly id: String

@Field() 
readonly numeroLoja: String;

@Field() 
readonly codigoProduto: String;

@Field() 
readonly nomeProduto: String;

@Field(() => Int) 
readonly quantidadeProduto: Number;
}