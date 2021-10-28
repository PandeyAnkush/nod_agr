const exp = require ('express');
const app = exp();
const hw ='hello world!!';
const midd =require('./middleWare');
app.use(exp.json());


app.get('/',function(req,res)
{
	res.send(hw);
});

app.get('/sql',midd.get_api);
app.put('/sql',midd.put_api);
app.listen(3000);