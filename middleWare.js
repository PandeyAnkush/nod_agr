const con =require ('./sql_mod');
let my_middleware = {
	validate: function(req,res,next){
		let id =  req.query.id;
		if(isNaN(id)){
			res.send('Id must be a number');
		}
		else{
			let q ='select * from city where id =' + id;
			console.log(q);
			con.query(q, function(err,result,fields){
				if(err) throw err;
				if(!result.length)
				{
					res.sendStatus(404);
					return next();
				}
				res.send(result);
				console.log(result);
			}
			);
		}
		
	}
}
module.exports = my_middleware;
