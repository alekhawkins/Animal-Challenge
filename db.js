const Sequelize = require('sequelize');

const sequelize = new Sequelize('blue-server-challenges', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres',
})

sequelize.authenticate()
  .then(
    function(){
      console.log('Connected to blue-server-challenges postgres database!')
    }, 
    function(err){
      console.log(err);
    }
  )

  module.exports = sequelize;