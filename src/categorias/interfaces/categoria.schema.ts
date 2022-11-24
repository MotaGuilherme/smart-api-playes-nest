import * as mongoose from "mongoose";

export const CategoriaSchema = new mongoose.Schema({
	categoria: { type: String, unique: true},
	descricao: {type: String},
	eventos: [
		{
			nome: {type: String},
			operacao: {type: String},
			valor: { type: Number}
		}
	],
	jogadores: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "jogadores"
	}]

}, {timestamps: true, collection: 'categorias'});
