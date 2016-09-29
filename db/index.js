var Sequelize = require("sequelize");
var db = new Sequelize(process.env.DATABASE_URL);

var SalesPerson = db.define('sales_person', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	}
});

var Region = db.define('region',{
	zipcode: {
		type: Sequelize.STRING,
		allowNull: false
	}
});

module.exports = {
	models: {
		SalesPerson: SalesPerson,
		Region: Region
	},
	syncAndSeed: function(){
		return db.sync({force: true})
		.then(function(){
			return Promise.all([
				SalesPerson.create({ name: 'Mo' }),
				SalesPerson.create({ name: 'Larry' }),
				SalesPerson.create({ name: 'Curly' }),
				Region.create({ zipcode: '10530' }),
				Region.create({ zipcode: '10531' }),
				Region.create({ zipcode: '12345'})
				])
		})
	}
}