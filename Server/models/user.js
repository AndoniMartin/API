exports = module.exports=function(app,mongoose)
{
	var Schema = mongoose.Schema;
	var userSchema = new Schema({
		US_NAME:{type:String, required:true},
		US_PASS:{type:String, required:true},
		NO_ID:[{type:Schema.Types.ObjectId,ref:'note',required:true},{type:Number,required:true}]
		});
	mongoose.model('User',userSchema);
};