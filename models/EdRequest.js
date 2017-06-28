module.exports = function(sequelize, DataTypes) {
    var EdRequest = sequelize.define("EdRequest", {

        description: {
            type: DataTypes.STRING
        },

    }, {

        classMethods: {
            associate: function(models) {

                EdRequest.belongsTo(models.Educator, {
                    foreignKey: {
                        allowNull: false
                    }
                });

                 EdRequest.hasOne(models.Helptype, {
                    onDelete: "cascade"
                });
               
            }
        }
    });
    return EdRequest;
    };