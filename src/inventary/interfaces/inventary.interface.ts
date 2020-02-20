import { Document } from 'mongoose'

export interface Inventary extends Document {
 readonly numeroLoja: String,
 readonly codigoProduto: String,
 readonly nomeProduto: String,
 readonly quantidadeProduto: Number,
}