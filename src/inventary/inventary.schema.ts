import * as mongoose from 'mongoose'

export const InventarySchema = new mongoose.Schema({
    
    numeroLoja: String,
    codigoProduto: String,
    nomeProduto: String,
    quantidadeProduto: Number,
});