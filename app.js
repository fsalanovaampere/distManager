var		express 	= require('express'),
		mongoose	= require('mongoose'),
		ejs			= require('ejs'),
		bodyParser 	= require('body-parser'),
		distributorsRouter		= require('./routes/distributorsRouter.js'),
		systemsRouter		= require('./routes/systemsRouter.js'),
		app			= express();

app.set('view engine', 'ejs');

app.use('/distributors', distributorsRouter);
app.use('/systems', systemsRouter);

app.get('/',(req, res)=>{
	res.render('landingPage')
})

app.listen(3000,console.log('started'))