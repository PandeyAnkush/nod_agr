const exp = require ('express');
const app = exp();
const hw ='hello world!!';
const con =require ('./sql_mod');
const midd =require('./middleWare');



app.get('/',function(req,res)
{
	res.send(hw);
});

app.get('/sql',midd.validate)
app.listen(3000);