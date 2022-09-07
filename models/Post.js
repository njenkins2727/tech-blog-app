const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');

class Post extends Model {}

Post.init(
    {
      id: {  
        type: DataTypes.INTEGER,  
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {  
          model: User,
          key: 'id'
        }
      },
      body:{
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
       sequelize,
      timestamps: true,
      freezeTableName: true,
      underscored: true,
      modelName: 'post',
    }
)

module.exports = Post;