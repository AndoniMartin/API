exports = module.exports=function(app,mongoose)
{
	var modeloSchema = new mongoose.Schema({
		//Aquí va la definición del esquema de mongoose
		});
	mongoose.model('Modelo',modeloSchema);
};