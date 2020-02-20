import {Field, Int, InputType } from 'type-graphql'

@InputType()
export class InventaryInput {
    @Field() 
    readonly numeroLoja: String;
    @Field() 
    readonly codigoProduto: String;
    @Field() 
    readonly nomeProduto: String;
    @Field(() => Int) 
    readonly quantidadeProduto: Number;
}