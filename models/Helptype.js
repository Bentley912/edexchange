module.exports = function(sequelize, DataTypes) {
    var Helptype = sequelize.define("Helptype", {

        type: {
            type: DataTypes.STRING
        },

    }, {

        classMethods: {
            associate: function(models) {

                Bid.belongsTo(models.Expert, {
                    foreignKey: {
                        allowNull: false
                    }
                });
               
            }
        }
    });
    return Helptype;
    };