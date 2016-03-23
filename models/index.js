var db=require('mongoskin').db('mongodb://root:123@localhost:27017/appsessions');

var instance={
	getAll:function(callback){
		var getresult;
	    // return db.collection('mycollection').find();
	    db.collection('mycollection').find().toArray(function(err,result){
	      if(!err)
	        callback(err,result);
	      else
	        console.log("error");
	    });


	}
}

module.exports=instance;