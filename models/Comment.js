const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Post = require('./Post');
const User = require('./User');

class Comment extends Model {}

Comment.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {  
          model: User,
          key: 'id'
        }
      },
      post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {  
          model: Post,
          key: 'id'
        }
      },
      body: {
        type:DataTypes.TEXT,
        allowNull: false,
      }
    },
    {
      sequelize,
      timestamps: true,
      underscored: true,
      modelName: 'comment',
    }
)

module.exports = Comment;