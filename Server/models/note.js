exports = module.exports=function(app,mongoose)
{
	var noteSchema = new mongoose.Schema({
		NO_TITLE:{type:String, required:true},
		NO_TEXT:{type:String, required:true},
		});
	mongoose.model('Note',userSchema);
};