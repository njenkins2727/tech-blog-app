const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
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