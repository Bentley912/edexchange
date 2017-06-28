module.exports = function(sequelize, DataTypes) {
    var Helptype = sequelize.define("Helptype", {

        type: {
            type: DataTypes.STRING
        },

    }, {

        classMethods: {
            associate: function(models) {

                Helptype.belongsTo(models.Expert, {
                    foreignKey: {
                        allowNull: false
                    }
                });
               
            }
        }
    });
    return Helptype;
    };