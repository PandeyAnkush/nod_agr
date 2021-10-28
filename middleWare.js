// get_api to take the id as pramas and retrun data
// put_api to take id from query param and check if it is exist if not than make new entry
//data is taken from body
//caller funtion is get_1.js

const con =require ('./sql_mod');
let my_middleware = {
	get_api: function(req,res,next){
		let id =  req.query.id;
		if(isNaN(id)){
			res.send('Id must be a number');
		}
		else{
			console.log(id);
			res.send(id);
			
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
		
	},
	put_api: function(req,res,next){
		let id = req.query.id;
		if(isNaN(id)){
			res.send('Id must be a number');
		}
		else{

			let id = req.body.identity;
			let name = '"' +req.body.name+'"' ;
			let countrycode = '"' +req.body.countrycode+'"' ;
			let dist = '"' +req.body.dist+'"' ;
			let population = req.body.pop;
			//console.log(req.body.identity);
			//console.log(name);
			//console.log(countrycode);
			//console.log(dist);
			//console.log(pop);
			//res.send(req.body);
			let identity=req.query.id;
			let q = "select * from city where id ="+ req.query.id;
			con.query(q,function(err,result, field){
				if(err) throw err;
				if(!result.length){
				q='insert into city (ID,Name,CountryCode,District,Population)values ('+id+','+name+','+countrycode+','+dist+','+population+');	';
				q='insert into city (ID,Name,CountryCode,District,Population)values ('+id+','+name+','+countrycode+','+dist+','+population+');';
				//console.log(q);
				con.query(q,function(err,result,fields){
				if(err)throw(err);
				console.log('Data Updated');
				res.send('Data updated'); 	
				})
				}
				else {
					res.send('User already exists');
					return next();
				}
			});
		}
	}
}
module.exports = my_middleware;
