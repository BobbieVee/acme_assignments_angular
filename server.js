const server = require('http').createServer(require('./app'));

const port = process.env.PORT || 3000;



if(process.env.SYNC)
	require('./db').syncAndSeed()
	.then(function(){
		console.log('Synced baby, and we are Seeded!');
	})
	.catch(function(err){
		console.log(err);
	})

server.listen(port, function(){
	console.log('listening very closely on port ', port);
})