const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    id: {
        type: DataTypes.INTEGER,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      difficulty: { 
        type: DataTypes.ENUM('1', '2', '3', '4', '5'),
        allowNull: true,
      }, 
      
      duration: { 
        type: DataTypes.ENUM('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'),
        allowNull: false,

      }, 
      season: { 
        type: DataTypes.STRING,
        allowNull: false,
      }

  });
};
