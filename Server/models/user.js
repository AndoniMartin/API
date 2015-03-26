exports = module.exports=function(app,mongoose)
{
	var Schema = mongoose.Schema;
	var userSchema = new Schema({
		US_NAME:{type:String, required:true},
		US_PASS:{type:String, required:true},
		NOTES:[{NO_ID:{type:Schema.Types.ObjectId,ref:'Note',required:true},TY_ID: {type:Number,required:true}}]
		});
	mongoose.model('User',userSchema);
};